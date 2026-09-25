<!-- a página pública da disciplina (lucassf.pages.dev/ai4good): regras, cronograma, painel e habilidades. -->
![banner ai4good](https://images.unsplash.com/photo-1674027444485-cec3da58eef4?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb)

# tópicos avançados em IA · ai4good

> prof. lucas silva figueiredo  
> ufrpe · departamento de computação (dc)  
> 2026.2 · quartas às 20h10 e sextas às 18h30 · sala 37

<!-- publicacao
para o professor (ou o agente dele): marcar itens em painel:dados-va1 ('v' feito, '-' pendente),
depois um comando só (copie e cole no terminal, ~30 s):
   cd ~/workspace && core/run tools/links/cfpages publish academy/teaching/classes/ai4good/disciplina.md
# web: https://lucassf.pages.dev/ai4good · raw: https://lucassf.pages.dev/ai4good/disciplina.md
-->

<!-- guia-ia
para o agente que apoia um aluno desta disciplina:
1. esta página é a fonte da disciplina: canais, regras, cronograma, painel e habilidades. cada artefato mora em
   artefatos/<n>-<nome>.md, com n = nº de itens de verificação; ·c é o código (repositório git), ·r é o relatório (latex).
2. a IA faz, o aluno domina: escreva código e texto junto com o aluno, mas cada escolha é dele. mostre as alternativas,
   explique o porquê, e pare quando ele não souber explicar o que foi feito: ele precisa explicar e defender tudo sem
   você (os enigmas são resolvidos sem IA).
3. no painel, ◻ é item ainda não verificado. ajude o aluno a ver o que falta no artefato da vez e o que vem a seguir no cronograma.
4. dúvida sobre regra ou prazo: mande o aluno falar com o professor; não invente combinados.
-->

## comunicação

- [`telegram`](https://t.me/+mW8Smp8VbBlkNjkx) · avisos e dúvidas da turma
- [`google meet`](https://meet.google.com/zxu-ffar-qrj) · sala para acompanhamento remoto
<!-- incluir esse questionário nos slides de abertura - [`questionário`](https://lucassf.pages.dev/ai4good/setup) · cadastro instrumental e nivelamento -->

---

## visão

**base** · o consumo ingênuo de IA como caixa-preta gera soluções frágeis, dependência de APIs e respostas superficiais (*ai slop*), sem compreensão do erro, dos riscos de automação, e dos papeis ambiental, social, econômico e político de como a ferramenta está inserida no nosso contexto.

**horizonte** · autonomia técnica de ponta a ponta — do gradiente descendente a *transformers* e modelos locais (*small language models* / SLMs) — com abordagem científica visando impacto social. potencializar o uso benéfico da IA, explorar sinergias entre humanos e agentes inteligentes, confeccionar projetos que vislumbram subverter a lógica inerente às crises relacionadas à IA.

---

## regras

- cada verificação de aprendizagem (va) é feita de 50 itens de verificação (caixas)
- cada item consta como ◼ feito ou ◻ não feito, e cada ◼ vale 2 pontos: 50 itens = 100 pts = nota 10,0
- os itens vêm de artefatos, enigmas e seminários; cada um lista seus itens na própria definição
- artefatos podem ser repositórios git, relatórios em latex, decks de slides, dentre outros
- enigmas são desafios teóricos em sala, um por tópico: certo ou errado, 1 ◻ cada, com consulta e sem IA
- enigma errado pode ser refeito (em versão modificada) em qualquer aula seguinte
- seminários são falas em sala, avaliadas pelo professor ou por uma banca
- use IA, porém lembre de conduzir as escolhas e revisar, o que não souber explicar não será contabilizado
- o professor verifica os itens um a um, nas aulas de checagem
- atrasou? combine uma checagem com o professor: o item é verificado depois e vale o mesmo
- o painel é público, os itens são dados de antemão, ninguém está atrás, basta entregar
- dialogue com o professor sempre que precisar

---

## cronograma

| data | descrição | materiais |
|:---:|:---|:------|
| · 01 ·<br>**12/08**<br>[ qua ] | teoria<br>**acordos e enigma teste** | [`[1] slides · abertura`](https://lucassf.pages.dev/ai4good/abertura) |
| · 02 ·<br>**14/08**<br>[ sex ] | prática<br>**configuração base para a disciplina** | [`[3] artefato · git repo`](artefatos/3-base-git-repo.md)<br>[`[4] artefato · latex project`](artefatos/4-latex-project.md) |
| · 03 ·<br>**19/08**<br>[ qua ] | teoria<br>**base para redes neurais profundas** | [`[1] slides · história`](https://lucassf.pages.dev/ai4good/historia)<br>[`[1] slides · regressão linear`](https://lucassf.pages.dev/ai4good/regressao-linear)<br>[`[1] slides · perceptron`](https://lucassf.pages.dev/ai4good/perceptron-multicamadas) |
| · 04 ·<br>**21/08**<br>[ sex ] | prática<br>**rede neural profunda interativa** | [`[5] artefato · mlp git repo`](artefatos/5-mlp-git-repo.md)<br>[`[5] artefato · mlp tech report`](artefatos/5-mlp-tech-report.md) |
| · 05 ·<br>**26/08**<br>[ qua ] | mentoria<br>**mlp interativa** | |
| · 06 ·<br>**28/08**<br>[ sex ] | checagem<br>**mlp interativa** | |
| · 07 ·<br>**02/09**<br>[ qua ] | teoria<br>**arquiteturas de deep learning (1/4)** | [`[1] slides · autocodificadores`](https://lucassf.pages.dev/ai4good/autocodificadores)<br>[`[1] slides · redes convolucionais`](https://lucassf.pages.dev/ai4good/redes-convolucionais)<br>[`[1] slides · redes de grafos`](https://lucassf.pages.dev/ai4good/redes-de-grafos) |
| · 08 ·<br>**04/09**<br>[ sex ] | teoria<br>**arquiteturas de deep learning (2/4)** | [`[1] slides · redes recorrentes`](https://lucassf.pages.dev/ai4good/redes-recorrentes)<br>[`[1] slides · memória curta e longa`](https://lucassf.pages.dev/ai4good/memoria-longa-de-curto-prazo) |
| · 09 ·<br>**09/09**<br>[ qua ] | teoria<br>**arquiteturas de deep learning (3/4)** | [`[1] slides · redes adversariais`](https://lucassf.pages.dev/ai4good/redes-adversariais)<br>[`[1] slides · redes professor-aluno`](https://lucassf.pages.dev/ai4good/professor-aluno) |
| · 10 ·<br>**11/09**<br>[ sex ] | prática<br>**modificando uma arquitetura** | [`[5] artefato · arquitetura git repo`](artefatos/5-arquitetura-git-repo.md)<br>[`[5] artefato · arquitetura tech report`](artefatos/5-arquitetura-tech-report.md) |
| · 11 ·<br>**16/09**<br>[ qua ] | teoria<br>**arquiteturas de deep learning (4/4)** | [`[1] slides · transformers`](https://lucassf.pages.dev/ai4good/transformers)<br>[`[0] slides · modelos de linguagem`](https://lucassf.pages.dev/ai4good/modelos-de-linguagem) |
| · 12 ·<br>**18/09**<br>[ sex ] | mentoria<br>**modificando uma arquitetura** | |
| · 13 ·<br>**23/09**<br>[ qua ] | teoria<br>**superinteligência e singularidade** | [`[1] slides · agência`](https://lucassf.pages.dev/ai4good/agencia)<br>[`[1] slides · autoaprimoramento`](https://lucassf.pages.dev/ai4good/autoaprimoramento)<br>[`[0] slides · autopreservação`](https://lucassf.pages.dev/ai4good/autopreservacao) |
| · 14 ·<br>**25/09**<br>[ sex ] | prática<br>**multiagentes distopia x utopia** | [`[5] artefato · arena git repo`](artefatos/5-arena-git-repo.md)<br>[`[5] artefato · arena tech report`](artefatos/5-arena-tech-report.md) |
| · 15 ·<br>**30/09**<br>[ qua ] | teoria<br>**crises e caminhos de transformação** | [`[1] slides · crises`](https://lucassf.pages.dev/ai4good/crises) |
| · 16 ·<br>**02/10**<br>[ sex ] | prática<br>**brainwriting híbrido** | `[x] artefato · tbd` |
| · 17 ·<br>**07/10**<br>[ qua ] | prática<br>**competidores e contribuição** | `[x] artefato · tbd` |
| · 18 ·<br>**09/10**<br>[ sex ] | mentoria<br>**refinamento da contribuição** | |
| · 19 ·<br>**14/10**<br>[ qua ] | prática<br>**tecnologia base funcional** | `[x] artefato · tbd` |
| · 20 ·<br>**16/10**<br>[ sex ] | mentoria<br>**definição da contribuição** | |
| · 21 ·<br>**21/10**<br>[ qua ] | prática<br>**fluxograma e arquitetura** | `[x] artefato · tbd` |
| · 22 ·<br>**23/10**<br>[ sex ] | prática<br>**desenho dos experimentos** | `[x] artefato · tbd` |
| · -- ·<br>**28/10**<br>[ qua ] | feriado<br>**dia do servidor público federal** | |
| · 23 ·<br>**30/10**<br>[ sex ] | checagem<br>**verificação geral, ponto a ponto** | |
| · 24 ·<br>**04/11**<br>[ qua ] | seminário<br>**iteração 1, preliminares** | `[x] seminário · tbd` |
| · 25 ·<br>**06/11**<br>[ sex ] | mentoria<br>**código e artigo** | |
| · 26 ·<br>**11/11**<br>[ qua ] | seminário<br>**iteração 2, evolução** | `[x] seminário · tbd` |
| · 27 ·<br>**13/11**<br>[ sex ] | mentoria<br>**código e artigo** | |
| · 28 ·<br>**18/11**<br>[ qua ] | checagem<br>**revisão cética, crítica e construtiva** | |
| · -- ·<br>**20/11**<br>[ sex ] | feriado<br>**dia nacional da consciência negra** | |
| · 29 ·<br>**25/11**<br>[ qua ] | seminário<br>**iteração 3, demonstração** | `[x] seminário · tbd` |
| · 30 ·<br>**27/11**<br>[ sex ] | mentoria<br>**acompanhamento final e polimento** | |
| · 31 ·<br>**02/12**<br>[ qua ] | seminário<br>**pitch para banca externa** | `[x] seminário · tbd` |
| · 32 ·<br>**04/12**<br>[ sex ] | checagem<br>**va2 · artigo e demo** | `[x] artefato · tbd`<br>`[x] artefato · tbd` |
| · 33 ·<br>**09/12**<br>[ qua ] | checagem<br>**va3 · avaliação escrita** | |
| · 34 ·<br>**11/12**<br>[ sex ] | checagem<br>**va4 · exame final institucional** | |

> **teoria:** aula expositiva focada na aprendizagem de habilidades técnicas por seus componentes teóricos  
> **prática:** aula com acesso à infraestrutura para produção de artefatos  
> **mentoria:** aula de acompanhamento e auxílio sobre o desenvolvimento de uma determinada prática  
> **seminário:** aula em que os alunos apresentam de forma didática e direta os seus resultados  
> **checagem:** aulas avaliativas em que cada item de verificação é analisado e pontuado

---

## painel

acompanhamento transparente dos itens de verificação (2 pontos por ◻). lista estritamente alfabética.

<!-- painel:dados-va1
albérico: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvvv, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
andreza: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvvv, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
artur: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvvv, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
carlos: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvv-, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
cauã: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvvv, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
davi: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvvv, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
edson: git=---, tex=----, mlp·c=-----, mlp·p=-----, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
gian: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvvv, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
rayane: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvvv, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
thiago b.: git=vvv, tex=vvv-, mlp·c=vvvvv, mlp·p=vvvvv, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
thiago m.: git=---, tex=----, mlp·c=-----, mlp·p=-----, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
vinicius: git=---, tex=----, mlp·c=-----, mlp·p=-----, arq·c=-----, arq·p=-----, arn·c=-----, arn·p=-----, enigmas=--------------
-->
<!-- painel-va1:start -->
```text
            git tex  mlp·c mlp·p arq·c arq·p arn·c arn·p enigmas        nota 1
 albérico   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
  andreza   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
    artur   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
   carlos   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 30 pts
     cauã   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
     davi   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
    edson   ◻◻◻ ◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
     gian   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
   rayane   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
thiago b.   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 32 pts
thiago m.   ◻◻◻ ◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
 vinicius   ◻◻◻ ◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
```
<!-- painel-va1:end -->

> **git:** base git repo · **tex:** latex project · **mlp·c:** mlp git repo · **mlp·p:** mlp tech report · **arq·c:** arquitetura git repo · **arq·p:** arquitetura tech report · **arn·c:** arena git repo · **arn·p:** arena tech report · **enigmas:** 14 investigações em sala

<!-- painel:dados-va2
albérico: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
andreza: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
artur: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
carlos: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
cauã: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
davi: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
edson: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
gian: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
rayane: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
thiago b.: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
thiago m.: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
vinicius: brw=---, cmp=---, tec=---, arq=---, exp=---, sem1=----, sem2=----, sem3=----, artigo=------, demo=----, pitch=------------
-->
<!-- painel-va2:start -->
```text
            brw cmp tec arq exp sem1 sem2 sem3 artigo demo pitch        nota 2
 albérico   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
  andreza   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
    artur   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
   carlos   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
     cauã   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
     davi   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
    edson   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
     gian   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
   rayane   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
thiago b.   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
thiago m.   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
 vinicius   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ 00 pts
```
<!-- painel-va2:end -->

> **brw:** brainwriting híbrido · **cmp:** competidores e contribuição · **tec:** tecnologia base demonstrável · **arq:** fluxograma e arquitetura · **exp:** desenho dos experimentos · **sem:** seminários de pesquisa · **artigo** técnico final · **demo:** demonstração funcional · **pitch** (apresentação para a banca)

---

## entregue

repositórios e artigos científicos validados na turma 2026.2.

- **albérico** | -
- **andreza** | [`tex`](https://www.overleaf.com/project/6aa1ec39536264564433ddd5)
- **artur** | [`git`](https://github.com/Guimaaaas/ai-workspace) · [`tex`](https://www.overleaf.com/project/6a920b9163f9ff8ef6829b60) · [`slides`](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **carlos** | [`git`](https://github.com/Carlos-Eduardo-Ribeiro/projeto-taia.git) · [`slides`](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **cauã** | [`git`](https://github.com/lira-labs/workspace) · [`tex`](https://www.overleaf.com/project/6a920bb3130d092cbf505259) · [`slides`](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **davi** | [`git`](https://github.com/DaviPac/topicos-avancados-ia) · [`tex`](https://www.overleaf.com/project/6a920b9163f9ff8ef6829b60)
- **edson** | -
- **gian** | [`git`](https://github.com/gian881/pure-mlp-scratch) · [`tex`](https://www.overleaf.com/project/6a920bab130d092cbf504fca) · [`slides`](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **rayane** | [`git`](https://github.com/rayfrance/ai4good) · [`tex`](https://www.overleaf.com/project/6a920a859c5f584768569a70) · [`slides`](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **thiago brito** | [`git`](https://github.com/Thiago-Brito/AI4good) · [`tex`](https://www.overleaf.com/project/6a920ba2c3f0c914aa7c7185) · [`slides`](https://docs.google.com/presentation/d/1p3rhulc-_ZZxOOpETi8CJyiAJqA0VeiBLAg924iLD5c/edit)
- **thiago matheus** | -
- **vinicius** | -

---

## referências

- [**ai for good specialization**](https://www.coursera.org/specializations/ai-for-good) — estudos de caso em saúde, clima e inclusão.
- [**playlist deeplearning.ai**](https://www.youtube.com/playlist?list=PLkDaE6sCZn6HJ1XrZLpKeWQN5XMKhEz_V) — aulas expositivas complementares.
- [**stanford cs229**](https://cs229.stanford.edu/) — notas teóricas fundamentais sobre aprendizado de máquina, gradiente descendente e retropropagação.
- [**doshi & hauser (science advances, 2024)**](https://www.science.org/doi/10.1126/sciadv.adn5290) — evidência empírica sobre os impactos de geradores na novidade e diversidade coletiva de histórias criadas.

---

## habilidades

árvore conceitual da disciplina.

- **fundamentos & otimização:** gradiente descendente, taxa de aprendizado e cálculo de erro
- **redes multicamadas (mlp):** propagação direta (*forward*), retropropagação (*backpropagation*) e dinâmica de pesos
- **representações profundas:** convoluções (cnn), auto-codificadores (ae), redes recorrentes (rnn/lstm) e grafos (gnn)
- **transformadores:** auto-atenção (*self-attention*), mecanismo qkv, modelos pré-treinados e rag
- **alinhamento e sociedade:** autopreservação, autoaprimoramento, agência e arena dialética de agentes
