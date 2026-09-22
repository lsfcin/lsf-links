![banner da disciplina](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80)

# [nome da disciplina]

> prof. lucas silva figueiredo  
> [universidade / departamento]  
> [semestre, ex.: 2026.2]  
> [horário das aulas] · [sala física / laboratório]

<!-- publicacao
como publicar / atualizar este documento no cloudflare pages (autonomia do professor):
1. sincronizar com a pasta publica:
   cp academy/teaching/structure/templates/template-disciplina.md outputs/links/teaching/template_disciplinas.md
2. commitar e enviar para o cloudflare pages:
   git -C outputs/links commit -am "atualiza template de disciplina" && git -C outputs/links push
3. links resultantes no ar (instantaneo):
   - visualizacao web (humano): https://lucassf.pages.dev/teaching/template_disciplinas
   - visualizacao raw (agente/ia): https://lucassf.pages.dev/teaching/template_disciplinas.md
   - edicao direta no navegador (sem terminal): botao 'editar (github.dev)' no rodape da pagina
-->

<!-- guia-ia
instruções para o agente / IA de apoio e manutenção da disciplina:
1. este arquivo é o documento soberano da disciplina (o próprio site da matéria). ele centraliza comunicação, visão, cronograma com artefatos, painel de progresso, regras de avaliação, entregas das equipes, referências e a árvore de habilidades da disciplina.
2. publicação na web: este arquivo é espelhado em 'outputs/links/<disciplina>/disciplina.md' e servido via 'outputs/links/<disciplina>/disciplina.html' no Cloudflare Pages (https://lucassf.pages.dev/<disciplina>/disciplina). ao editar o canônico no workspace, sincronize a pasta de links e dê commit/push para atualizar o site ao vivo.
3. todas as entregas apontam para artefatos modulares na pasta 'artefatos/<nome>.md' (ex.: 'artefatos/kanban.md'). os pontos de verificação e critérios atômicos pertencem exclusivamente ao arquivo do próprio artefato; o cronograma cita apenas o link limpo do artefato ('[kanban](artefatos/kanban.md)').
4. painel de progresso: dados de verificação ficam armazenados no bloco de dados oculto (painel:dados ...) no formato atômico 'v' (feito) ou '-' (pendente) por critério de artefato (ex.: 'kan=vvv, set=vv-'). o bloco renderizado em ASCII monospace (Fira Code) entre 'painel:render' e 'painel:fim' é derivado diretamente desses dados, mantendo ordem estritamente alfabética e nomes alinhados à direita.
5. interação socrática: ao interagir com o estudante, ajude-o a localizar seu momento no cronograma, pré-requisitos na árvore de habilidades e pontos pendentes nas missões. nunca tome decisões pelos alunos, dialogue com eles ponto a ponto.
-->

## comunicação

- **grupo oficial:** [link do whatsapp / telegram / discord]
- **(opcional) videochamadas:** [link do meet / discord]
- **(opcional) espaços digitais:** [link do excalidraw / miro]

---

## visão

**a base (ponto de partida):** [descrever o dilema, a dor real ou o gargalo inicial que motiva a existência desta disciplina]

**o horizonte (onde queremos chegar):** [qual impacto concreto, autonomia e competências duradouras os estudantes constroem ao longo do semestre]

---

## regras

#### pontos

- a disciplina opera com **pontos acumulados**.
- estudantes / equipes **partem do zero** e acumulam pontos.
- os pontos **representam as notas**.
- **artefatos** possuem de 3 a 5 *pontos verificáveis*.
- cada ponto é explícito, ou foi alcançado ou não foi.
- (opcional, remover caso não seja usado na disciplina) **exercícios teóricos** incluídos nos slides e realizados em sala conferem pontos.
- (opcional, remover caso não seja usado na disciplina) **provas e miniprovas** também conferem pontos.
- (opcional, remover caso não seja usado na disciplina) **apresentações** feitas para a banca conferem pontos.
- (opcional, remover caso não seja usado na disciplina) **avaliações por pares** de outras equipes, sendo aprofundadas, coerentes e construtivas conferem pontos.
- (opcional, remover caso não seja usado na disciplina) **avaliações dos membros** da sua equipe distribuem pontos.
- os pontos estão disponibilizados no **cronograma**.
- um **painel** geral com todos os pontos está disponível.

#### composição das notas

- **1a nota:** [descrever quais tipos de atividade compõem a nota 1. ex.: acúmulo dos pontos dos artefatos entregues durante o processo de confecção dos projetos, somados às contribuções com avaliações de outras equipes e aos pontos distribuídos pelas avaliações dos próprios membros neste período].
- **2a nota:** [descrever quais tipos de atividade compõem a nota 2. ex.: total de pontos acumulados sobre o relatório técnico, o vídeo de demonstração e a avaliação da banca examinadora sobre a apresentação somados aos pontos distribuídos pelas avaliações dos próprios membros.]
- **3a nota / final:** avaliação individual conforme regimento institucional para quem necessitar de recuperação.

---

## cronograma

encontros cronológicos da disciplina e marcos de validação.

| data | descrição | materiais e atividades |
|:---|:---|:---|
| 18/08 (seg) | abertura e contrato pedagógico | [introdução](slides-intro.html#1) |
| 20/08 (qua) | setup instrumental e introdução a agentes | [ambiente](slides-setup.html#1) |
| 25/08 (seg) | dores autênticas e alavancas contra o óbvio | [problemas](slides-problemas.html#1) |
| 27/08 (qua) | validação de código e apresentação da missão 01 | [kanban](artefatos/kanban.md)<br>[setup](artefatos/setup.md)<br>[problemas](artefatos/problemas.md)<br>avaliação por pares |
| 01/09 (seg) | feriado | *sem encontro presencial* |
| 03/09 (qua) | visão computacional: convolução e filtros | [convolução](slides-cnn.html#convolucao)<br>[filtros](slides-cnn.html#sobel) |
| 17/09 (qua) | mapeamento de concorrentes e missão 02 | [concorrentes](artefatos/concorrentes.md)<br>[benchmark](artefatos/benchmark.md)<br>avaliação por pares |
| 29/10 (qua) | protótipo funcional e missão 03 | [protótipo](artefatos/prototipo.md)<br>[experimentos](artefatos/experimentos.md)<br>[métricas](artefatos/metricas.md)<br>avaliação por pares |
| 03/12 (qua) | defesa pública perante banca examinadora | banca externa de pitch & encerramento |

---

## painel

acompanhamento transparente dos pontos conquistados em cada artefato ao longo do semestre. a lista é estritamente alfabética (sem rankings).

<!-- painel:dados
formato: cada critério atômico do artefato é marcado como 'v' (feito) ou '-' (pendente).
beta:  kan=vvv, set=vvv, pro=vvv, tec=vvv, con=vvv, ben=vvv, req=vvv, arq=vvv, pro=vvv, tes=vvv, met=vvv, val=vvv, dep=vvv, art=vvv, pit=vvv, par=vvvv
gamma: kan=vvv, set=vv-, pro=vvv, tec=---, con=vvv, ben=vvv, req=vvv, arq=vvv, pro=vvv, tes=vvv, met=vvv, val=vvv, dep=vvv, art=vvv, pit=vvv, par=vvv-
zeta:  kan=vvv, set=vvv, pro=vvv, tec=vvv, con=vvv, ben=vvv, req=vvv, arq=vvv, pro=vvv, tes=vvv, met=vvv, val=vvv, dep=vvv, art=vvv, pit=vvv, par=vvvv
-->
<!-- painel:render -->
```text
       kan set pro tec con ben req arq pro tes met val dep art pit  par   nota 1
 beta  ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◼  49 pts
gamma  ◼◼◼ ◼◼◻ ◼◼◼ ◻◻◻ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◻  43 pts
 zeta  ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◼  49 pts

       relatório        demo          apresentação   nota 2
 beta  ◼◼◼◻◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
gamma  ◼◼◼◼◼◼◼◼◼◼◼◼◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
 zeta  ◼◼◼◼◼◼◼◼◼◻◻◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
```
<!-- painel:fim -->

> **kan**ban · **set**up · **pro**blemas · **tec**nologia · **con**correntes · **ben**chmark · **req**uisitos · **arq**uitetura · **pro**tótipo · **tes**tes · **met**ricas · **val**idação · **dep**loy · **art**igo · **pit**ch · **par**es

---

## entregue

repositórios, documentos e materiais validados pelas equipes na turma atual.

- **beta** | membro 1 (papel do membro 1), membro 2 (papel)  
*[kanban](url) · [setup](url) · [problemas](url) · [tecnologia](url)*
- **gamma** | membro 1 (papel do membro 1), membro 2 (papel)  
*[kanban](url) · [setup](url) · [problemas](url) · [tecnologia](url)*
- **zeta** | membro 1 (papel do membro 1), membro 2 (papel)  
*[kanban](url) · [setup](url) · [tecnologia](url)*

---

## legado

projetos de turmas anteriores.

- **projeto a** | membro 1 (papel do membro 1), membro 2 (papel)  
*(opcional) destacar caso o projeto tenha gerado desdobramentos reais (tcc, artigos e editais)*  
*[kanban](url) · [setup](url) · [problemas](url) · [tecnologia](url)*
- **projeto b** | membro 1 (papel do membro 1), membro 2 (papel)  
*(opcional) destacar caso o projeto tenha gerado desdobramentos reais (tcc, artigos e editais)*  
*[kanban](url) · [setup](url) · [problemas](url) · [tecnologia](url)*

---

## referências

leituras de base e recursos práticos de suporte.

- [livro 1 / autor / ano / por que vale a pena ler]
- [livro 2 / autor / ano / por que vale a pena ler]
- **design toolkit (ideo):** `https://www.designkit.org/` — referências de ideação centrada no humano.
- **toolkit de inovação (tcu):** ferramentas e dinâmicas colaborativas para projetos públicos e sociais.
- **exemplos de pitch de excelência:** [links de gravações de demonstrações que causam encantamento].

---

## habilidades

árvore de habilidades e conhecimento desenvolvida ao longo da disciplina. cada conceito aponta para o slide exato onde o fundamento é ensinado.

- **[perceptrons & mlp](slides-mlp.html#1)** (redes neurais multicamadas de alimentação direta)
  - **[forward pass](slides-mlp.html#forward)** — passo de inferência e propagação direta
  - **[backpropagation](slides-mlp.html#backprop)** — retropropagação do erro via regra da cadeia
  - **[loss function](slides-mlp.html#loss)** — função de perda / custo de calibração
- **[cnn (redes neurais convolucionais)](slides-cnn.html#1)**
  - **[convolução](slides-cnn.html#convolucao)** — operação de filtragem espacial deslizante
    - **[kernel](slides-cnn.html#kernel)** — núcleo / matriz de pesos do filtro
    - **[laplace](slides-cnn.html#laplace)** — operador de bordas omnidirecional
    - **[sobel](slides-cnn.html#sobel)** — gradientes direcionais horizontal e vertical
  - **[stride](slides-cnn.html#stride)** — passo de deslocamento do kernel
  - **[padding](slides-cnn.html#padding)** — preenchimento de bordas para preservação dimensional
  - **[pooling](slides-cnn.html#pooling)** — subamostragem e redução espacial
- **[autoencoders](slides-autoencoder.html#1)** (auto-codificadores)
  - **[encoder](slides-autoencoder.html#encoder)** — codificador de compressão
  - **[bottleneck](slides-autoencoder.html#bottleneck)** — gargalo / espaço latente comprimido
  - **[decoder](slides-autoencoder.html#decoder)** — decodificador de reconstrução
