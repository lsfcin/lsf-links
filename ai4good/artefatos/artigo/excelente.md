# artigo · exemplo excelente

> registro do artefato [artigo](../6-artigo.md), feito a partir das folhas excelentes do
> [brw](../brw/excelente.md), [cmp](../cmp/excelente.md), [flx](../flx/excelente.md) e
> [exp](../exp/excelente.md). um trecho do artigo por marco, não o artigo inteiro. **o teste de 25/11
> ainda não rodou:** o marco 5 usa o piloto de 30 pedidos, lidos por vozes sintéticas, e o artigo
> chama isso de simulação. no seu, entram os números do teste. as anotações do professor estão no fim.

## passo 0 · veículo e modelo

**o veículo alvo:** PROPOR, conferência de processamento da língua portuguesa, da lista de linguagem e fala dos [veículos](../cmp/veiculos.md). o artigo testa a técnica, sem pessoas (emenda 15), e quem julga isso bem é a área de fala e linguagem. a feira e o português do Nordeste interessam mais ali do que numa conferência geral.

**o artigo base:** [Sun et al., INTERSPEECH 2023](https://doi.org/10.21437/Interspeech.2023-1440): dá ao reconhecedor uma lista de palavras do domínio e mede o ganho com ablação, com e sem a lista. o molde é esse; o mecanismo deles é outro (um componente treinado), e o meu é uma frase de contexto.

**o modelo compila:** o modelo do veículo no Overleaf, vazio, compilado em 19/11.

## marco 1 · introdução

**o argumento, sem IA:**
1. o ultraprocessado mata: cerca de 57 mil mortes prematuras por ano no Brasil ([Nilson et al. 2022](https://www.elsevier.com/about/press-releases/ultraprocessed-foods-linked-to-premature-deaths)). a feira é a alternativa, mas a encomenda dela se perde no áudio.
2. WhatsApp Business, Kyte, Anota AI e o agente da Meta organizam conversa ou cardápio, não o áudio solto da feira, e os dois que entendem o pedido rodam na nuvem.
3. junto o caderno de pedidos com a reserva por áudio (alavanca: juntar). o óbvio que abandono: um modelo grande na nuvem atendendo pela feirante.
4. contribuição 1: o caminho que roda sem rede (E1). contribuição 2: medir o erro que chega calado à cliente, separado do erro avisado (E1, a coluna "errado sem aviso").

**o trecho, parágrafo 3:**

> Este trabalho junta duas práticas que a feirante já tem: o caderno onde anota as encomendas e os áudios em que a clientela reserva. Em vez de um modelo grande na nuvem que conversa pela feirante, como fazem o Anota AI e o agente de vendas da Meta, propomos um caminho que roda no celular dela: um reconhecedor de fala pequeno, que recebe a lista de produtos da banca como contexto, e regras simples, que tiram produto, quantidade e hora do texto. O que as regras não reconhecem vira um "?" na tela, e a feirante confere ouvindo o áudio. A voz da cliente não sai do aparelho, e o caminho funciona sem internet, que na feira cai.

**de onde veio cada frase:** frase 1, o motor "juntar" do brw § 4. frase 2, a matriz do cmp § 5 e o agente da Meta do cmp § 7. frases 3 e 4, o fluxograma do flx § 1, passos 3 a 7. frase 5, o flx § 2, "na feira a internet cai".

## marco 2 · trabalhos relacionados

| abordagem | os artigos | a diferença | a concessão |
|:--|:--|:--|:--|
| voz para quem lê pouco | Patel et al. 2010 · Patel et al. 2009 · Raza et al. 2013 | nenhum transforma a fala num registro de venda | os três testaram com pessoas reais; este, até aqui, com vozes sintéticas |
| venda direta de produtores | Prost et al. 2018 e 2019 · Alvear et al. 2024 · De 2024 · De 2025 | o pedido nasce na conversa que já existe, não numa loja web | eles somam encomendas de vários produtores e acham cliente novo; a proposta não acha |
| modelos no aparelho | Radford et al. 2023 · Liu et al. 2024 | a avaliação é a tarefa inteira, o pedido, no celular | eles medem em benchmarks amplos; aqui, a lista de uma banca só |

**o trecho, abordagem 1:**

> A voz já levou serviços a quem lê pouco. O Avaaj Otalo, um fórum por telefone, foi usado por 51 agricultores indianos durante sete meses [Patel et al. 2010], e um serviço de voz que se espalha por diversão chegou a 85 mil usuários sem treino nenhum [Raza et al. 2013]. A mesma linha de trabalho traz um aviso: com 45 agricultores de pouca escolaridade, o teclado do telefone completou mais tarefas que a fala [Patel et al. 2009]. Os três mostram que a voz alcança quem não usa texto, mas nenhum transforma a fala num registro de venda. E os três foram testados com pessoas reais, o que este trabalho ainda não fez.

**a ficha de cada artigo e a tabela comparativa:** as 10 fichas estão no `va2/artigo.md`; a tabela é a matriz do cmp § 5, com os 6 trabalhos e as duas colunas em que a proposta perde.

## marco 3 · método

| componente | recebe | faz, com | produz | onde roda | custo |
|:--|:--|:--|:--|:--|:--|
| transcrição | o áudio, ~20 s, e a lista da banca | whisper `small`, com a lista como contexto | o texto | celular (whisper.cpp); notebook (faster-whisper) no teste | R$ 0 · tempo **medido**: 0,17 do áudio no notebook, 2,89 no celular |
| regras | o texto, a lista e os preços | tabelas de produto, quantidade e hora; fora da lista, "?" | o pedido com total e hora | celular | R$ 0 · menos de 1 s, **estimado** |
| conferência | o pedido e o áudio | a tela abre no "?" e toca o áudio | o pedido confirmado | celular, pela feirante | o tempo dela, medido só no E2 |

**a técnica base:** o whisper [Radford et al. 2023], no tamanho `small`. o que mudou: a lista da banca entra como frase de contexto fixa (o `initial_prompt` do whisper), sem treino nenhum, e o modelo de linguagem saiu do caminho (flx § 4). Sun et al. 2023 treinam um componente para usar a lista. o ganho deles não vale automaticamente aqui, e por isso a ablação "sem a lista" mede o meu.

**o trecho, reprodução:**

> O código, as listas e os áudios do piloto estão em github.com/lsfcin/rastro-da-banca. A lista da banca é o arquivo `banca.tsv`. O comando `python transcrever.py audios/pedido-01.ogg` transcreve um áudio e imprime o pedido extraído; `python avaliar.py` refaz a tabela do E1 a partir de `resultados/e1-pedidos.tsv`.

## marco 4 · desenho dos experimentos

| hipótese | o número que a derruba | o commit |
|:--|:--|:--|
| a 10 dB, no máximo 1 em 10 pedidos sai errado sem aviso | errado sem aviso acima de 10% | o pré-registro em `experimentos.md`, commit `cc067d7`, anterior aos scripts; a regra simétrica do teste é a emenda 14, commit `7120ab7`, de 13/11 |
| a transcrição leva menos tempo que o áudio | tempo / áudio acima de 1 | o mesmo |

**o trecho, ética:**

> Nenhuma pessoa participou deste experimento. As falas foram escritas pelo autor e lidas por quatro vozes sintéticas, com burburinho de feira gerado por cima; os resultados são, portanto, de fala simulada. O experimento com dez falantes da região, previsto no desenho original, aguarda o parecer do comitê de ética (emenda 12).

**a receita, os dados, as linhas de base e as emendas:** do exp § 2, sem mudar o que foi commitado. as 15 emendas entram numa tabela, com data e motivo.

## marco 5 · resultados e discussão

| hipótese | resultado no piloto, n = 30, intervalo de 95% | veredito |
|:--|:--|:--|
| errado sem aviso ≤ 10% a 10 dB | notebook: 20% [7%–37%] (`avaliar.py`). celular, `small` quantizado: 13%, com 37% de pedido exato (`medir_no_celular.py`, sem intervalo) | contrariada no piloto; o intervalo ainda inclui 10%, e o teste com 70 decide |
| tempo / áudio < 1 | 0,17 no notebook; 2,89 no celular (`medir_no_celular.py`) | sustentada no notebook, contrariada no celular |

**o trecho, a discussão:**

> Observamos 20% de pedidos errados sem aviso a 10 dB, o dobro do limiar. Comparado às regras lendo a fala certa, que não erram calado nenhuma vez, isso sugere que o erro calado nasce na transcrição, não nas regras. Comparado ao caminho na nuvem, que erra calado 7%, o preço de rodar sem rede é de até 30 pontos de pedido exato, mas o caminho na nuvem troca o reconhecedor e o extrator de uma vez, e a comparação não separa as duas peças. Os resultados não permitem concluir nada sobre voz de gente: entre as vozes sintéticas, uma acertou 7 de 8 pedidos e outra, 1 de 8.

**ablação e erros:** sem a lista, o pedido exato cai de 47% para 27%; com o qwen no lugar das regras, para 20%. erro real: a 10 dB, o whisper às vezes devolve a própria frase de contexto como se fosse a fala (pedido 02).

**limitações:** vozes sintéticas; um "?" faz o pedido inteiro contar como avisado, mesmo com outro campo errado calado (emenda 10), então os 20% podem subestimar o erro calado; o tempo não tem intervalo; o celular é um aparelho só.

## marco 6 · pronto para submissão

**título:** Pedidos de feira por áudio, no celular e sem rede: transcrição com a lista da banca e o erro que chega calado

**o trecho, o resumo:**

> Feirantes recebem encomendas em áudios de WhatsApp e as perdem entre um atendimento e outro. Propomos um caminho que roda no celular da feirante: o whisper `small`, com a lista da banca como contexto, e regras que tiram produto, quantidade e hora, marcando com "?" o que não reconhecem. Avaliamos o pedido inteiro, separando o erro avisado do erro que chega calado à cliente, em 30 pedidos lidos por vozes sintéticas com ruído de feira. A 10 dB, no notebook, 20% dos pedidos saíram errados sem aviso [7%–37%], contra 7% de um caminho maior na nuvem; no celular, a transcrição levou 2,89 vezes a duração do áudio. Rodar sem rede custa pedidos certos, e o teste com mais pedidos e com falantes reais decide se o custo cabe.

**a conclusão responde a:** contribuição 1, o caminho sem rede: roda, e no celular custa 2,89 vezes o áudio. contribuição 2, o erro calado: medido à parte do avisado, 20% a 10 dB, contra a hipótese no piloto. a introdução foi revista com esses números e não promete tempo real.

**formato:** o modelo do PROPOR no Overleaf, no limite de páginas e com a anonimização que a chamada pede, conferidos no PDF.

**referências conferidas:** todas, cada bibtex pego no DOI ou na página do veículo. o resumo estendido de De 2024 e o arXiv de De 2025 aparecem como tais, sem virar artigo completo.

## auditoria cega

**o veredito da conversa nova** (Codex, 19/11/2026, sobre a versão anterior às correções). aqui, o professor cortou a tabela para caber no exemplo; no seu registro, ela vai inteira, sem editar. o revisor leu este registro, não o artigo inteiro, que neste exemplo não existe; por isso reprovou figura, conclusão e bibliografia "não apresentadas", que no seu caso vêm no PDF.

| item | passa ou não passa | trecho que prova | pendência |
|:--|:--|:--|:--|
| 1 · introdução | não passa | "em vez de um modelo grande na nuvem" | o número do problema não está com fonte no trecho; a contribuição 2 não diz o experimento |
| 2 · trabalhos relacionados | não passa | "nenhum transforma a fala num registro de venda" | "todos no campo" generaliza: 38 dos 45 de Patel 2009 foram testados num escritório |
| 3 · método | não passa | "0,17 […] 2,89"; `python avaliar.py` | Sun et al. treinam um componente; o código passa uma frase fixa (`initial_prompt`): a equivalência não está demonstrada |
| 4 · desenho dos experimentos | passa | "acima de 10%"; `cc067d7` antecede scripts e resultados | as emendas 12 a 15 dizem 18/11; o commit `7120ab7` é de 13/11 |
| 5 · resultados e discussão | não passa | "20% [7%–37%]"; "pedido 02", conferido no registro bruto | a comparação é no notebook; no celular, 13% sem aviso; a emenda 10 limita a leitura dos 20%; tempo sem incerteza |
| 6 · pronto para submissão | não passa | título e resumo | conclusão, bibliografia e formato final não apresentados |

as 5 referências abertas existem; Sun, Patel 2009 e Radford não dizem tudo o que o rascunho dizia.

**a minha resposta, sem IA:**
1. concordo nas duas: o número do problema entrou no parágrafo 1, com Nilson et al. 2022, e a contribuição 2 agora aponta o E1, coluna "errado sem aviso".
2. concordo: troquei "no campo" por "com pessoas reais".
3. concordo, e era o erro mais sério: o meu contexto é uma frase, sem treino. Sun virou molde da avaliação, não da técnica, e a ablação "sem a lista" é o que mede o meu ganho.
4. a data do commit é a que vale, 13/11, antes do prazo; o artigo cita o commit. o "18/11" do cabeçalho do `experimentos.md` é o prazo, não o dia do commit.
5. concordo: o celular entrou na tabela e no resumo, e a emenda 10 e o tempo sem intervalo entraram nas limitações.
6. discordo neste registro: conclusão, bibliografia e formato estão no PDF do Overleaf.

## anotações do professor

cada anotação cita uma frase do exemplo e explica por que ela é o padrão que buscamos.

1. **marco 1, o óbvio com nome.** "em vez de um modelo grande na nuvem que conversa pela feirante": a proposta diz o que abandona, e o abandonado é o que os competidores fazem. sem isso, o leitor não sabe por que a ideia não é só mais um robô.
2. **marco 1, cada frase com origem.** "frase 2, a matriz do cmp § 5": o aluno sabe de qual folha veio cada frase, e por isso consegue defendê-la sem a tela.
3. **marco 2, comparar, não listar.** "o teclado do telefone completou mais tarefas que a fala": três artigos no mesmo parágrafo, e o terceiro contraria a ideia. a abordagem fecha com a concessão, "o que este trabalho ainda não fez".
4. **marco 3, medido ou estimado.** "0,17 do áudio no notebook, 2,89 no celular": o custo que não é bom também entra, e diz de onde veio.
5. **marco 4, a emenda no lugar dela.** "a regra simétrica do teste é a emenda 14, commit `7120ab7`, de 13/11": a hipótese fica como foi commitada, e o que mudou depois tem data. o leitor sabe o que foi decidido antes de ver o número.
6. **marco 5, o resultado contra.** "contrariada no piloto": o artigo não reescreve a hipótese para caber no número, e a discussão diz o que a comparação com a nuvem não separa.
7. **marco 6, o resumo com número.** "20% dos pedidos saíram errados sem aviso": o resumo diz o resultado ruim, com o intervalo, e chama a voz sintética pelo nome.
8. **a auditoria que acha o erro de verdade.** "o meu contexto é uma frase, sem treino": o revisor abriu Sun et al. e viu que o artigo base fazia outra coisa. o aluno não defendeu a frase bonita. corrigiu o método e disse o que a ablação passa a provar, e onde discordou, disse por quê.
