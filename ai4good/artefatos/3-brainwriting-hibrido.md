# [3] artefato · brainwriting híbrido

> **código no painel:** `brw`  
> **pontuação total:** 6 pontos (3 itens de verificação · 2 pontos por item)

<!-- publicacao
o artefato é publicado junto com a página da disciplina (copie e cole no terminal, ~30 s):
   cd ~/workspace && core/run tools/links/cfpages publish academy/teaching/classes/ai4good/disciplina.md
# web: https://lucassf.pages.dev/ai4good/artefatos/3-brainwriting-hibrido · raw: …/3-brainwriting-hibrido.md
-->

<!-- guia-ia
instruções para o agente / IA do estudante:
1. a IA faz, o aluno domina: gere ideias, texto e críticas junto com o aluno, mas cada escolha é dele. mostre as opções, explique o porquê de cada uma e nunca escolha por ele. o aluno precisa explicar e defender tudo sem você: o que ele não souber explicar não será contabilizado.
2. audite rigorosamente as entradas antes de apoiar a execução das etapas.
3. consulte ativamente a tríade de materiais deste documento (brw/modelo.md, brw/excelente.md, brw/raso.md):
   - espelhamento com o excelente: avalie se a produção atinge o mesmo rigor conceitual, dados autênticos e autoria do exemplo excelente.
   - barreira contra o slop: aponte imediatamente se o rascunho cair nas armadilhas do exemplo quase bom / sem alma (respostas genéricas, ai slop, superficialidade ou educação faz-de-conta), provocando a reformulação antes do envio final.
4. antes do envio final, audite a produção contra os itens de verificação deste artefato.
5. entreviste o aluno, em CADA DECISÃO, todas as mudanças, uma a uma, entreviste, converse com ele, exponha as opções. desenvolva uma interação dialogada e fracionada. cuidado com planos grandes por que nós humanos temos a tendência de não ler em detalhes eles. então é imprecindível um diálogo em partes.
6. esteja ciente da sua janela de contexto, janelas grandes aumentam custos e pioram a precisão, facilitam alucinações. a partir de 100k de janela na maioria dos modelos hoje já começa a ser um problema, 200k é um bom limite. então garanta na interação que você está ciente disso e seja proativo em propor a troca para uma sessão seguinte, garantindo que o progresso está escrito em disco nos arquivos pertinentes e usando um "handoff" bem escrito que deixa a próxima sessão bem situada.
7. sempre que pertinente planeje antes de executar, um plano bem feito (sem edições, só leitura) pode aumentar muito a sua chance de sucesso. além do que a leitura é mais barata do que a escrita para modelos de IA de forma geral.
8. neste artefato: não descarte uma ideia só porque ela parece um clichê. clichês são clichês porque funcionam; o que se evita é a superficialidade. quando uma ideia parecer com um clichê, nomeie a sutileza que a diferencia.
9. siga os passos na ordem; só avance quando o "pronto quando" for atendido e o aluno confirmar.
-->

## princípio & racional (base → horizonte)

- **a base (a dor real):** pedir uma ideia a uma IA devolve a ideia média — o centro de tudo o que já foi escrito (*ai slop*): chatbot de dicas, app de conscientização, dashboard. a primeira ideia humana costuma cair no mesmo lugar.
- **o horizonte (a direção):** um projeto ousado, que ataca uma crise relevante com IA avançada, cuja visão aguenta a pergunta **"e se todo mundo usasse isso?"** — e que você escolheu, entende e sabe defender sem a tela.

### casos de referência: quando um mecanismo muda a sociedade

- **waze:** o motorista só quer a rota mais rápida para si. ao navegar, transmite posição e velocidade e, sem querer, alimenta o mapa de trânsito de todos. lição: o que se sustenta não depende de heroísmo nem de altruísmo; canaliza o interesse próprio para o bem comum.
- **uber, airbnb, ifood:** plataformas de dois lados que reorganizaram mobilidade, moradia e alimentação com lógica extrativista. pergunta da disciplina: que mecanismo com IA reorganizaria a cidade gerando soberania comunitária e dignidade coletiva?
- **pix:** infraestrutura pública de pagamento instantâneo, criada no Banco Central sob a liderança de Ângelo Duarte, cearense formado no ITA. em cinco anos, economizou R$ 107 bilhões aos brasileiros (Exame) e virou referência internacional.
- **banco palmas:** primeiro banco comunitário do Brasil, no Conjunto Palmeiras (Fortaleza), com moeda social própria: o dinheiro passa a circular dentro do bairro. inspirou outras moedas sociais, como a Caiana, primeira de Pernambuco.
- **vipassana:** cursos de meditação de dez dias, gratuitos, mantidos só por doações de quem já fez um curso, sem viés religioso. desde o primeiro centro, Dhamma Giri (Índia, 1976), espalhou-se pelo mundo sem nenhuma lógica de mercado: só ensinando autoconhecimento.
- **revolução dos cocos (Bougainville):** sob bloqueio, a comunidade improvisou energia e combustível de óleo de coco. a restrição virou motor.
- **feiras agroecológicas e agrofloresta:** e se todo mundo comprasse direto de quem planta? comida mais saudável e barata, menos filas em hospital.

