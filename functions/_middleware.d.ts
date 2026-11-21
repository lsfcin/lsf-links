export const onRequest: (typeof erros | typeof comTexto)[];
declare function erros({ next }: {
    next: any;
}): Promise<any>;
import { comTexto } from '../lib/index.js';
export {};
