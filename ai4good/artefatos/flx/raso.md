# flx · exemplo quase bom / sem alma

> preenchimento fictício: tudo preenchido, mas raso. a mesma ideia do [exemplo excelente](excelente.md),
> feita do jeito fácil. as anotações do professor mostram onde falha.

## 0 · a minha ideia e o que eu medi

**rastro da banca.** um app que usa IA para ajudar os feirantes a organizar os pedidos dos clientes pelo WhatsApp.

**o que eu medi no tec:** o Space do Whisper funcionou perfeitamente e transcreveu o áudio rápido, sem erros.

## 1 · o fluxograma

**o diagrama:** [fluxograma feito no Canva](#)

| nº | passo | IA, regra ou pessoa | por que IA, e não uma regra (sem IA) |
|:--|:--|:--|:--|
| 1 | o sistema recebe o áudio pela API | regra | |
| 2 | o Whisper transcreve o áudio | IA | porque áudio precisa de IA. |
| 3 | o GPT entende o pedido e calcula o total | IA | a IA é mais inteligente e entende qualquer pedido. |
| 4 | a IA salva o pedido no banco de dados | IA | para organizar tudo automaticamente. |

## 2 · as peças: o que entra, o que sai, onde roda e quanto custa

**a escala do custo por mês:** vários pedidos dos clientes da feira.

| peça | entra | sai | onde roda, e por quê | tempo e máquina por uso | R$ por mês na escala | medido ou estimado · fonte e data |
|:--|:--|:--|:--|:--|:--|:--|
| API da OpenAI (Whisper e GPT) | áudio | pedido pronto | na nuvem, porque é mais fácil e não pesa no celular | 1 segundo | baratinho, quase grátis | site da OpenAI |
| banco de dados na nuvem | pedido | histórico | na nuvem, para acessar de qualquer lugar | instantâneo | grátis no plano inicial | internet |

## 3 · a arquitetura: onde roda cada peça e para onde vão os dados

**o diagrama, com as caixas de onde cada peça roda:** [arquitetura no Canva](#)

| dado pessoal | de quem é | onde fica | quem vê | por quanto tempo | quando é apagado |
|:--|:--|:--|:--|:--|:--|
| áudio, nome, telefone e histórico de compras | cliente | na nuvem | o sistema | para sempre, para análises futuras | não precisa apagar |

**o que sai do aparelho de quem usa, e para onde:** os dados ficam seguros na nuvem, conforme a LGPD.

**o mínimo que a ideia precisa guardar:** tudo, para poder treinar a IA depois e gerar relatórios.

## 4 · o que mudou na ideia, sem IA

nada mudou, a ideia já estava bem pensada desde o começo e o fluxograma só confirmou o que eu ia fazer.

## 5 · auditoria cega

**o veredito da conversa nova:** "analisei o seu fluxograma e a arquitetura. está tudo muito claro, bem estruturado e pronto para ser implementado. todos os itens passam."

**a minha resposta, sem IA:** concordo com a auditoria.

## anotações do professor

cada anotação cita uma frase do exemplo e explica onde ela falha. compare com o mesmo trecho no [exemplo excelente](excelente.md).

1. **§ 1, o começo, o fim e o diagrama.** "o sistema recebe o áudio pela API" e "[fluxograma feito no Canva](#)": o fluxo começa no sistema, sem o gesto da cliente nem o que volta para ela, e some com a conferência humana onde o erro da IA apareceria. além disso, uma imagem solta no Canva não tem histórico no repositório. no excelente, o diagrama está em [arquitetura.md](https://github.com/lsfcin/rastro-da-banca/blob/main/arquitetura.md) com commit, começa em "cliente grava o pedido em áudio no WhatsApp da banca" e termina em "cliente recebe o pedido, o total e a hora".
2. **§ 1, IA em tudo.** "o GPT entende o pedido e calcula o total" e "a IA é mais inteligente": quase todo passo foi marcado como IA, inclusive conta de multiplicar e salvar no banco, sem explicar por que uma regra não basta. no excelente, de 11 passos só a transcrição é IA ("não dá para listar à mão todas as formas de dizer"), enquanto produto, quantidade, hora e "conta: preço da banca × quantidade" são regras.
3. **§ 2, custo e medição.** "baratinho, quase grátis" e "grátis no plano inicial": não há escala em números, não há link nem data da fonte, não diz o que é medido ou estimado e ignora o que o tec mediu. no excelente, a escala é "240 pedidos por mês, uns 20 segundos de áudio cada, 80 minutos de áudio por mês", o tempo local vem "**medido** no tec" ("13 s para 3 pedidos") e a nuvem traz cálculo, data e fonte ("~US$ 0,24 (80 min × US$ 0,003): menos de R$ 2", em `openrouter.ai/openai/gpt-4o-mini-transcribe`).
4. **§ 3, dados pessoais.** "os dados ficam seguros na nuvem, conforme a LGPD" e "para sempre, para análises futuras": citar a sigla não diz onde cada dado fica, quem vê nem quando é apagado, e guardar telefone e histórico sem necessidade aumenta o risco à toa. no excelente, cada dado tem lugar, quem vê e prazo curto ("o app apaga a cópia na confirmação", "no fim da feira; fica só o total vendido, sem nome"), e "o telefone, não: a conversa já está no WhatsApp".
5. **§ 4, o que mudou na ideia.** "nada mudou, a ideia já estava bem pensada": se desenhar o fluxo, calcular o custo e olhar os dados não mudam uma única linha da ideia, a folha foi preenchida só por obrigação. no excelente, "o qwen saiu", achar o produto virou regra ("são 2,5 GB a menos, e o celular dá conta") e o erro de "jerimum" por "limão" passou para a conferência da dona Cida no passo 7.
6. **§ 5, auditoria cega.** "todos os itens passam" e "concordo com a auditoria": o veredito veio num parágrafo genérico fora da tabela exigida pelo guia, sem partir de "não passa", sem checar links de preço e sem tentar trocar cada IA por regra. e "concordo com a auditoria" não responde item por item o que mudou na folha ou por que discorda. no excelente, a tabela abre os links de preço, tenta trocar o passo IA por uma regra e acha um buraco real ("o 'compartilhar áudio' do WhatsApp [...] envia só o arquivo de voz"), e o aluno muda o passo 7, sem IA.
