/**
 * Type shim for the `docx` package.
 *
 * The docx v8 package ships .d.ts files that use extensionless internal
 * imports (`export * from "./file"`), which are incompatible with
 * NodeNext module resolution. This shim provides the subset of types
 * we need for the Zan Book renderer, and the actual runtime values are
 * obtained via `createRequire`.
 */

declare module "docx" {
  // ─── Alignment ─────────────────────────────────────────────────
  export const AlignmentType: {
    readonly START: "start";
    readonly END: "end";
    readonly CENTER: "center";
    readonly BOTH: "both";
    readonly JUSTIFIED: "both";
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly DISTRIBUTE: "distribute";
  };

  // ─── Borders ───────────────────────────────────────────────────
  export const BorderStyle: {
    readonly NONE: "none";
    readonly SINGLE: "single";
    readonly DOUBLE: "double";
    readonly DOTTED: "dotted";
    readonly DASHED: "dashed";
  };

  // ─── Document ──────────────────────────────────────────────────
  export interface IDocumentStyles {
    default?: IDocumentStyleDefaultOptions;
    paragraphStyles?: (ParagraphStyleOptions | undefined)[];
    characterStyles?: (CharacterStyleOptions | undefined)[];
    tableStyles?: (TableStyleOptions | undefined)[];
    numberingStyles?: (NumberingStyleOptions | undefined)[];
  }

  export interface IDocumentStyleDefaultOptions {
    document?: IRunPropertiesOptions;
    heading1?: IRunPropertiesOptions;
    heading2?: IRunPropertiesOptions;
    heading3?: IRunPropertiesOptions;
    title?: IRunPropertiesOptions;
    subtitle?: IRunPropertiesOptions;
  }

  export interface ParagraphStyleOptions {
    id: string;
    name?: string;
    style?: ParagraphStyle;
    run?: IRunPropertiesOptions;
    paragraph?: IParagraphPropertiesOptions;
  }

  export interface CharacterStyleOptions {
    id: string;
    name?: string;
    style?: CharacterStyle;
    run?: IRunPropertiesOptions;
  }

  export interface TableStyleOptions {
    id: string;
    name?: string;
    style?: TableStyle;
  }

  export interface NumberingStyleOptions {
    id: string;
    name?: string;
    style?: NumberingStyle;
  }

  export enum ParagraphStyle {
    Heading1 = "Heading1",
    Heading2 = "Heading2",
    Heading3 = "Heading3",
    Title = "Title",
    Subtitle = "Subtitle",
    Body = "Body",
    Normal = "Normal",
  }

  export enum CharacterStyle {
    DefaultParagraphFont = "DefaultParagraphFont",
    Hyperlink = "Hyperlink",
  }

  export enum TableStyle {
    TableGrid = "TableGrid",
  }

  export enum NumberingStyle {}

  export interface IDocumentOptions {
    readonly sections: readonly ISectionOptions[];
    readonly styles?: IDocumentStyles;
    readonly title?: string;
    readonly creator?: string;
    readonly description?: string;
    readonly numbering?: INumberingOptions;
    readonly features?: {
      readonly trackRevisions?: boolean;
      readonly updateFields?: boolean;
    };
  }

  export class Document {
    constructor(options: IDocumentOptions);
  }

  // ─── Packer ────────────────────────────────────────────────────
  export class Packer {
    static toBuffer(document: Document): Promise<Buffer>;
  }

  // ─── Section Options ───────────────────────────────────────────
  export interface ISectionProperties {
    readonly page?: {
      readonly size?: { readonly width: number; readonly height: number };
      readonly margin?: {
        readonly top: number;
        readonly bottom: number;
        readonly left: number;
        readonly right: number;
      };
      readonly orientation?: string;
    };
  }

  export interface ISectionOptions {
    readonly properties?: ISectionProperties;
    readonly headers?: Record<string, unknown>;
    readonly footers?: Record<string, unknown>;
    readonly children: readonly (Paragraph | Table)[];
  }

  // ─── Paragraph ─────────────────────────────────────────────────
  export interface IParagraphBorderOptions {
    style: string;
    size: number;
    color: string;
    space: number;
  }

  export interface IParagraphBordersOptions {
    readonly top?: IParagraphBorderOptions;
    readonly bottom?: IParagraphBorderOptions;
    readonly left?: IParagraphBorderOptions;
    readonly right?: IParagraphBorderOptions;
  }

  export interface IParagraphSpacingOptions {
    readonly before?: number;
    readonly after?: number;
    readonly line?: number;
  }

  export interface IParagraphOptions {
    readonly style?: string;
    readonly alignment?: string;
    readonly spacing?: IParagraphSpacingOptions;
    readonly border?: IParagraphBordersOptions;
    readonly bullet?: { readonly level: number };
    readonly numbering?: { readonly reference: string; readonly level: number };
    readonly children?: readonly (TextRun | ExternalHyperlink | ImageRun)[];
    readonly text?: string;
  }

  export class Paragraph {
    constructor(options: IParagraphOptions);
  }

  // ─── TextRun ───────────────────────────────────────────────────
  export interface IRunPropertiesOptions {
    readonly bold?: boolean;
    readonly italics?: boolean;
    readonly strike?: boolean;
    readonly font?: string;
    readonly size?: number;
    readonly color?: string;
    readonly superScript?: boolean;
    readonly subScript?: boolean;
    readonly allCaps?: boolean;
    readonly smallCaps?: boolean;
    readonly underline?: {
      readonly type?: string;
      readonly color?: string;
    };
  }

  export interface IRunOptions extends IRunPropertiesOptions {
    readonly text?: string;
    readonly break?: number;
  }

  export class TextRun {
    constructor(options: IRunOptions);
  }

  // ─── ExternalHyperlink ─────────────────────────────────────────
  export interface IExternalHyperlinkOptions {
    readonly children: readonly TextRun[];
    readonly link: string;
  }

  export class ExternalHyperlink {
    constructor(options: IExternalHyperlinkOptions);
  }

  // ─── ImageRun ──────────────────────────────────────────────────
  export interface IImageRunOptions {
    readonly data: Buffer;
    readonly transformation: {
      readonly width: number;
      readonly height: number;
    };
  }

  export class ImageRun {
    constructor(options: IImageRunOptions);
  }

  // ─── Table ─────────────────────────────────────────────────────
  export interface ITableRowOptions {
    readonly children: readonly TableCell[];
  }

  export interface ITableCellOptions {
    readonly children: readonly Paragraph[];
  }

  export interface ITableOptions {
    readonly rows: readonly TableRow[];
    readonly width?: { readonly size: number; readonly type: string };
  }

  export class Table {
    constructor(options: ITableOptions);
  }

  export class TableRow {
    constructor(options: ITableRowOptions);
  }

  export class TableCell {
    constructor(options: ITableCellOptions);
  }

  // ─── Numbering ─────────────────────────────────────────────────
  export interface INumberingOptions {
    readonly config: INumberingLevel[];
  }

  export interface INumberingLevel {
    readonly reference: string;
    readonly levels: readonly INumberingLevelFormat[];
  }

  export interface INumberingLevelFormat {
    readonly level: number;
    readonly format: string;
    readonly text: string;
    readonly alignment: string;
  }

  export const NumberFormat: {
    readonly DECIMAL: "decimal";
    readonly LOWER_LETTER: "lowerLetter";
    readonly LOWER_ROMAN: "lowerRoman";
    readonly UPPER_LETTER: "upperLetter";
    readonly UPPER_ROMAN: "upperRoman";
    readonly PERCENT: "percent";
    readonly BULLET: "bullet";
  };
}