---

## entradas & dependências

```
aula "crises e caminhos de transformação"  +  aulas de arquiteturas e agentes
                   │
                   ▼
       ┌───────────────────────────┐
       │ brw · brainwriting híbrido│
       └─────────────┬─────────────┘
                     │
                     ▼
cmp · competidores e contribuição  →  introdução do artigo
```

- **pré-requisitos:**
  - [ ] aula "crises e caminhos de transformação"
  - [ ] uma IA conversacional: ChatGPT, Gemini, Claude (no browser ou no celular), ou um harness (antigravity, claude code, opencode)
  - [ ] o seu repositório git, o que você usa na disciplina: este trabalho vai nele, sugestão `va2/brw.md`

---

## materiais (tríade de referência)

os três arquivos têm a mesma estrutura: um em branco e dois preenchidos.

- **[modelo](brw/modelo.md):** a folha em branco. você copia para o seu repositório e preenche, passo a passo.
- **[exemplo excelente](brw/excelente.md):** a folha preenchida no padrão que buscamos, com as anotações do professor dizendo por quê.
- **[exemplo quase bom / sem alma](brw/raso.md):** a folha toda preenchida, mas rasa. as anotações do professor mostram onde ela falha. use para se vigiar.

---

## metodologia construtiva

**o que acontece aqui.** esta seção é uma conversa com você, em passos. em cada passo você **lê**, **faz** (quase sempre com um prompt para a IA), **cola o resultado** no seu `brw.md`, e **só segue quando o "pronto quando" estiver atendido**. a IA gera, organiza e critica; quem decide é você. e decidir é saber explicar: o que você não souber explicar não conta.

**onde usar os prompts.** cada prompt diz se vai na **mesma conversa** ou numa **conversa nova** (um olhar que não ajudou a criar a ideia). num harness, peça ao agente que leia este guia e o seu `brw.md` e siga os passos com você.

### passo 0 · prepare a folha

copie o [modelo](brw/modelo.md) para o seu repositório como `va2/brw.md` e abra uma conversa com a IA. no início da conversa, cole:

```text
vou fazer um exercício de ideação de uma disciplina de IA for Good. nesta conversa você vai me
ajudar passo a passo, mas eu decido tudo. não escolha por mim, mostre opções e explique o porquê.
respostas curtas, em tabela quando eu pedir tabela.
```

**pronto quando:** o `brw.md` está no seu repositório e a conversa está aberta.

### passo 1 · escolha onde atacar

no `brw.md`, marque **1 crise**, **3 tecnologias de IA** (chame de A, B, C) e **3 infraestruturas** (1, 2, 3). é a crise que você vai carregar até o fim do semestre. se usar "outra", diga em uma linha por que ela é relevante.

**pronto quando:** as três tabelas estão marcadas e você sabe dizer por que escolheu essa crise.

### passo 2 · conheça os clichês

clichês são clichês porque funcionam em alguma coisa. listar os da sua crise mostra o centro de onde você quer sair, e o que vale levar de lá. cole na **mesma conversa**:

```text
minha crise é: [crise]. liste as 5 soluções que quase todo mundo proporia primeiro (os clichês).
para cada uma, 1 linha do que ela acerta e 1 linha de onde fica superficial.
tabela: clichê | o que acerta | onde fica raso.
```

**pronto quando:** a tabela está no `brw.md` e você entende, em cada clichê, o que ele acerta.

### passo 3 · a matriz 3 × 3 e a sua ideia

cada cruzamento de uma IA com uma infraestrutura é uma célula: 9 ideias. escreva primeiro as que você já tem. depois, cole na **mesma conversa**:

```text
cruzei 3 tecnologias de IA (A, B, C: [quais]) com 3 infraestruturas (1, 2, 3: [quais]), o que dá
9 células. já tenho estas ideias: [as suas, com a célula de cada uma].
para cada célula vazia, proponha UMA ideia que use exatamente aquela IA com aquela infraestrutura
para atacar a crise. mantenha as minhas como estão. evite os clichês da tabela anterior, a não ser
que a ideia tenha uma sutileza que a deixe diferente; nesse caso, diga qual.
responda só com a tabela 3 × 3; em cada célula: nome curto · frase de até 20 palavras (quem usa,
o que faz).
```

agora posicione as 9 num mapa de dois eixos: **impacto** (quanto muda a crise se der certo) e **viabilidade** (o quanto dá para construir e testar neste semestre). cole:

