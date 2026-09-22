![banner ai4good](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&auto=format&fit=crop&q=80)

# tópicos em ia · ai4good

> prof. lucas silva figueiredo  
> ufrpe · departamento de estatística e informática (deinfo)  
> 2026.2 · quarta 20h10 e sexta 18h30

<!-- publicacao
publicar no cloudflare pages:
cp academy/teaching/classes/ai4good/disciplina.md outputs/links/ai4good/disciplina.md
git -C outputs/links commit -am "atualiza ai4good" && git -C outputs/links push
web: https://lucassf.pages.dev/ai4good/disciplina | raw: https://lucassf.pages.dev/ai4good/disciplina.md
-->

<!-- guia-ia
instruções para o agente de apoio:
1. soberania: este arquivo centraliza comunicação, visão, cronograma, painel e habilidades da disciplina.
2. publicação: espelhado em outputs/links/ai4good/disciplina.md e servido no Cloudflare Pages.
3. entregas: '·c' para código/repo git e '·p' para relatório técnico LaTeX/Overleaf em artefatos/[x][nome].md.
4. painel: critérios binários ('v'/'-') em painel:dados geram o bloco monospace entre painel:render e painel:fim.
5. tutoria: atue como copiloto socrático; audite critérios comprováveis e nunca redija código ou texto pelos alunos.
-->

## comunicação

