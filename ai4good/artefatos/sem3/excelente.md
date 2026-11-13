# sem3 · exemplo excelente

> roteiro do [seminário · iteração 3, como vai ser o teste](../4-seminario-teste.md), feito a partir do
> [exp excelente](../exp/excelente.md) e do [sem2 excelente](../sem2/excelente.md). todo resultado aqui é do
> piloto, que já rodou; o resto é plano. as anotações do professor estão no fim.

**link dos slides:** o roteiro abaixo descreve cada slide; o deck deste exemplo não foi montado.

**o commit da regra:** as emendas 12 a 15, "antes do teste (18/11/2026)", no [experimentos.md](https://github.com/lsfcin/rastro-da-banca/blob/main/experimentos.md), sem reescrever o que estava lá.

**a máquina e a versão:** o meu notebook, em CPU, o mesmo do piloto; eu rodo, na tag `sem3`.

**a ética:** teste sem pessoas. as falas são escritas por mim e lidas pelas 4 vozes sintéticas do Piper. ninguém é gravado, e o E1 com 10 falantes de verdade, que o exp previa, fica para quando houver parecer do comitê.

## as quatro frases, sem IA

1. **o competidor:** o caminho na nuvem (whisper `large-v3-turbo` + DeepSeek), nos meus 30 pedidos a 10 dB, errou calado 7%, contando o pedido inteiro, como o SLURP avalia.
2. **o que quero mostrar:** quero mostrar que a minha ideia melhora o pedido que sai do áudio para a dona Cida, sem internet na feira, comparada ao caminho na nuvem, que precisa de rede: no máximo 1 em 10 errado sem aviso, em áudios sintéticos, que é a parte técnica da promessa.
3. **a comparação:** 70 pedidos novos, cada um numa das 4 vozes, com o mesmo burburinho, passam pelos dois caminhos; muda só quem ouve e quem extrai.
4. **o caminho até o pitch:** os scripts já rodam; dia 25 rodo os 70, dia 27 confiro com o professor, e se a rede cair, a nuvem roda depois.

## slide 1 · o competidor e o que ele consegue · 50 s

- **aparece:** a linha do piloto: "turbo + DeepSeek · 10 dB · 30 pedidos · pedido exato 77% · errado sem aviso 7% [0%–17%]". embaixo, a primeira página do [SLURP](https://doi.org/10.18653/v1/2020.emnlp-main.588).
- **a medida dele, e o número:** errado sem aviso, contando o pedido inteiro: 7%, de 30 pedidos em voz sintética, no meu piloto ([resultados/e1.md](https://github.com/lsfcin/rastro-da-banca/blob/main/resultados/e1.md)).
- **eu falo:** "o Anota AI e o agente da Meta não rodam nos meus áudios: neles, quem finaliza o pedido é a cliente. o competidor que eu consigo medir é um caminho maior, na nuvem: um whisper grande e um modelo de linguagem. no piloto, ele errou calado 7 pedidos em cada 100. e eu avalio como o SLURP: pelo pedido inteiro, não pelas palavras. o 'sem aviso' é medida minha, do exp. uma palavra errada em 'ô dona Cida' não custa nada. uma em 'jerimum' custa a compra."

## slide 2 · o que quero mostrar e como vou medir · 70 s

- **aparece:** a frase, e embaixo três linhas: "passou: o intervalo inteiro até 10% · caiu: o intervalo inteiro acima de 10% · inconclusivo: o intervalo pega os 10%".
- **o alvo:** errado sem aviso: o pedido que sai errado sem um "?" na tela. é o que chega errado à cliente. conto entre todos os 70, e mostro ao lado quantos levaram "?": se tudo vira "?", o erro calado some e a dona Cida confere tudo de ouvido, o que não é ganho. o WER (taxa de palavras erradas) eu reporto, mas ele não decide.
- **passou, caiu, inconclusivo:** os três do slide. o intervalo é de 95%, por bootstrap: sorteio os 70 pedidos de novo, 2000 vezes, como no piloto. perder da nuvem não derruba a ideia: a aposta é rodar sem rede, e eu digo quantos pontos ela custa.
- **eu falo:** "eu não vou mostrar que ganho da nuvem. no piloto, eu perdi: 20% calado contra 7%. o que eu quero mostrar é que, sem internet, o erro calado cabe em 1 em cada 10. por que 10? é o limiar que eu escrevi no exp, antes do piloto, e não mexi. e com 30 pedidos não dava para saber: o meu 20% tinha intervalo de 7% a 37%. por isso o teste tem 70. e a regra vale para os dois lados: se der 6%, mas o intervalo for até 13%, eu não digo que passou. digo 'não deu para saber'."

## slide 3 · como será a comparação · 70 s

- **aparece:** o esquema: "70 falas novas → 4 vozes do Piper + burburinho a 10 dB → [A: rastro, small + lista + regras, no notebook] e [B: nuvem, turbo + DeepSeek] → errado sem aviso · pedido exato · por voz".
- **quem ou o que entra:** 70 pedidos novos, escritos por mim a partir da lista da banca, sem olhar os 30 do piloto, cada um lido por uma das 4 vozes, como no piloto (uns 17 por voz). 70 é o tamanho do teste no pré-registro, que calculou a margem em ±7 pontos (emenda 3).
- **as condições:** A, o meu caminho, com o `small` que o sem2 manteve; B, o da nuvem. a linha de base são as regras lendo a fala certa: o teto, que mostra se o erro vem do ouvido ou das regras.
- **o que fica igual:** os mesmos 70 áudios, o mesmo burburinho a 10 dB (gerado pelo `gerar_audios.py`), a mesma lista da banca, o mesmo julgamento do `avaliar.py`, a mesma máquina.
- **o gabarito:** a própria fala: eu escrevo o pedido antes de gerar o áudio, então o gabarito existe antes do teste.
- **eu falo:** "no piloto, a voz pesou mais que qualquer peça: a `cadu` acertou 7 de 8 pedidos, a `jeff`, 1 de 8. então a tabela sai também por voz. se uma voz sozinha puxa o erro, eu mostro. e o que isso não prova: nada sobre voz de gente. são quatro vozes de máquina. o teste mede a técnica, não a feira."

## slide 4 · como chegar ao pitch com resultado · 45 s

- **aparece:** "18/11 a regra · 19–24/11 as 70 falas e os áudios · 25/11 os dois caminhos · 27/11 conferência · 02/12 a tabela".
- **já pronto:** `gerar_audios.py`, `avaliar.py` e o caminho da nuvem, todos do piloto.
- **o teste pequeno:** rodei os dois caminhos com 5 falas novas, de ponta a ponta, sem mudar o código. a tabela por voz sai do `e1-pedidos.tsv`, que já guarda a voz de cada pedido.
- **plano B:** o caminho A roda sem rede. se o OpenRouter falhar no dia 25, rodo o B em casa no dia 26, com os mesmos áudios.
- **eu falo:** "nada aqui depende de alguém aparecer. o risco é a rede, e é justamente o caminho que eu não uso na feira."

## slide 5 · o fecho · 25 s

- **aparece:** "o que o dia 25 responde: a técnica. o que ele não responde: a dona Cida conferindo".
- **eu falo:** "no sem2, eu prometi medir quantos desses erros a dona Cida pega conferindo, contra o caderno. isso pede ela, e não cabe até o dia 2 com cuidado. então no pitch eu levo a técnica medida, e digo que a conferência segue sem teste."

**tempo total, cronometrado:** 4 min 20 s e 4 min 30 s, duas vezes seguidas.

## ensaio cético

**a pergunta mais difícil:** "se você já perdeu da nuvem no piloto, por que a nuvem não é a ideia?"

**o que eu mudei por causa dela:** pus no slide 2 "eu não vou mostrar que ganho da nuvem", e a frase passou a dizer "sem internet na feira". antes, ela dizia só "comparada à nuvem", como se eu fosse ganhar.

---

## anotações do professor

cada anotação cita uma frase do exemplo, marca o item (◼ passa, ◻ não passa) e explica por quê.

1. **slide 1, o competidor ◼.** "eu avalio como o SLURP: pelo pedido inteiro": o competidor tem nome, número, condições (30 pedidos, voz sintética, 10 dB) e fonte. e o aluno diz por que os produtos não entram, em vez de fingir que comparou com eles.
2. **slide 2, o alvo e a regra ◼.** "o WER eu reporto, mas ele não decide": a medida é o que chega errado à cliente, não um número da técnica nem de gosto. passou, caiu e inconclusivo têm números, valem para os dois lados, e o limiar é o do exp, escrito antes do piloto. o "?" vem ao lado, para o erro calado não sumir à custa de tudo virar aviso. a frase é honesta: não promete ganhar, promete rodar sem rede, diz o preço, e diz que é só a parte técnica.
3. **slide 3, a comparação ◼.** "muda só quem ouve e quem extrai": mesmos áudios, mesmo ruído, mesmo julgamento. o tamanho vem do pré-registro, com a margem. a tabela por voz responde ao que o piloto ensinou, e o "não prova nada sobre voz de gente" vem antes da pergunta.
4. **slide 4, o caminho ◼.** "rodei os dois caminhos com 5 falas novas": o teste já rodou pequeno, os dias estão marcados, e o plano B cobre a rede, que o caminho B traz. sem pessoas, a ética fica numa linha, e o E1 com falantes de verdade espera o comitê.
5. **o fecho.** "a conferência segue sem teste": o sem2 prometeu o E2, e o aluno diz que não cabe, em vez de esconder. é a mesma coragem da falha mostrada no sem2.
