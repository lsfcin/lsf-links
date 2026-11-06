export function hmacHex(secret: any, msg: any): Promise<string>;
export function novo(banco: any, matricula: any, secret: any): Promise<{
    versao: any;
    baralho: any[];
    acertos: never[];
    n: number;
    aberta: null;
    ultima: null;
    fechou: boolean;
}>;
export function servir(estado: any, banco: any, matricula: any, secret: any): Promise<{
    estado: any;
    rodada: any;
}>;
export function corrigir(estado: any, banco: any, n: any, respostas: any, matricula: any, secret: any): Promise<{
    estado: any;
    resultados: any;
    fechou: any;
}>;
export function publico(rodada: any, banco: any): any;
