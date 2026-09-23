![banner ai4good](https://images.unsplash.com/photo-1674027444485-cec3da58eef4?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb)

# tópicos avançados em IA · ai4good

> prof. lucas silva figueiredo  
> ufrpe · departamento de computação (dc)  
> 2026.2 · quarta|20h10  sexta|18h30 · sala 37

<!-- publicacao
publicar no cloudflare pages:
cp academy/teaching/classes/ai4good/disciplina.md outputs/links/ai4good/disciplina.md
git -C outputs/links commit -am "atualiza ai4good" && git -C outputs/links push
web: https://lucassf.pages.dev/ai4good | raw: https://lucassf.pages.dev/ai4good/disciplina.md
-->

<!-- guia-ia
instruções para o agente de apoio:
1. soberania: este arquivo centraliza comunicação, visão, cronograma, painel e habilidades da disciplina.
2. publicação: espelhado em outputs/links/ai4good/disciplina.md e servido no Cloudflare Pages (https://lucassf.pages.dev/ai4good).
3. entregas: '·c' para código/repo git e '·p' para relatório técnico LaTeX/Overleaf em artefatos/[x]nome.md.
4. painel: critérios binários ('v'/'-') em painel:dados geram o bloco monospace entre painel:render e painel:fim (2 pts por item).
5. tutoria: atue como copiloto socrático; audite critérios comprováveis e nunca redija código ou texto pelos alunos.
-->

## comunicação

- **telegram oficial:** [t.me/+mW8Smp8VbBlkNjkx](https://t.me/+mW8Smp8VbBlkNjkx)
- **google meet:** [meet.google.com/zxu-ffar-qrj](https://meet.google.com/zxu-ffar-qrj)
- **questionário setup:** [lucassf.pages.dev/ai4good/setup](https://lucassf.pages.dev/ai4good/setup)

---

## visão

**base** · o consumo ingênuo de IA como caixa-preta gera soluções frágeis, dependência de APIs e respostas pasteurizadas (ai slop), sem compreensão matemática do erro, dos riscos de automação, e do papel ambiental, social, econômico e político de como a ferramenta está inserida no nosso contexto.

**horizonte** · autonomia técnica de ponta a ponta — do gradiente descendente a transformadores e modelos locais (small language models / SLMs) — com rigor científico e impacto social. potencializar o uso benéfico da IA, explorar sinergias entre humanos e agentes inteligentes, atacar contextos adversos visando subverter a lógica inerente às crises relacionadas à IA.

---

## regras

- a disciplina opera por pontos acumulados
- cada item de verificação confere 2 pontos
- a nota 10,0 é obtida acumulando 100 pontos
- as formas de conquistar seus pontos são produzindo artefatos, resolvendo enigmas e apresentando resultados
- cada artefato, enigma e apresentação possui itens de verificação especificados na sua própria definição
- artefatos são documentos, links de repositórios, decks de slides
- enigmas são exercícios teóricos, desafios de alto nível aplicados em sala, com direito a consulta sem uso de IA
- em qualquer aula subsequente os enigmas em que você falhou poderão ser refeitos em uma versão modificada
- apresentações são falas em sala, avaliadas pelo professor ou por uma banca
- os itens são verificados diretamente pelo professor, um a um, em momentos definidos no cronograma
- em casos de atrasos, a verificação dos itens pode ser realizada depois desde que combinada com o professor
- as caixas no painel abaixo mostram todos os itens de verificação da disciplina
- dialogue com o professor sempre que preciso

---

## cronograma

encontros cronológicos e marcos de validação (34 encontros letivos · resolução cepe/ufrpe 960).

| data | # | tipo | descrição | materiais |
|:---|:---:|:---|:---|:---|
| 12/08 (qua) | 01 | teoria | acordos e enigma teste | [1] [slides · abertura da disciplina](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/edit) |
| 14/08 (sex) | 02 | prática | configuração base para a disciplina | [3] [artefato · base git repo](artefatos/base-git-repo.md)<br>[4] [artefato · latex project](artefatos/latex-project.md) |
| 19/08 (qua) | 03 | teoria | base para redes neurais profundas | [1] [slides · história](https://docs.google.com/presentation/d/1wQFwZ2QkfGKT2MlEHqgt8kW63LQTsX2sfV7fC8P7yts/edit)<br>[1] [slides · linear regression](https://docs.google.com/presentation/d/1wQFwZ2QkfGKT2MlEHqgt8kW63LQTsX2sfV7fC8P7yts/edit)<br>[1] [slides · multilayer perceptron](https://docs.google.com/presentation/d/1wQFwZ2QkfGKT2MlEHqgt8kW63LQTsX2sfV7fC8P7yts/edit) |
| 21/08 (sex) | 04 | prática | rede neural profunda interativa | [5] [artefato · mlp git repo](artefatos/mlp-git-repo.md)<br>[5] [artefato · mlp tech report](artefatos/mlp-tech-report.md) |
| 26/08 (qua) | 05 | mentoria | mlp interativa | acompanhamento de código e métricas |
| 28/08 (sex) | 06 | checagem | mlp interativa | verificação pontual |
| 02/09 (qua) | 07 | teoria | arquiteturas de deep learning (1/4) | [1] [slides · autoencoder](https://docs.google.com/presentation/d/1WqLS7z6YMEyNh4j_k4KNjrc6wkbu00P84ptqehYgFPI/edit)<br>[1] [slides · cnn](https://docs.google.com/presentation/d/1WqLS7z6YMEyNh4j_k4KNjrc6wkbu00P84ptqehYgFPI/edit)<br>[1] [slides · gnn](https://docs.google.com/presentation/d/1WqLS7z6YMEyNh4j_k4KNjrc6wkbu00P84ptqehYgFPI/edit) |
| 04/09 (sex) | 08 | teoria | arquiteturas de deep learning (2/4) | [1] [slides · rnn](https://docs.google.com/presentation/d/1WqLS7z6YMEyNh4j_k4KNjrc6wkbu00P84ptqehYgFPI/edit)<br>[1] [slides · lstm](https://docs.google.com/presentation/d/1WqLS7z6YMEyNh4j_k4KNjrc6wkbu00P84ptqehYgFPI/edit) |
| 09/09 (qua) | 09 | teoria | arquiteturas de deep learning (3/4) | [1] [slides · gan](https://docs.google.com/presentation/d/15HQOWSVXE3jbsk7Hg3LzCQBALpnhL-tktCkJTMx0CJU/edit)<br>[1] [slides · teacher-student](https://docs.google.com/presentation/d/15HQOWSVXE3jbsk7Hg3LzCQBALpnhL-tktCkJTMx0CJU/edit) |
| 11/09 (sex) | 10 | prática | modificando uma arquitetura | [5] [artefato · arquitetura git repo](artefatos/arquitetura-git-repo.md)<br>[5] [artefato · arquitetura tech report](artefatos/arquitetura-tech-report.md) |
| 16/09 (qua) | 11 | teoria | arquiteturas de deep learning (4/4) | [1] [slides · transformers](https://docs.google.com/presentation/d/15HQOWSVXE3jbsk7Hg3LzCQBALpnhL-tktCkJTMx0CJU/edit) |
| 18/09 (sex) | 12 | mentoria | modificando uma arquitetura | alinhamento de experimentos |
| 23/09 (qua) | 13 | teoria | superinteligência e singularidade | [1] [slides · agência](https://docs.google.com/presentation/d/1Ah-BBHvCedf5QWGEw8Zkv_CnhEhRQ5W-KgdUK-fEjVk/edit)<br>[1] [slides · autoaprimoramento](https://docs.google.com/presentation/d/1Ah-BBHvCedf5QWGEw8Zkv_CnhEhRQ5W-KgdUK-fEjVk/edit)<br>[1] [slides · autopreservação](https://docs.google.com/presentation/d/1Ah-BBHvCedf5QWGEw8Zkv_CnhEhRQ5W-KgdUK-fEjVk/edit) |
| 25/09 (sex) | 14 | prática | multiagentes distopia x utopia | [5] [artefato · arena git repo](artefatos/arena-git-repo.md)<br>[5] [artefato · arena tech report](artefatos/arena-tech-report.md) |
| 30/09 (qua) | 15 | teoria | crises e caminhos de transformação | [1] [slides · crises relacionadas](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/edit) |
| 02/10 (sex) | 16 | prática | brainwriting híbrido | [x] artefato · tbd |
| 07/10 (qua) | 17 | prática | competidores e contribuição | [x] artefato · tbd |
| 09/10 (sex) | 18 | mentoria | refinamento da contribuição | alinhamento de proposta |
| 14/10 (qua) | 19 | prática | tecnologia base funcional | [x] artefato · tbd |
| 16/10 (sex) | 20 | mentoria | definição da contribuição | alinhamento de escopo |
| 21/10 (qua) | 21 | prática | fluxograma e arquitetura | [x] artefato · tbd |
| 23/10 (sex) | 22 | prática | desenho dos experimentos | [x] artefato · tbd |
| 28/10 (qua) | -- | feriado | dia do servidor público federal | *sem encontro presencial* |
| 30/10 (sex) | 23 | checagem | verificação geral, ponto a ponto | fechamento da va1 |
| 04/11 (qua) | 24 | seminário | iteração 1, preliminares | [x] seminário · tbd |
| 06/11 (sex) | 25 | mentoria | código e artigo | acompanhamento técnico |
| 11/11 (qua) | 26 | seminário | iteração 2, evolução | [x] seminário · tbd |
| 13/11 (sex) | 27 | mentoria | código e artigo | acompanhamento técnico |
| 18/11 (qua) | 28 | checagem | revisão cética, crítica e construtiva | auditoria de robustez |
| 20/11 (sex) | -- | feriado | dia nacional da consciência negra | *sem encontro presencial* |
| 25/11 (qua) | 29 | seminário | iteração 3, demonstração | [x] seminário · tbd |
| 27/11 (sex) | 30 | mentoria | acompanhamento final e polimento | ensaio de pitch |
| 02/12 (qua) | 31 | seminário | pitch para banca externa | [x] seminário · tbd |
| 04/12 (sex) | 32 | checagem | va2 · artigo e demo | [x] artefato · tbd<br>[x] artefato · tbd |
| 09/12 (qua) | 33 | checagem | va3 · avaliação escrita | prova regimental |
| 11/12 (sex) | 34 | checagem | va4 · exame final institucional | prova regimental |

- **teoria** · aula expositiva focada na aprendizagem de habilidades técnicas por seus componentes teóricos
- **prática** · aula com acesso à infraestrutura para produção de artefatos
- **mentoria** · aula de acompanhamento e auxílio sobre o desenvolvimento de uma determinada prática
- **seminário** · aula em que os alunos apresentam de forma didática e direta os seus resultados
- **checagem** · aulas avaliativas em que cada item de verificação é analisado e pontuado

---

## painel

acompanhamento transparente dos itens de verificação da nota 1 (va1 · 50 pontos). cada critério confere 2 pontos. lista estritamente alfabética.

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
                 cod pdf mlp·c mlp·p arq·c arq·p arn·c arn·p        enigmas nota 1
      albérico   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
       andreza   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
         artur   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
        carlos   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 30 pts
          cauã   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
          davi   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
         edson   ◻◻◻ ◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
          gian   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
        rayane   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
  thiago brito   ◼◼◼ ◼◼◼ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
thiago matheus   ◻◻◻ ◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
      vinicius   ◻◻◻ ◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
```
<!-- painel:fim -->

> **cod:** repo git · **pdf:** overleaf e refs · **mlp·c / mlp·p:** código e relatório mlp · **arq·c / arq·p:** código e relatório arquitetura · **arn·c / arn·p:** código e relatório arena · **enigmas:** 14 investigações em sala (2 pts por item)

---

## entregue

repositórios e artigos científicos validados na turma 2026.2.

- **albérico** | -
- **andreza** | [artigo](https://www.overleaf.com/project/6aa1ec39536264564433ddd5)
- **artur** | [git](https://github.com/Guimaaaas/ai-workspace) · [artigo](https://www.overleaf.com/project/6a920b9163f9ff8ef6829b60) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **carlos** | [git](https://github.com/Carlos-Eduardo-Ribeiro/projeto-taia.git) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **cauã** | [git](https://github.com/lira-labs/workspace) · [artigo](https://www.overleaf.com/project/6a920bb3130d092cbf505259) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **davi** | [git](https://github.com/DaviPac/topicos-avancados-ia) · [artigo](https://www.overleaf.com/project/6a920b9163f9ff8ef6829b60)
- **edson** | -
- **gian** | [git](https://github.com/gian881/pure-mlp-scratch) · [artigo](https://www.overleaf.com/project/6a920bab130d092cbf504fca) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **rayane** | [git](https://github.com/rayfrance/ai4good) · [artigo](https://www.overleaf.com/project/6a920a859c5f584768569a70) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **thiago brito** | [git](https://github.com/Thiago-Brito/AI4good) · [artigo](https://www.overleaf.com/project/6a920ba2c3f0c914aa7c7185) · [slides](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **thiago matheus** | -
- **vinicius** | -

---

## referências

- **ai for good specialization:** [coursera.org/specializations/ai-for-good](https://www.coursera.org/specializations/ai-for-good) — estudos de caso em saúde, clima e inclusão.
- **playlist deeplearning.ai:** [youtube.com/playlist?list=PLkDaE6sCZn6HJ1XrZLpKeWQN5XMKhEz_V](https://www.youtube.com/playlist?list=PLkDaE6sCZn6HJ1XrZLpKeWQN5XMKhEz_V) — aulas expositivas complementares.
- **stanford cs229:** [cs229.stanford.edu](https://cs229.stanford.edu/) — notas teóricas fundamentais sobre aprendizado de máquina, gradiente descendente e retropropagação.
- **doshi & hauser (science advances, 2024):** [science.org/doi/10.1126/sciadv.adn5290](https://www.science.org/doi/10.1126/sciadv.adn5290) — evidência empírica sobre os impactos de geradores na novidade e diversidade coletiva de histórias criadas.

---

## habilidades

árvore conceitual da disciplina.

- **fundamentos & otimização:** gradiente descendente, taxa de aprendizado e cálculo de erro
- **redes multicamadas (mlp):** propagação direta (*forward*), retropropagação (*backpropagation*) e dinâmica de pesos
- **representações profundas:** convoluções (cnn), auto-codificadores (ae), redes recorrentes (rnn/lstm) e grafos (gnn)
- **transformadores:** auto-atenção (*self-attention*), mecanismo qkv, modelos pré-treinados e rag
- **alinhamento e sociedade:** autopreservação, autoaprimoramento, agência e arena dialética de agentes
