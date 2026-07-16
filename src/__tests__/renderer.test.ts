import { describe, it, expect } from "vitest";
import { renderBook } from "../renderer.js";
import type { Book, TemplateMapping } from "../contracts.js";

describe("renderBook", () => {
  it("should produce a non-empty Buffer for a minimal Book", async () => {
    const book: Book = {
      id: "test-course",
      title: "Test Course",
      subtitle: "A minimal test course",
      total_lessons: 1,
      metadata: {},
      lessons: [
        {
          number: 1,
          slug: "test-lesson",
          frontmatter: {
            titulo: "Test Lesson",
            modulo: "Test Module",
            aula: "1",
            tags: [],
          },
          title: "Test Lesson",
          subtitle: "A test lesson subtitle",
          objectives: ["Understand the basics", "Apply the concepts"],
          content_md: [
            "# Test Lesson",
            "",
            "This is a **test** paragraph with `inline code`.",
            "",
            "## Section 1",
            "",
            "- Item 1",
            "- Item 2",
            "",
            "> A blockquote for testing",
            "",
            "| Col1 | Col2 |",
            "|------|------|",
            "| A    | B    |",
            "",
            "```js",
            'console.log("hello");',
            "```",
          ].join("\n"),
          questions_md: ["## Questions", "", "1. What is the answer?", "2. How does it work?"].join(
            "\n",
          ),
          annotations: [],
          images: [],
        },
      ],
    };

    const mapping: TemplateMapping = {
      id: "test-template",
      name: "Test Template",
      docx_path: "",
      layout: [
        { kind: "cover", source: "cover", page_break: true },
        { kind: "toc", source: "toc", page_break: true },
        { kind: "chapter", source: "lesson", page_break: true },
        { kind: "questions", source: "questions", page_break: true },
      ],
      styles: {
        h1: "Heading 1",
        h2: "Heading 2",
        h3: "Heading 3",
        body: "Body Text",
        code: "CodeBlock",
        blockquote: "Quote",
        table_header: "Table Header",
        table_cell: "Table Cell",
        image_caption: "Caption",
        objectives: "List Bullet",
        questions_title: "Heading 2",
        questions_body: "Body Text",
      },
      annotation_styles: {
        quick_check: "Callout",
        callout_note: "Note",
        callout_warning: "Warning",
        mind_map: "Image Center",
        mermaid: "Image Center",
      },
      page_size: "A4",
      margins: {},
    };

    const buffer = await renderBook(book, mapping);
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);
  });
});
