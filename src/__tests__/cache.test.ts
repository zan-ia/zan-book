import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { CacheManager } from "../cache.js";

describe("CacheManager", () => {
  let cacheDir: string;
  let cache: CacheManager;

  beforeEach(async () => {
    cacheDir = join(tmpdir(), `zanbook-test-cache-${Date.now()}-${Math.random()}`);
    await mkdir(cacheDir, { recursive: true });
    cache = new CacheManager(cacheDir);
  });

  afterEach(async () => {
    await rm(cacheDir, { recursive: true, force: true });
  });

  it("should set and get a cached value", async () => {
    const hash = "abc123";
    const value = { name: "test", data: [1, 2, 3] };

    await cache.set(hash, value);
    const retrieved = await cache.get<typeof value>(hash);
    expect(retrieved).toEqual(value);
  });

  it("should return null for missing cache entries", async () => {
    const result = await cache.get("nonexistent");
    expect(result).toBeNull();
  });

  it("should overwrite existing cache entries", async () => {
    const hash = "overwrite-test";
    await cache.set(hash, { version: 1 });
    await cache.set(hash, { version: 2 });

    const retrieved = await cache.get<{ version: number }>(hash);
    expect(retrieved?.version).toBe(2);
  });

  it("should compute consistent SHA256 hashes", async () => {
    const hash1 = CacheManager.hashContent("hello world");
    const hash2 = CacheManager.hashContent("hello world");
    const hash3 = CacheManager.hashContent("hello world!");

    expect(hash1).toBe(hash2);
    expect(hash1).not.toBe(hash3);
  });

  it("should detect file changes", async () => {
    const testFile = join(cacheDir, "test-file.txt");
    await writeFile(testFile, "content v1", "utf-8");

    const hash1 = await CacheManager.hashFile(testFile);

    await writeFile(testFile, "content v2", "utf-8");

    const hash2 = await CacheManager.hashFile(testFile);

    expect(hash1).not.toBe(hash2);
  });

  it("should report zero stats for empty cache", async () => {
    const stats = await cache.getStats();
    expect(stats.entries).toBe(0);
    expect(stats.sizeBytes).toBe(0);
  });

  it("should report correct stats after adding entries", async () => {
    await cache.set("entry1", { data: "x".repeat(100) });
    await cache.set("entry2", { data: "y".repeat(200) });

    const stats = await cache.getStats();
    expect(stats.entries).toBe(2);
    expect(stats.sizeBytes).toBeGreaterThan(0);
  });

  it("should clear all entries", async () => {
    await cache.set("a", 1);
    await cache.set("b", 2);

    const removed = await cache.clear();
    expect(removed).toBe(2);

    const stats = await cache.getStats();
    expect(stats.entries).toBe(0);
  });
});