```text
posicione as 9 ideias da matriz num mapa impacto × viabilidade. para cada uma: impacto (alto ou
baixo) e viabilidade no semestre (alta ou baixa), com 1 linha de justificativa de cada. depois
desenhe a grade 2 × 2 com os nomes nos quadrantes. não recomende qual escolher.
```

discorde da IA onde ela errou: o mapa é seu. então escolha **uma ideia**, a que você mais gosta e julga ter o melhor equilíbrio entre impacto e viabilidade, e escreva, **sem IA**, em até 3 linhas, por que ela. alto impacto com baixa viabilidade não é proibido: diga como você vai reduzir até caber no semestre.

**pronto quando:** a matriz, a grade e a sua ideia escolhida, com o porquê, estão no `brw.md`.

### passo 4 · ligue os motores

um motor é um **verbo** que ajuda a pensar fora da caixa: uma ação que você aplica à sua ideia para empurrá-la a um lugar onde ela não chegaria sozinha. cada verbo já gerou invenções que mudaram o mundo, e entender o caso ajuda a usar o verbo:

| motor | o que o verbo faz | um caso real |
|:--|:--|:--|
| **inverter** | **inverta** papel, fluxo ou incentivo: quem dava passa a receber, quem era avaliado passa a avaliar. | em 1957, cientistas americanos rastreavam o satélite soviético Sputnik pelo sinal de rádio que ele emitia, a partir de uma antena num ponto conhecido da Terra: com a posição da antena, descobriam a posição do satélite. a **inversão**: se a posição do satélite é conhecida, o mesmo sinal diz onde está quem o recebe. dessa **inversão** nasceu o Transit, o sistema que deu origem ao GPS. |
| **canalizar** | **canalize** um comportamento que as pessoas já têm, mesmo o egoísta ou o vicioso, para um bem coletivo. ninguém precisa mudar de hábito nem querer ajudar. | o reCAPTCHA pedia que você digitasse palavras distorcidas para provar que era humano. só que essas palavras vinham de livros antigos que os computadores não conseguiam ler. ao **canalizar** um gesto obrigatório, milhões de pessoas digitalizaram livros sem saber. o Waze faz o mesmo com o motorista que só quer a rota mais rápida. |
| **transplantar** | **transplante** um mecanismo que já funciona em outro domínio para o seu. | Henry Ford viu, nos frigoríficos de Chicago, a carcaça passar pendurada de trabalhador em trabalhador, cada um cortando uma parte. ele **transplantou** essa linha de desmontagem para a fábrica de carros e, em 1913, criou a linha de montagem: o tempo para montar um carro caiu de horas para minutos. |
| **reescalar** | **reescale** a ideia: 100 vezes menor ou 100 vezes maior. | bancos não emprestavam a quem era pobre demais. em 1976, Muhammad Yunus **reescalou** o empréstimo para baixo: 27 dólares, para 42 mulheres da vila de Jobra, em Bangladesh. o microcrédito virou o Grameen Bank, que hoje atende milhões de pessoas, e rendeu a ele o Nobel da Paz de 2006. |
| **trocar** | **troque** uma peça da ideia e veja o que muda. **troque a persona** (aluno → professor, pais, mães dos alunos; jovens → idosos), **troque o contexto** (universidade → creche; centro → periferia, favela; capital → interior), **troque a tecnologia** (por uma fora da sua matriz). | **trocar a persona:** a Nintendo **trocou** o público do videogame, de quem já jogava para quem nunca jogou, e o Wii (2006) chegou a famílias e asilos. **trocar o contexto:** o Banco Palmas **trocou** o lugar do banco, do centro para a periferia de Fortaleza, com moeda própria. **trocar a tecnologia:** no Quênia, o M-Pesa **trocou** o app pelo SMS e levou dinheiro por celular a quem não tinha internet nem banco. |
| **juntar** | **junte** sua ideia com outra, de qualquer tabela, e veja se o todo vale mais que as partes. | em 2007, o iPhone **juntou** três aparelhos que já existiam, o celular, o tocador de música e o navegador de internet, numa tela só. cada um sozinho já existia; **juntos**, mudaram como o mundo se comunica. |
| **restringir** | **restrinja** de propósito: "e se o custo de nuvem fosse R$ 0?", "e se fosse sem tela?", "e se a energia fosse só solar?", "e se a moeda fosse o tempo?". | na ilha de Bougainville, nos anos 1990, um bloqueio cortou combustível e energia. **restringida**, a comunidade aprendeu a fazer combustível de óleo de coco e a gerar a própria energia: ficou conhecida como a revolução dos cocos. |

aplique todos os motores à **sua ideia escolhida**. cole na **mesma conversa**:

