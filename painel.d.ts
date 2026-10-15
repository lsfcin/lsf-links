declare function parse(md: any): {
    id: any;
    rows: any;
}[];
declare function artefato(md: any, doc: any): {
    code: any;
    title: any;
    doc: any;
    items: any[];
} | null;
declare function legend(md: any): {};
declare function draw(id: any, rows: any, links: any, info: any): string;
declare function remark(md: any, id: any, name: any, code: any, marks: any): any;
declare function mount(ctx: any, { popover, post, password }: {
    popover: any;
    post: any;
    password: any;
}): () => void;
declare const NO_SLOT: Set<string>;
declare const DONE: "\u25FC";
declare const PENDING: "\u25FB";
declare function esc(s: any): string;
declare function reEsc(s: any): any;
declare function doneCount(m: any): number;
