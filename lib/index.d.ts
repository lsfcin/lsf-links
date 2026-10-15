export function allowed(path: any): boolean;
export function hasSlot(md: any, name: any, code: any): boolean;
export function upsert(tsv: any, name: any, code: any, url: any): string;
export function linkProblem(url: any, fetcher?: typeof fetch, ms?: number): Promise<string | null>;
export function readFile(env: any, path: any, { missing }?: {
    missing?: boolean | undefined;
}): Promise<{
    text: string;
    sha: any;
}>;
export function writeFile(env: any, path: any, text: any, sha: any, message: any): Promise<{
    stale: boolean;
    sha?: undefined;
} | {
    sha: any;
    stale?: undefined;
}>;
export function passwordOk(env: any, given: any): Promise<boolean>;
export const TSV_HEAD: "# aluno\tc\u00F3digo\tlink \u2014 escrito pelo site (functions/api/entrega.js); uma linha por entrega\n";
export function json(body: any, status?: number): Response;
