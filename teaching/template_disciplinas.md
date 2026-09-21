![banner da disciplina](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80)

# [nome da disciplina]

> prof. lucas silva figueiredo  
> [universidade / departamento]  
> [semestre, ex.: 2026.2]  
> [horário das aulas] · [sala física / laboratório]

<!-- guia-ia
instruções para o agente / ia de apoio à disciplina:
1. este arquivo é o documento soberano da disciplina (o próprio site da matéria). ele centraliza comunicação, propósito, calendário com missões, painel de progresso, regras de avaliação, referências e o mapa de vocabulário da disciplina.
2. todas as missões apontam para artefatos modulares na pasta 'artefatos/[xpts]artefato-[nome].md'. nunca duplique os passos dos artefatos aqui; aponte para os links canônicos.
3. ao interagir com o estudante, ajude-o a localizar seu momento no calendário, pré-requisitos no mapa conceitual e os pontos de verificação pendentes nas suas missões.
-->

## comunicação

- **grupo oficial:** [link do whatsapp / telegram / discord]
- **(opcional) videochamadas:** [link do meet / discord]
- **(opcional) espaços digitais:** [link do excalidraw / miro]

---

## visão

- **a base (ponto de partida):** [descrever o dilema, a dor real ou o gargalo inicial que motiva a existência desta disciplina]
- **o horizonte (onde queremos chegar):** [qual impacto concreto, autonomia e competências duradouras os estudantes constroem ao longo do semestre]

---

## regras

a disciplina opera com **pontos acumulados**: estudantes e equipes partem do zero e constroem sua pontuação a cada critério validado.

cada artefato possui de 1 a 3 pontos de verificação objetivos e atômicos definidos em seu próprio arquivo. a verificação é puramente binária: feito (1 ponto) ou não feito (0 pontos).

(opcional) exercícios práticos de fixação podem somar pontos adicionais diretamente no saldo da missão conforme previsto no cronograma.

(opcional) [1 pt] avaliação entre equipes: ponto extra por missão para equipes que realizam revisões de pares aprofundadas, coerentes e construtivas para os colegas.

calibração intragrupo: formulário anônimo onde cada integrante avalia o engajamento e a contribuição dos pares da sua própria equipe, garantindo justiça interna e evitando caronas.

composição das avaliações (vas):
- **va1:** total de pontos acumulados nas missões do primeiro ciclo.
- **va2:** total de pontos acumulados nas missões do segundo ciclo e apresentação perante banca examinadora.
- **va3 / final:** avaliação individual conforme regimento institucional para quem necessitar de recuperação.

---

## cronograma

encontros cronológicos da disciplina e marcos de validação:

