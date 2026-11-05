export function parse(md: any): {
    id: any;
    rows: any;
}[];
export function artefato(md: any, doc: any): {
    code: any;
    title: any;
    doc: any;
    items: any[];
} | null;
export function legend(md: any): {};
export function draw(id: any, rows: any, links: any, info: any): string;
export function remark(md: any, id: any, name: any, code: any, marks: any): any;
export function readTsv(tsv: any, unescape?: boolean): Map<any, any>;
