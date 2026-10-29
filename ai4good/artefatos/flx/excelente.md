# flx · exemplo excelente

> folha do artefato [fluxograma e arquitetura](../3-fluxograma-e-arquitetura.md), feita a partir do
> [tec excelente](../tec/excelente.md). o diagrama é real e está no repositório:
> [rastro-da-banca/arquitetura.md](https://github.com/lsfcin/rastro-da-banca/blob/main/arquitetura.md). as anotações do professor estão no fim.

## 0 · a minha ideia e o que eu medi

**rastro da banca · colheita marcada.** feirantes usam as mensagens e áudios que já trocam com clientes para registrar pedidos; o cliente reserva e combina a hora de buscar. um transformer de voz transcreve, e um modelo pequeno no celular tira produto, quantidade e hora; o feirante confirma falando, e as contas são feitas por regra.

**o que eu medi no tec:** no meu notebook, em CPU, o whisper `small` e o qwen3:4b levaram uns 13 segundos para os três pedidos, contando a carga dos dois modelos; baixar os dois foi cerca de 3 GB. o whisper trocou "jerimum" por "de limão"; o qwen errou número e hora, e mudava a resposta a cada rodada.

## 1 · o fluxograma

**o diagrama:** [arquitetura.md](https://github.com/lsfcin/rastro-da-banca/blob/main/arquitetura.md), commit [04e9860](https://github.com/lsfcin/rastro-da-banca/commit/04e986096a6ddcb45e9856ea86f6b8c065bdb70f)

| nº | passo | IA, regra ou pessoa | por que IA, e não uma regra (sem IA) |
|:--|:--|:--|:--|
| 1 | cliente grava o pedido em áudio no WhatsApp da banca | pessoa | |
| 2 | feirante compartilha o áudio com o app (o "compartilhar" do celular) | pessoa | |
| 3 | transcrever o áudio, com a lista da banca como contexto | IA | cada cliente fala de um jeito, com sotaque, pressa e barulho de feira. não dá para listar à mão todas as formas de dizer "dois quilos de macaxeira". |
| 4 | achar cada produto na lista da banca; fora da lista vira "?" | regra | |
| 5 | quantidade e unidade, por uma tabela de palavras ("uma dúzia" = 12) | regra | |
| 6 | hora de buscar, por uma tabela de expressões ("lá pelas dez e meia" = 10:30) | regra | |
| 7 | feirante ouve o áudio, confere o pedido na tela, corrige o "?" e escreve o primeiro nome de quem pediu | pessoa | |
| 8 | conta: preço da banca × quantidade | regra | |
| 9 | feirante compartilha a confirmação de volta no WhatsApp | pessoa | |
| 10 | cliente recebe o pedido, o total e a hora | pessoa | |
| 11 | no dia da feira, lista de separação ordenada pela hora de buscar | regra | |

## 2 · as peças: o que entra, o que sai, onde roda e quanto custa

**a escala do custo por mês:** a banca da dona Cida, 3 feiras por semana, uns 20 pedidos por feira: 240 pedidos por mês, uns 20 segundos de áudio cada, 80 minutos de áudio por mês.

| peça | entra | sai | onde roda, e por quê | tempo e máquina por uso | R$ por mês na escala | medido ou estimado · fonte e data |
|:--|:--|:--|:--|:--|:--|:--|
| WhatsApp da banca | o áudio da cliente | o áudio, para o app; a confirmação, para a cliente | nos dois celulares: a cliente e a dona Cida já usam | | 0 | não muda nada do que já fazem |
| app (tela, compartilhar, pedidos do dia) | o áudio | o pedido conferido, a confirmação, a lista de separação | celular da dona Cida | | 0 | |
| whisper `small` (faster-whisper) | o áudio, ~20 s, e a lista da banca | o texto | celular da dona Cida: na feira a internet cai, e a voz da cliente não precisa sair dali | no notebook: 13 s para 3 pedidos, contando a carga de 2 modelos · no celular: não medi | 0 | tempo **medido** no tec. memória **estimada**: ~2 GB para o `small`, 1 GB para o `base` ([tabela de modelos do whisper](https://github.com/openai/whisper#available-models-and-languages), 28/10/2026) |
| regras (produto, quantidade, hora, conta, lista) | o texto, a lista e os preços da banca | o pedido com total e hora | celular da dona Cida | menos de 1 s, sem modelo | 0 | **estimado**: são comparações com listas curtas |
| alternativa, não escolhida: transcrição na nuvem (gpt-4o-mini-transcribe) | o áudio | o texto | servidor da OpenAI | depende da internet na feira | ~US$ 0,24 (80 min × US$ 0,003): menos de R$ 2 com qualquer dólar abaixo de R$ 8 | **estimado**: [openrouter.ai/openai/gpt-4o-mini-transcribe](https://openrouter.ai/openai/gpt-4o-mini-transcribe), 28/10/2026; a cobrança é por token, o preço por minuto é aproximado |

## 3 · a arquitetura: onde roda cada peça e para onde vão os dados

**o diagrama, com as caixas de onde cada peça roda:** commit [f57c13f](https://github.com/lsfcin/rastro-da-banca/commit/f57c13fd066434a6350a61bdac58832dd52941fa)

| dado pessoal | de quem é | onde fica | quem vê | por quanto tempo | quando é apagado |
|:--|:--|:--|:--|:--|:--|
| áudio do pedido (a voz) | cliente | cópia no app, no celular da dona Cida | dona Cida | até ela confirmar o pedido | o app apaga a cópia na confirmação; a do WhatsApp segue como sempre |
| texto transcrito | cliente | memória do app | ninguém além do app | segundos | junto com o áudio |
| primeiro nome e pedido | cliente | pedidos do dia, no celular da dona Cida | dona Cida | até o fim da feira | no fim da feira; fica só o total vendido, sem nome |

**o que sai do aparelho de quem usa, e para onde:** nada além do que já saía: o áudio vem pelo WhatsApp e a confirmação volta por ele. o app não tem servidor.

**o mínimo que a ideia precisa guardar:** o primeiro nome, os produtos e a hora, até a busca. o telefone, não: a conversa já está no WhatsApp.

## 4 · o que mudou na ideia, sem IA

o qwen saiu. no tec, hora e quantidade já tinham passado para regra; desenhando, achar o produto na lista da banca também virou regra, e o modelo de linguagem ficou sem trabalho.  
sem ele, são 2,5 GB a menos, e o celular dá conta: tudo roda sem internet, e a voz da cliente não sai dali.  
a nuvem custaria menos de R$ 2 por mês: o motivo de ficar no celular é a rede da feira e a voz, não o dinheiro.  
o "jerimum" que vira "limão" nenhuma regra pega, porque limão está na lista: quem pega é a dona Cida ouvindo o áudio no passo 7. o experimento mede quantos pedidos ela precisa corrigir ali, e quanto o whisper demora no celular.

## 5 · auditoria cega

**o veredito da conversa nova:**

| item | passa ou não passa | trecho que prova | o que encontrei (links abertos, regras tentadas) |
|:--|:--|:--|:--|
| 1 · fluxograma (IA, regra ou pessoa) | passa | § 1 e `arquitetura.md`: passos 1 a 11 vão de `"1 · cliente grava o pedido em áudio no WhatsApp da banca"` a `"10 · cliente recebe o pedido, o total e a hora"` e `"11 · no dia da feira: lista de separação"`; único passo IA é o 3 (`"cada cliente fala de um jeito, com sotaque, pressa e barulho de feira. não dá para listar à mão todas as formas de dizer 'dois quilos de macaxeira'"`). | Tentei escrever regra para o passo 3 (limiares de espectro/FFT ou dicionário fixo de ondas sonoras), mas nenhuma regra cobre variação de voz, sotaque, cadência e barulho de feira; já os passos 4, 5, 6, 8 e 11 (produto, quantidade, hora, conta e ordenação) já foram reduzidos a regras determinísticas após tirar o `qwen3:4b`. |
| 2 · entradas, saídas, onde roda e custo | passa | § 2: escala declarada (`"3 feiras por semana, uns 20 pedidos por feira: 240 pedidos por mês, uns 20 segundos de áudio cada, 80 minutos de áudio por mês"`); `whisper small` com tempo **medido** (`"13 s para 3 pedidos"`), RAM **estimada** (`"~2 GB para o small, 1 GB para o base"`, 28/10/2026, `R$ 0` local) e nuvem **estimada** (`"~US$ 0,24 (80 min × US$ 0,003): menos de R$ 2"`, 28/10/2026). | Abri `github.com/openai/whisper#available-models-and-languages` (bate: `small` pede `~2 GB` e `base` pede `~1 GB` de VRAM) e `openrouter.ai/openai/gpt-4o-mini-transcribe` (bate: cobra por token, US$ 1,25/1M entrada e US$ 5,00/1M saída, equivalente à estimativa de ~US$ 0,003/min da OpenAI = US$ 0,24 para 80 min); ressalva: o tempo no celular real ficou como `"não medi"` e as linhas `WhatsApp`/`app` não trazem medição de máquina. |
| 3 · arquitetura, dados e privacidade | passa | § 3 e `arquitetura.md`: diagrama separa `CEL_C`, `CEL_F` e `DB`; tabela mapeia `áudio do pedido`, `texto transcrito` e `primeiro nome e pedido` com onde fica, quem vê (`dona Cida` / `ninguém além do app`), por quanto tempo e apagamento (`"na confirmação"`, `"junto com o áudio"`, `"no fim da feira; fica só o total vendido, sem nome"`), mais trânsito (`"o áudio vem pelo WhatsApp e a confirmação volta por ele. o app não tem servidor"`). | Segui os 3 dados pessoais do celular da cliente ao `DB` local e confirmei local, acesso, retenção e descarte sem nuvem oculta; ressalvas céticas: o "compartilhar áudio" do WhatsApp no passo 2 envia só o arquivo de voz (sem o `primeiro nome` do contato, exigindo que a cliente o diga no áudio ou que a dona Cida o anote no passo 7) e falta colar este veredito com a resposta no `§ 5`. |

**a minha resposta, sem IA:**
1. nada a mudar: o passo 3 segue IA.
2. concordo com a ressalva: o tempo no celular é a primeira medida do experimento. WhatsApp e app não carregam modelo, por isso ficaram sem medida.
3. a auditoria achou um buraco real: o "compartilhar" manda só o áudio, sem o nome de quem pediu. mudei o passo 7: a dona Cida escreve o primeiro nome ao conferir o pedido (§ 1 e diagrama).

## anotações do professor

cada anotação cita uma frase do exemplo e explica por que ela é o padrão que buscamos.

1. **§ 1, o fluxograma.** de 11 passos, só 1 é IA, e a frase dele diz por que uma regra não basta: "não dá para listar à mão todas as formas de dizer". o resto é regra ou pessoa. IA onde precisa, regra onde basta: é isso que torna a ideia barata, explicável e estável.
2. **§ 1, do gesto ao retorno.** o caminho começa na cliente gravando o áudio e termina nela recebendo o total. os passos de pessoa (o feirante conferindo, o feirante compartilhando) estão no desenho, porque é neles que o erro da IA é pego.
3. **§ 2, medido ou estimado.** "tempo **medido** no tec", "memória **estimada**", "no celular: não medi": cada número diz de onde veio, e o que não foi medido vira tarefa do experimento, em vez de virar chute.
4. **§ 2, a alternativa com preço.** a nuvem custaria "menos de R$ 2": o aluno pôs na mesa a opção que não escolheu, com fonte e data, e mostrou que o dinheiro não decide. quem decide é a rede da feira e a voz da cliente, e a folha diz isso.
5. **§ 3, cada dado com prazo.** "o app apaga a cópia na confirmação", "fica só o total vendido, sem nome": cada dado pessoal tem dono, lugar, quem vê e quando some. e "o telefone, não": guardar menos é a melhor proteção.
6. **§ 4, desenhar mudou a ideia.** "o qwen saiu": o fluxograma mostrou que uma peça inteira não tinha trabalho. é para isso que o artefato existe: o desenho mostra o que sobra antes de alguém programar.