| data | descrição | materiais e atividades |
|:---|:---|:---|
| 18/08 (seg) | abertura e contrato pedagógico | [introdução](slides-intro.html#1) · quick win |
| 20/08 (qua) | setup instrumental e introdução a agentes | [ambiente](slides-setup.html#1) · [[1 pt] exercício 01](url) |
| 25/08 (seg) | dores autênticas e alavancas contra o óbvio | [problemas](slides-problemas.html#1) |
| 27/08 (qua) | validação de código e apresentação da missão 01 | [[3 pts] kanban](artefatos/[3pts]artefato-kanban.md)<br>[[3 pts] setup](artefatos/[3pts]artefato-setup.md)<br>[[3 pts] problemas](artefatos/[3pts]artefato-problemas.md)<br>[1 pt] avaliação entre equipes |
| 01/09 (seg) | feriado | *sem encontro presencial* |
| 03/09 (qua) | visão computacional: convolução e filtros | [convolução](slides-cnn.html#convolucao)<br>[filtros](slides-cnn.html#sobel)<br>[[1 pt] exercício 02](url) |
| 17/09 (qua) | mapeamento de concorrentes e missão 02 | [[3 pts] concorrentes](artefatos/[3pts]artefato-concorrentes.md)<br>[[3 pts] benchmark](artefatos/[3pts]artefato-benchmark.md)<br>[1 pt] avaliação entre equipes |
| 29/10 (qua) | protótipo funcional e missão 03 | [[3 pts] protótipo](artefatos/[3pts]artefato-prototipo.md)<br>[[3 pts] experimentos](artefatos/[3pts]artefato-experimentos.md)<br>[[3 pts] métricas](artefatos/[3pts]artefato-metricas.md)<br>[1 pt] avaliação entre equipes |
| 03/12 (qua) | defesa pública perante banca examinadora | banca externa de pitch & encerramento |

---

## painel

acompanhamento transparente dos pontos conquistados em cada artefato ao longo do semestre. a lista é estritamente alfabética (sem rankings):

<!-- painel:dados
formato: cada critério atômico do artefato é marcado como 'v' (feito) ou '-' (pendente).
albatroz: kan=vvv, set=vvv, pro=vvv, tec=vvv, con=vvv, ben=vvv, req=vvv, arq=vvv, pro=vvv, tes=vvv, met=vvv, val=vvv, dep=vvv, art=vvv, pit=vvv, par=vvvv
beta:     kan=vvv, set=vv-, pro=vvv, tec=---, con=vvv, ben=vvv, req=vvv, arq=vvv, pro=vvv, tes=vvv, met=vvv, val=vvv, dep=vvv, art=vvv, pit=vvv, par=vvv-
gamma:    kan=vvv, set=vvv, pro=vvv, tec=vvv, con=vvv, ben=vvv, req=vvv, arq=vvv, pro=vvv, tes=vvv, met=vvv, val=vvv, dep=vvv, art=vvv, pit=vvv, par=vvvv
-->
<!-- painel:render -->
```text
          kan set pro tec con ben req arq pro tes met val dep art pit  par    total
albatroz  ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◼  49 pts
    beta  ◼◼◼ ◼◼◻ ◼◼◼ ◻◻◻ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◻  43 pts
   gamma  ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◼  49 pts
```
<!-- painel:fim -->

> **legenda:** **kan**ban · **set**up · **pro**blemas · **tec**nologia · **con**correntes · **ben**chmark · **req**uisitos · **arq**uitetura · **pro**tótipo · **tes**tes · **met**ricas · **val**idação · **dep**loy · **art**igo · **pit**ch · **par**es

---

## entregue

repositórios, documentos e materiais validados pelas equipes na turma atual:

- **albatroz:** [kanban](url) · [setup](url) · [problemas](url) · [tecnologia](url)
- **beta:** [kanban](url) · [setup](url) · [problemas](url)
- **gamma:** [kanban](url) · [setup](url) · [problemas](url) · [tecnologia](url)

---

## legado

conquistas e projetos inspiradores de turmas anteriores com desdobramentos reais (tcc, artigos e editais):

- **[projeto a] ([semestre]):** [tcc](url) · [artigo](url) · [vídeo](url)
- **[projeto b] ([semestre]):** [artigo](url) · [repositório](url)

---

## referências

leituras clássicas de base e recursos práticos mais inspiradores para suporte ao desenvolvimento:

### materiais inspiradores & toolkits
- **design toolkit (ideo):** `https://www.designkit.org/` — referências de ideação centrada no humano.
- **toolkit de inovação (tcu):** ferramentas e dinâmicas colaborativas para projetos públicos e sociais.
- **exemplos de pitch de excelência:** [links de gravações de demonstrações que causam encantamento].

### livros e bibliografia recomendada
- [livro 1 / autor / ano / por que vale a pena ler]
- [livro 2 / autor / ano / por que vale a pena ler]

---

## vocabulário

árvore semântica dos tópicos e habilidades técnicas desenvolvidas ao longo da disciplina. cada conceito aponta para o slide exato onde o fundamento é ensinado:

- **redes neurais & representação visual**
  - **[perceptrons & mlp](slides-mlp.html#1)** (redes neurais multicamadas de alimentação direta)
    - [`forward pass`](slides-mlp.html#forward) — passo de inferência e propagação direta
    - [`backpropagation`](slides-mlp.html#backprop) — retropropagação do erro via regra da cadeia
    - [`loss function`](slides-mlp.html#loss) — função de perda / custo de calibração
  - **[cnn (redes neurais convolucionais)](slides-cnn.html#1)**
    - [`convolução`](slides-cnn.html#convolucao) — operação de filtragem espacial deslizante
      - [`kernel`](slides-cnn.html#kernel) — núcleo / matriz de pesos do filtro
      - [`laplace`](slides-cnn.html#laplace) — operador de bordas omnidirecional
      - [`sobel`](slides-cnn.html#sobel) — gradientes direcionais horizontal e vertical
    - [`stride`](slides-cnn.html#stride) — passo de deslocamento do kernel
    - [`padding`](slides-cnn.html#padding) — preenchimento de bordas para preservação dimensional
    - [`pooling`](slides-cnn.html#pooling) — subamostragem e redução espacial
  - **[autoencoders](slides-autoencoder.html#1)** (auto-codificadores)
    - [`encoder`](slides-autoencoder.html#encoder) — codificador de compressão
    - [`bottleneck`](slides-autoencoder.html#bottleneck) — gargalo / espaço latente comprimido
    - [`decoder`](slides-autoencoder.html#decoder) — decodificador de reconstrução
