/**
 * Cache module — SHA256-based file caching for extracted Book data.
 *
 * Stores extracted Book JSON in the configured cache directory, keyed
 * by SHA256 hash of the source file content. Supports incremental
 * re-extraction: only files whose content has changed are re-processed.
 */

import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";

// ─── CacheEntry ────────────────────────────────────────────────────────────

export interface CacheEntry<T = unknown> {
  source_hash: string;
  extracted_at: string;
  value: T;
}

// ─── CacheManager ──────────────────────────────────────────────────────────

export class CacheManager {
  constructor(private cacheDir: string) {}

  /**
   * Read a cached value by its content hash.
   * Returns `null` if the cache file does not exist or is invalid.
   */
  async get<T>(hash: string): Promise<T | null> {
    try {
      const filePath = join(this.cacheDir, `${hash}.json`);
      const raw = await readFile(filePath, "utf-8");
      const entry: CacheEntry<T> = JSON.parse(raw) as CacheEntry<T>;
      return entry.value;
    } catch {
      return null;
    }
  }

  /**
   * Store a value in the cache under the given content hash.
   * Creates the cache directory if it does not exist.
   */
  async set<T>(hash: string, value: T): Promise<void> {
    await mkdir(this.cacheDir, { recursive: true });
    const entry: CacheEntry<T> = {
      source_hash: hash,
      extracted_at: new Date().toISOString(),
      value,
    };
    const filePath = join(this.cacheDir, `${hash}.json`);
    // Write atomically: write to temp file, then rename
    const tmpPath = `${filePath}.tmp.${Date.now()}`;
    await writeFile(tmpPath, JSON.stringify(entry, null, 2), "utf-8");
    await rename(tmpPath, filePath);
  }

  /**
   * Check whether a file has changed since it was cached.
   * Re-hashes the file and compares against the stored hash.
   */
  async hasChanged(filePath: string, cachedHash: string): Promise<boolean> {
    const currentHash = await CacheManager.hashFile(filePath);
    return currentHash !== cachedHash;
  }

  /**
   * Get cache statistics: number of entries and total size in bytes.
   */
  async getStats(): Promise<{ entries: number; sizeBytes: number }> {
    let entries = 0;
    let sizeBytes = 0;
    try {
      const { readdir, stat } = await import("node:fs/promises");
      const files = await readdir(this.cacheDir);
      for (const file of files) {
        if (file.endsWith(".json") && !file.endsWith(".tmp.")) {
          entries++;
          try {
            const stats = await stat(join(this.cacheDir, file));
            sizeBytes += stats.size;
          } catch {
            /* skip */
          }
        }
      }
    } catch {
      /* cache dir may not exist */
    }
    return { entries, sizeBytes };
  }

  /**
   * Clear all cached entries from the cache directory.
   */
  async clear(): Promise<number> {
    const { readdir, rm } = await import("node:fs/promises");
    let removed = 0;
    try {
      const files = await readdir(this.cacheDir);
      for (const file of files) {
        if (file.endsWith(".json") && !file.startsWith("errors")) {
          await rm(join(this.cacheDir, file), { force: true });
          removed++;
        }
      }
    } catch {
      /* cache dir may not exist */
    }
    return removed;
  }

  /**
   * Read logged errors from the errors.jsonl file.
   */
  static async getErrors(
    cacheDir: string,
  ): Promise<{ timestamp: string; lesson: number; error: string }[]> {
    try {
      const raw = await readFile(join(cacheDir, "errors.jsonl"), "utf-8");
      return raw
        .split("\n")
        .filter(Boolean)
        .map((line) => JSON.parse(line) as { timestamp: string; lesson: number; error: string });
    } catch {
      return [];
    }
  }

  // ─── Static helpers ──────────────────────────────────────────────────────

  /**
   * Compute SHA256 hash of a file's contents.
   */
  static async hashFile(filePath: string): Promise<string> {
    const content = await readFile(filePath);
    return CacheManager.hashContent(content.toString("utf-8"));
  }

  /**
   * Compute SHA256 hash of a string.
   */
  static hashContent(content: string): string {
    return createHash("sha256").update(content, "utf-8").digest("hex");
  }
}