- **telegram oficial:** [t.me/+mW8Smp8VbBlkNjkx](https://t.me/+mW8Smp8VbBlkNjkx)
- **google meet:** [meet.google.com/zxu-ffar-qrj](https://meet.google.com/zxu-ffar-qrj)
- **planilha mestre:** [google sheets](https://docs.google.com/spreadsheets/d/1IgBJWxItjmolBgwsnjlER894V6BP9nns8dFcc-NhStY/edit)
- **questionário setup:** [lucassf.pages.dev/ai4good/setup](https://lucassf.pages.dev/ai4good/setup)

---

## visão

**a base (ponto de partida):** o consumo ingênuo de IA como caixa-preta gera soluções frágeis, dependência de APIs e respostas pasteurizadas (*ai slop*), sem compreensão matemática do erro ou dos riscos de automação.

**o horizonte (onde queremos chegar):** formar pesquisadores com autonomia técnica de ponta a ponta — do gradiente descendente a transformadores e modelos locais (*small language models* / SLMs) — com rigor científico e impacto social.

---

## regras

#### pontos acumulados (xp)

- a disciplina opera por **pontos acumulados** (partindo do zero até 50 pontos na VA1).
- cada artefato possui de **3 a 5 pontos de verificação** comprováveis (1 ponto por critério).
- as aulas teóricas trazem **enigmas investigativos** em sala valendo pontos de fundamentação.
- nota oficial no SIGAA: $\text{Nota} = \text{Pontos} / 5$ *(45 pts = 9,0; 50 pts = 10,0)*.
- entregas semanais; atrasos aceitos com **70% da pontuação original**.

#### o passo a mais (7 alavancas contra o óbvio)

ao propor qualquer solução, desloque o problema ou a abordagem com uma destas alavancas:
1. **inverter componente:** o que era em nuvem passa a ser 100% local.
2. **trocar persona:** focar no operador invisível (secretaria, fiscal, porteiro).
3. **juntar pontos não-usuais:** cruzar domínios distantes (ex.: apostas + visão + finanças).
4. **inverter objetivo:** em vez de acelerar X, construir barreira para impedir X.
5. **restrição dura:** operar offline, custo zero de API ou em menos de 30 segundos.
6. **trocar quem trabalha:** o aluno audita a IA; a comunidade valida.
7. **mudar o momento:** agir preventivamente antes da crise, ou no longo prazo.

> [!IMPORTANT]
> Declare no relatório a **alavanca usada** e o **óbvio abandonado**. Ideias com IA homogeneizam o texto (*Doshi & Hauser*); o passo a mais é o antídoto.

---

## cronograma

encontros cronológicos e marcos de validação (34 encontros letivos · resolução cepe/ufrpe 960).

| data | tipo | tema e atividades | materiais & artefatos |
|:---|:---:|:---|:---|
| 12/08 (qua) | aula 01 | abertura da disciplina e contrato pedagógico | [[1] abertura](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/edit) |
| 14/08 (sex) | aula 02 | setup instrumental, git, overleaf e harness | [[1] setup](https://docs.google.com/presentation/d/1tPA8BDEXU5S_qBrKspkW81Pj_gzZ0L0UC-flEtiNLEY/edit)<br>[[3] cod](artefatos/[3]cod.md)<br>[[3] pdf](artefatos/[3]pdf.md) |
| 19/08 (qua) | aula 03 | história da ia, aprendizado e mlp | [[1] história & mlp](https://docs.google.com/presentation/d/1wQFwZ2QkfGKT2MlEHqgt8kW63LQTsX2sfV7fC8P7yts/edit)<br>[1] enigma 01<br>[1] enigma 02 |
| 21/08 (sex) | aula 04 | prática: implementação de mlp do zero | [[1] prática mlp](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)<br>[[5] mlp·c](artefatos/[5]mlp-c.md)<br>[[5] mlp·p](artefatos/[5]mlp-p.md) |
| 26/08 (qua) | aula 05 | arquiteturas: ae, cnn, gnn, rnn e lstm | [[1] arquiteturas](https://docs.google.com/presentation/d/1WqLS7z6YMEyNh4j_k4KNjrc6wkbu00P84ptqehYgFPI/edit)<br>[1] enigma 03<br>[1] enigma 04 |
| 28/08 (sex) | aula 06 | prática: modificação de arquiteturas | [[1] prática arq](https://docs.google.com/presentation/d/1nxPb6Df7eSBWiZBY0yOaMae0y1FUJ04v4bjINOk2MtQ/edit)<br>[[5] arq·c](artefatos/[5]arq-c.md)<br>[[5] arq·p](artefatos/[5]arq-p.md) |
| 02/09 (qua) | aula 07 | generativos: gan, destilação e transformers | [[1] transformers](https://docs.google.com/presentation/d/15HQOWSVXE3jbsk7Hg3LzCQBALpnhL-tktCkJTMx0CJU/edit)<br>[1] enigma 05<br>[1] enigma 06 |
| 04/09 (sex) | aula 08 | prática: experimentos adversariais | [[1] prática adv](https://docs.google.com/presentation/d/1FbH8pLTZzecBH6bkBiG2t2SxnXXZ86yJ7h-R-mPd2r0/edit) |
| 09/09 (qua) | aula 09 | alinhamento: preservação e agência | [[1] agência](https://docs.google.com/presentation/d/1Ah-BBHvCedf5QWGEw8Zkv_CnhEhRQ5W-KgdUK-fEjVk/edit)<br>[1] enigma 07<br>[1] enigma 08 |
| 11/09 (sex) | aula 10 | prática: arena dialética (distopia e utopia) | [[1] distopia](https://docs.google.com/presentation/d/1PLQ8zsCanD51ZINLOJNKkuXpFWuMjR2XSvoLSuyeAXg/edit)<br>[[5] arn·c](artefatos/[5]arn-c.md)<br>[[5] arn·p](artefatos/[5]arn-p.md) |
| 16/09 (qua) | aula 11 | crises tecnológicas e impactos | [[1] crises](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/edit)<br>[1] enigma 09 |
| 18/09 (sex) | aula 12 | prática: exploração de problemas autênticos | especificação de problemas |
| 23/09 (qua) | aula 13 | caminhos de transformação | [[1] transformação](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/edit)<br>[1] enigma 10 |
| 25/09 (sex) | aula 14 | prática: ideação com alavancas | entrega: [[5] arq·c](artefatos/[5]arq-c.md) e [[5] arq·p](artefatos/[5]arq-p.md) |
| 30/09 (qua) | aula 15 | estado da arte e referências acadêmicas | [1] enigma 11 |
| 02/10 (sex) | aula 16 | prática: mapeamento de competidores | benchmark de soluções |
| 07/10 (qua) | aula 17 | impacto social e formulação da contribuição | feira de profissões *(aula mantida)*<br>[1] enigma 12 |
| 09/10 (sex) | aula 18 | prática: tecnologia-base do projeto | alinhamento de infraestrutura |
| 14/10 (qua) | aula 19 | metodologia de pesquisa e rigor experimental | [1] enigma 13 |
| 16/10 (sex) | aula 20 | prática: arquitetura modular e dados | diagramação de pipelines |
| 21/10 (qua) | aula 21 | métricas científicas e baselines | [1] enigma 14 |
| 23/10 (sex) | aula 22 | prática: execução dos experimentos | rodadas de testes |
| 28/10 (qua) | feriado | dia do servidor público federal | *sem encontro presencial* |
| 30/10 (sex) | aula 23 | prática: consolidação de resultados | fechamento da va1 |
| 04/11 (qua) | aula 24 | seminários de pesquisa: iteração 1 | apresentações preliminares |
| 06/11 (sex) | aula 25 | acompanhamento técnico de código e artigo | mentoria |
| 11/11 (qua) | aula 26 | seminários de pesquisa: iteração 2 | evolução de métricas |
| 13/11 (sex) | aula 27 | acompanhamento técnico | mentoria |
| 18/11 (qua) | aula 28 | seminários de pesquisa: iteração 3 | ensaio de demonstração |
| 20/11 (sex) | feriado | dia nacional da consciência negra | *sem encontro presencial* |
| 25/11 (qua) | aula 29 | seminários de pesquisa: iteração 4 | revisão cética |
| 27/11 (sex) | aula 30 | acompanhamento final e polimento | ensaio de pitch |
| 02/12 (qua) | aula 31 | banca examinadora externa (va2) | entrega de artigo, demo e pitch |
| 04/12 (sex) | aula 32 | devolutiva geral e encerramento | retrospectiva da disciplina |
| 09/12 (qua) | aula 33 | 3a verificação de aprendizagem (va3) | prova síncrona |
| 11/12 (sex) | aula 34 | exame final institucional (va4) | prova final regimental |

---

## painel

acompanhamento transparente dos pontos de verificação da nota 1 (va1 · 50 pontos). lista estritamente alfabética.

<!-- painel:dados
alberico:       cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvvv
andreza:        cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvvv
artur:          cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvvv
carlos:         cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvv-
caua:           cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvvv
davi:           cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvvv
edson:          cod=---, pdf=---, mlp·c=-----, mlp·p=-----
gian:           cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvvv
rayane:         cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvvv
thiago-brito:   cod=vvv, pdf=vvv, mlp·c=vvvvv, mlp·p=vvvvv
thiago-matheus: cod=---, pdf=---, mlp·c=-----, mlp·p=-----
vinicius:       cod=---, pdf=---, mlp·c=-----, mlp·p=-----
-->
<!-- painel:render -->
```text
                 cod pdf   mlp·c mlp·p   arq·c arq·p   arn·c arn·p      enigmas      nota 1
      albérico   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◼   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  16 pts
       andreza   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◼   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  16 pts
         artur   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◼   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  16 pts
        carlos   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  15 pts
          cauã   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◼   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  16 pts
          davi   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◼   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  16 pts
         edson   ◻◻◻ ◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
          gian   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◼   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  16 pts
        rayane   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◼   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  16 pts
  thiago brito   ◼◼◼ ◼◼◼   ◼◼◼◼◼ ◼◼◼◼◼   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  16 pts
thiago matheus   ◻◻◻ ◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
      vinicius   ◻◻◻ ◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻ ◻◻◻◻◻   ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
```
<!-- painel:fim -->

> **cod:** repo git · **pdf:** overleaf e refs · **mlp·c / mlp·p:** código e relatório mlp · **arq·c / arq·p:** código e relatório arquitetura · **arn·c / arn·p:** código e relatório arena · **enigmas:** 14 investigações em sala

---

## entregue

repositórios e artigos científicos validados na turma 2026.2.

- **albérico** | *[aguardando submissão de links]*
- **andreza** | [artigo](https://www.overleaf.com/project/6aa1ec39536264564433ddd5)
- **artur** | [git](https://github.com/Guimaaaas/ai-workspace) · [artigo](https://www.overleaf.com/project/6a920b9163f9ff8ef6829b60) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **carlos** | [git](https://github.com/Carlos-Eduardo-Ribeiro/projeto-taia.git) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **cauã** | [git](https://github.com/lira-labs/workspace) · [artigo](https://www.overleaf.com/project/6a920bb3130d092cbf505259) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **davi** | [git](https://github.com/DaviPac/topicos-avancados-ia) · [artigo](https://www.overleaf.com/project/6a920b9163f9ff8ef6829b60)
- **edson** | *[pendente]*
- **gian** | [git](https://github.com/gian881/pure-mlp-scratch) · [artigo](https://www.overleaf.com/project/6a920bab130d092cbf504fca) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **rayane** | [git](https://github.com/rayfrance/ai4good) · [artigo](https://www.overleaf.com/project/6a920a859c5f584768569a70) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **thiago brito** | [git](https://github.com/Thiago-Brito/AI4good) · [artigo](https://www.overleaf.com/project/6a920ba2c3f0c914aa7c7185) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **thiago matheus** | *[pendente]*
- **vinicius** | *[pendente]*

---

## referências

- **ai for good specialization:** [coursera.org/specializations/ai-for-good](https://www.coursera.org/specializations/ai-for-good) — estudos de caso em saúde, clima e inclusão.
- **playlist deeplearning.ai:** [youtube.com/playlist?list=PLkDaE6sCZn6HJ1XrZLpKeWQN5XMKhEz_V](https://www.youtube.com/playlist?list=PLkDaE6sCZn6HJ1XrZLpKeWQN5XMKhEz_V) — aulas expositivas complementares.
- **stanford cs229:** notas teóricas fundamentais sobre gradiente descendente e retropropagação.
- **doshi & hauser (science advances, 2024):** evidência empírica de homogeneização textual por IA.

---

## habilidades

árvore conceitual da disciplina.

- **fundamentos & otimização:** gradiente descendente, taxa de aprendizado e cálculo de erro
- **redes multicamadas (mlp):** propagação direta (*forward*), retropropagação (*backpropagation*) e dinâmica de pesos
- **representações profundas:** convoluções (cnn), auto-codificadores (ae), redes recorrentes (rnn/lstm) e grafos (gnn)
- **transformadores:** auto-atenção (*self-attention*), mecanismo qkv, modelos pré-treinados e rag
- **alinhamento e sociedade:** autopreservação, autoaprimoramento, agência e arena dialética de agentes