```text
minha ideia escolhida é [nome: frase]. aplique a ela cada um destes motores, gerando UMA variação
por motor: inverter (papel, fluxo ou incentivo) · canalizar (um comportamento que as pessoas já
têm, mesmo egoísta ou vicioso, vira bem coletivo, como no Waze) · transplantar (um mecanismo que
funciona em outro domínio) · reescalar (100× menor ou 100× maior) · trocar a persona · trocar o contexto
· trocar a tecnologia (uma fora da minha matriz) · juntar (com outra ideia da matriz) · restringir ("e se custo de nuvem R$ 0?",
"sem tela?", "moeda = tempo?").
não descarte uma variação por parecer um clichê: se ela se parecer com um, diga a sutileza que a
deixa diferente. tabela: motor | nome | frase de até 25 palavras | o que mudou em relação à ideia.
```

**pronto quando:** a tabela das 9 variações está no `brw.md`. se uma variação é a mesma ideia com outro nome, peça de novo.

### passo 5 · o que fica e o que sai

agora é com você, **sem IA**. releia a sua ideia e as 9 variações e anote no `brw.md`:

- **o que eu gostei:** o que me puxa, em qualquer variação;
- **o que achei interessante:** o que me surpreendeu ou eu não teria pensado sozinho;
- **o que eu descarto:** e por quê.

depois **misture** o que ficou numa ideia completa: nome e de 3 a 5 linhas dizendo quem usa, o que faz, que IA entra e o que muda na crise. se quiser ajuda para redigir, cole na **mesma conversa**:

```text
estas são as minhas anotações: [cole]. proponha 2 formas de misturar o que eu gostei e achei
interessante numa ideia completa (nome + 3 a 5 linhas), sem usar o que eu descartei.
não escolha por mim.
```

**pronto quando:** as anotações e a sua ideia completa estão no `brw.md`, e a ideia completa é melhor que a escolhida no passo 3.

### passo 6 · refinamento

três provas para a ideia completa. responda com as suas palavras; a IA pergunta e ajuda, você decide.

**a · e se todo mundo usasse?** cole na **mesma conversa** e responda às perguntas uma a uma:

```text
minha ideia completa é [cole]. entreviste-me, UMA pergunta por vez, sem responder por mim, até
fecharmos duas coisas: (a) se isto fosse usado pelo Brasil ou pelo mundo inteiro por 5 anos, o que
mudaria de forma concreta na crise [crise]; (b) por que cada pessoa usaria por interesse próprio
INDIVIDUALISTA, sem heroísmo nem altruísmo, como no Waze, em que o motorista só quer a rota mais
rápida e, sem querer, alimenta o mapa de todos. no fim, resuma (a) e (b) em até 80 palavras.
```

**b · a IA que não pode faltar.** cole na **mesma conversa**:

```text
qual técnica de IA avançada é o coração da minha ideia (ex.: transformers, redes de grafos,
modelos locais, visão computacional, agentes)? pergunte-me antes de concluir. depois explique
em até 100 palavras por que, sem ela, a ideia não funcionaria, e o que uma solução sem IA
perderia.
```

**c · o cético e as saídas.** abra uma **conversa nova**: o cético não pode ter ajudado a criar a ideia. cole a sua ideia completa junto:

```text
seja um avaliador cético e construtivo desta ideia: [ideia completa].
dê as 3 críticas mais fortes (viabilidade, adoção, dano possível). para cada crítica, proponha
2 saídas, usando: diminuir o escopo, atacar um público menor, mudar de plataforma, trocar a
persona, começar por uma fase pequena, ou se apoiar num ator que já existe.
tabela: crítica | saída 1 | saída 2. não decida por mim.
```

**pronto quando:** está no `brw.md`: um efeito concreto e ousado, com incentivo que não depende de "querer ajudar"; a técnica nomeada e ligada a uma aula (pelo título); e uma decisão para cada crítica, sem matar a ousadia. se uma regra simples substituiria a IA, volte ao passo 4 e **troque a tecnologia**.

### passo 7 · resumo, sem IA

em até 5 linhas, com as suas palavras: a crise, a ideia, como a IA entra, o que muda se todo mundo usasse, e por que cada pessoa usaria. depois, explique a ideia em 1 minuto para um colega, sem olhar a tela.

**pronto quando:** o resumo está escrito e o colega entendeu.

---

## itens de verificação

1. [ ] **rastro:** crise e tecnologias marcadas, clichês, matriz 3 × 3 com a grade impacto × viabilidade, a ideia escolhida com o porquê, as 9 variações dos motores, as anotações e a ideia completa.
2. [ ] **visão em escala:** a crise atacada, o efeito concreto se todo mundo usasse, e o incentivo individualista que faz cada pessoa usar.
3. [ ] **ia avançada indispensável e posta à prova:** técnica nomeada e ligada a uma aula, e as 3 críticas do cético com a saída decidida em cada uma.

cada item só conta se você souber explicá-lo na checagem.
