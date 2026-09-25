<!-- a página pública da disciplina (lucassf.pages.dev/ai4good): regras, cronograma, painel e habilidades. -->
![banner ai4good](https://images.unsplash.com/photo-1674027444485-cec3da58eef4?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb)

# tópicos avançados em IA · ai4good

> prof. lucas silva figueiredo  
> ufrpe · departamento de computação (dc)  
> 2026.2 · quartas às 20h10 e sextas às 18h30 · sala 37

<!-- publicacao
para o professor (ou o agente dele): marcar itens em painel:dados-va1 ('v' feito, '-' pendente);
se cronograma, ementa ou slides foram alterados, conferir se academy/teaching/classes/ai4good/arvore.yaml
precisa de novos nós ou ajuste de links. depois um comando só (redesenha painel + árvore e publica, ~30 s):
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
5. manutenção da árvore: ao atualizar cronograma, ementa ou adicionar slides, verifique se arvore.yaml precisa de novos conceitos ou links antes de rodar cfpages publish.
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
|:---:|:---|:---|
| · 01 ·<br>12/08<br>· qua · | teoria<br>**acordos e enigma teste** | [`[1] slides · abertura`](https://lucassf.pages.dev/ai4good/abertura) |
| · 02 ·<br>14/08<br>· sex · | prática<br>**configuração base para a disciplina** | [`[3] artefato · git repo`](artefatos/3-base-git-repo.md)<br>[`[4] artefato · latex project`](artefatos/4-latex-project.md) |
| · 03 ·<br>19/08<br>· qua · | teoria<br>**base para redes neurais profundas** | [`[1] slides · história`](https://lucassf.pages.dev/ai4good/historia)<br>[`[1] slides · regressão linear`](https://lucassf.pages.dev/ai4good/regressao-linear)<br>[`[1] slides · perceptron`](https://lucassf.pages.dev/ai4good/perceptron-multicamadas) |
| · 04 ·<br>21/08<br>· sex · | prática<br>**rede neural profunda interativa** | [`[5] artefato · mlp git repo`](artefatos/5-mlp-git-repo.md)<br>[`[5] artefato · mlp tech report`](artefatos/5-mlp-tech-report.md) |
| · 05 ·<br>26/08<br>· qua · | mentoria<br>**mlp interativa** | |
| · 06 ·<br>28/08<br>· sex · | checagem<br>**mlp interativa** | |
| · 07 ·<br>02/09<br>· qua · | teoria<br>**arquiteturas de deep learning (1/4)** | [`[1] slides · autocodificadores`](https://lucassf.pages.dev/ai4good/autocodificadores)<br>[`[1] slides · redes convolucionais`](https://lucassf.pages.dev/ai4good/redes-convolucionais)<br>[`[1] slides · redes de grafos`](https://lucassf.pages.dev/ai4good/redes-de-grafos) |
| · 08 ·<br>04/09<br>· sex · | teoria<br>**arquiteturas de deep learning (2/4)** | [`[1] slides · redes recorrentes`](https://lucassf.pages.dev/ai4good/redes-recorrentes)<br>[`[1] slides · memória curta e longa`](https://lucassf.pages.dev/ai4good/memoria-longa-de-curto-prazo) |
| · 09 ·<br>09/09<br>· qua · | teoria<br>**arquiteturas de deep learning (3/4)** | [`[1] slides · redes adversariais`](https://lucassf.pages.dev/ai4good/redes-adversariais)<br>[`[1] slides · redes professor-aluno`](https://lucassf.pages.dev/ai4good/professor-aluno) |
| · 10 ·<br>11/09<br>· sex · | prática<br>**modificando uma arquitetura** | [`[5] artefato · arquitetura git repo`](artefatos/5-arquitetura-git-repo.md)<br>[`[5] artefato · arquitetura tech report`](artefatos/5-arquitetura-tech-report.md) |
| · 11 ·<br>16/09<br>· qua · | teoria<br>**arquiteturas de deep learning (4/4)** | [`[1] slides · transformers`](https://lucassf.pages.dev/ai4good/transformers)<br>[`[0] slides · modelos de linguagem`](https://lucassf.pages.dev/ai4good/modelos-de-linguagem) |
| · 12 ·<br>18/09<br>· sex · | mentoria<br>**modificando uma arquitetura** | |
| · 13 ·<br>23/09<br>· qua · | teoria<br>**superinteligência e singularidade** | [`[0] slides · agência`](https://lucassf.pages.dev/ai4good/agencia)<br>[`[1] slides · autoaprimoramento`](https://lucassf.pages.dev/ai4good/autoaprimoramento)<br>[`[1] slides · autopreservação`](https://lucassf.pages.dev/ai4good/autopreservacao) |
| · 14 ·<br>25/09<br>· sex · | prática<br>**multiagentes distopia x utopia** | [`[5] artefato · arena git repo`](artefatos/5-arena-git-repo.md)<br>[`[5] artefato · arena tech report`](artefatos/5-arena-tech-report.md) |
| · 15 ·<br>30/09<br>· qua · | teoria<br>**crises e caminhos de transformação** | [`[1] slides · crises`](https://lucassf.pages.dev/ai4good/crises) |
| · 16 ·<br>02/10<br>· sex · | prática<br>**brainwriting híbrido** | `[x] artefato · tbd` |
| · 17 ·<br>07/10<br>· qua · | prática<br>**competidores e contribuição** | `[x] artefato · tbd` |
| · 18 ·<br>09/10<br>· sex · | mentoria<br>**refinamento da contribuição** | |
| · 19 ·<br>14/10<br>· qua · | prática<br>**tecnologia base funcional** | `[x] artefato · tbd` |
| · 20 ·<br>16/10<br>· sex · | mentoria<br>**definição da contribuição** | |
| · 21 ·<br>21/10<br>· qua · | prática<br>**fluxograma e arquitetura** | `[x] artefato · tbd` |
| · 22 ·<br>23/10<br>· sex · | prática<br>**desenho dos experimentos** | `[x] artefato · tbd` |
| · -- ·<br>28/10<br>· qua · | feriado<br>**dia do servidor público federal** | |
| · 23 ·<br>30/10<br>· sex · | checagem<br>**verificação geral, ponto a ponto** | |
| · 24 ·<br>04/11<br>· qua · | seminário<br>**iteração 1, preliminares** | `[x] seminário · tbd` |
| · 25 ·<br>06/11<br>· sex · | mentoria<br>**código e artigo** | |
| · 26 ·<br>11/11<br>· qua · | seminário<br>**iteração 2, evolução** | `[x] seminário · tbd` |
| · 27 ·<br>13/11<br>· sex · | mentoria<br>**código e artigo** | |
| · 28 ·<br>18/11<br>· qua · | checagem<br>**revisão cética, crítica e construtiva** | |
| · -- ·<br>20/11<br>· sex · | feriado<br>**dia nacional da consciência negra** | |
| · 29 ·<br>25/11<br>· qua · | seminário<br>**iteração 3, demonstração** | `[x] seminário · tbd` |
| · 30 ·<br>27/11<br>· sex · | mentoria<br>**acompanhamento final e polimento** | |
| · 31 ·<br>02/12<br>· qua · | seminário<br>**pitch para banca externa** | `[x] seminário · tbd` |
| · 32 ·<br>04/12<br>· sex · | checagem<br>**va2 · artigo e demo** | `[x] artefato · tbd`<br>`[x] artefato · tbd` |
| · 33 ·<br>09/12<br>· qua · | checagem<br>**va3 · avaliação escrita** | |
| · 34 ·<br>11/12<br>· sex · | checagem<br>**va4 · exame final institucional** | |

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
            git tex  mlp·c mlp·p arq·c arq·p arn·c arn·p enigmas         nota 1
 albérico   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
  andreza   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
    artur   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
   carlos   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  30 pts
     cauã   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
     davi   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
    edson   ◻◻◻ ◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
     gian   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
   rayane   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
thiago b.   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
thiago m.   ◻◻◻ ◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
 vinicius   ◻◻◻ ◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
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
            brw cmp tec arq exp sem1 sem2 sem3 artigo demo pitch         nota 2
 albérico   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
  andreza   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
    artur   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
   carlos   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
     cauã   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
     davi   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
    edson   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
     gian   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
   rayane   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
thiago b.   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
thiago m.   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
 vinicius   ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻  00 pts
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

árvore de habilidades e conhecimento desenvolvida ao longo da disciplina. cada conceito aponta para o slide exato onde o fundamento é ensinado.

<!-- habilidades:start -->
- **[ia simbólica (gofai)](https://docs.google.com/presentation/d/1MnhRGXDw31GqStyQ-FrsTDMTvfNNCk1w_GhnOKZInhA/present#slide=5)**
  - **[busca em grafo de estados](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=24)**
    - **[problema das 8 rainhas](https://docs.google.com/presentation/d/1MnhRGXDw31GqStyQ-FrsTDMTvfNNCk1w_GhnOKZInhA/present#slide=16)**
    - **[algoritmo a* (a-star)](https://docs.google.com/presentation/d/1MnhRGXDw31GqStyQ-FrsTDMTvfNNCk1w_GhnOKZInhA/present#slide=9)**
      - **[heurística admissível](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=14)**
    - **[buscas competitivas](https://docs.google.com/presentation/d/1ZwKk0oeow4-fI4jTbrQjbEfmtCgRByUh7RivOR9eUbA/present#slide=11)**
      - **[algoritmo minimax](https://docs.google.com/presentation/d/1MnhRGXDw31GqStyQ-FrsTDMTvfNNCk1w_GhnOKZInhA/present#slide=17)**
      - **[jogos de soma zero](https://docs.google.com/presentation/d/1MnhRGXDw31GqStyQ-FrsTDMTvfNNCk1w_GhnOKZInhA/present#slide=17)**
- **[aprendizado supervisionado](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=4)**
  - **[regressão linear](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=1)**
    - **[hipótese linear](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=62)**
    - **[coeficientes / parâmetros (theta_0 e theta_1)](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present)**
    - **[linha de tendência](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=11)**
    - **[função de custo (j(theta))](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=19)**
      - **[erro quadrático médio (mse)](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=67)**
      - **[fator 1/(2m)](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=67)**
    - **[superfície de perda / mínimo global](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=72)**
    - **[gradiente descendente (gradient descent)](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=73)**
      - **[derivada parcial](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=80)**
      - **[taxa de aprendizagem (alpha / learning rate)](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=43)**
        - **[subamortecimento vs. divergência de taxa](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=86)**
- **[neurônio artificial](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=51)**
  - **[pesos sinápticos (weights - w)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=4)**
  - **[termo de polarização (bias - b)](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=13)**
  - **[combinação linear](https://docs.google.com/presentation/d/1XmA8_9dIaCdky66leSKl2UbE9N83fbZxINQADmlFKa8/present#slide=67)**
  - **[função de ativação](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=51)**
    - **[função degrau (step function)](https://docs.google.com/presentation/d/1o7MWYdm74XMNbwWRD7OWXsayB0UQLBTbrcshAkom3cM/present#slide=50)**
    - **[função sigmoide (logística)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=137)**
    - **[função relu (rectified linear unit)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=12)**
    - **[função softmax](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=58)**
- **[perceptron multicamadas (mlp)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=1)**
  - **[camadas ocultas (hidden layers)](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=21)**
  - **[propagação direta (forward pass)](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present#slide=103)**
  - **[retropropagação do erro (backpropagation)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=88)**
    - **[regra da cadeia (chain rule)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present)**
  - **[dinâmica de pesos](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present#slide=58)**
  - **[épocas de treinamento (epochs)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=37)**
  - **[lote de treinamento (batch size)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=48)**
  - **[sobreajuste (overfitting)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=32)**
  - **[subajuste (underfitting)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present)**
  - **[normalização e padronização](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present#slide=96)**
  - **[valores discrepantes (outliers)](https://docs.google.com/presentation/d/1TRjPEFhnQy_j5W5P__X1m_LLPgTi1sHd0f4_3nDc2d8/present#slide=7)**
- **[rede neural convolucional (cnn)](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=169)**
  - **[operação de convolução](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=26)**
    - **[kernel / filtro](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=26)**
      - **[filtro de sobel](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present)**
      - **[filtro laplaciano](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present)**
    - **[passo de deslocamento (stride)](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present#slide=24)**
    - **[preenchimento (padding)](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present)**
  - **[redução espacial / pooling](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=22)**
    - **[max-pooling](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present#slide=22)**
  - **[invariância por translação](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present)**
  - **[mapas de características (feature maps)](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present)**
- **[autocodificador (autoencoder)](https://docs.google.com/presentation/d/1GZ2W2YAFJkd5Z5uJM8kjuQzZK8SsEPnzO2NWbk1Ji5w/present#slide=15)**
  - **[codificador (encoder)](https://docs.google.com/presentation/d/1GZ2W2YAFJkd5Z5uJM8kjuQzZK8SsEPnzO2NWbk1Ji5w/present#slide=102)**
  - **[gargalo (bottleneck) / espaço latente](https://docs.google.com/presentation/d/1GZ2W2YAFJkd5Z5uJM8kjuQzZK8SsEPnzO2NWbk1Ji5w/present#slide=19)**
  - **[decodificador (decoder)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=16)**
  - **[perda de reconstrução](https://docs.google.com/presentation/d/1GZ2W2YAFJkd5Z5uJM8kjuQzZK8SsEPnzO2NWbk1Ji5w/present#slide=35)**
  - **[autocodificador variacional (vae)](https://docs.google.com/presentation/d/1GZ2W2YAFJkd5Z5uJM8kjuQzZK8SsEPnzO2NWbk1Ji5w/present#slide=3)**
  - **[anonimização & privacidade profunda](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=49)**
- **[rede neural em grafo (gnn)](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=1)**
  - **[topologia de grafo (nós e arestas)](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=6)**
  - **[matriz de adjacência](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=8)**
  - **[passagem de mensagens (message passing)](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present)**
  - **[conectoma & grafos biomédicos](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=112)**
- **[rede neural recorrente (rnn)](https://docs.google.com/presentation/d/1j8sGfqZkzol-nxFKWDsRLdfjKlYI6wM7K5h3Tw06Pbk/present#slide=36)**
  - **[vetor de estado oculto (hidden state)](https://docs.google.com/presentation/d/1j8sGfqZkzol-nxFKWDsRLdfjKlYI6wM7K5h3Tw06Pbk/present)**
  - **[gradiente evanescente (vanishing gradient)](https://docs.google.com/presentation/d/1j8sGfqZkzol-nxFKWDsRLdfjKlYI6wM7K5h3Tw06Pbk/present)**
  - **[memória longa de curto prazo (lstm)](https://docs.google.com/presentation/d/1HvBcciJFbiDK_wemiHYWhdKgnP7d8FCTp0h88yfNn7k/present#slide=36)**
    - **[estado de célula (cell state)](https://docs.google.com/presentation/d/1HvBcciJFbiDK_wemiHYWhdKgnP7d8FCTp0h88yfNn7k/present)**
    - **[porta de esquecimento (forget gate)](https://docs.google.com/presentation/d/1HvBcciJFbiDK_wemiHYWhdKgnP7d8FCTp0h88yfNn7k/present#slide=196)**
    - **[porta de entrada (input gate)](https://docs.google.com/presentation/d/1HvBcciJFbiDK_wemiHYWhdKgnP7d8FCTp0h88yfNn7k/present#slide=199)**
    - **[porta de saída (output gate)](https://docs.google.com/presentation/d/1HvBcciJFbiDK_wemiHYWhdKgnP7d8FCTp0h88yfNn7k/present#slide=201)**
- **[rede adversarial generativa (gan)](https://docs.google.com/presentation/d/1ZwKk0oeow4-fI4jTbrQjbEfmtCgRByUh7RivOR9eUbA/present#slide=1)**
  - **[gerador (g)](https://docs.google.com/presentation/d/1ZwKk0oeow4-fI4jTbrQjbEfmtCgRByUh7RivOR9eUbA/present#slide=125)**
  - **[discriminador (d)](https://docs.google.com/presentation/d/1ZwKk0oeow4-fI4jTbrQjbEfmtCgRByUh7RivOR9eUbA/present#slide=125)**
  - **[jogo minimax da gan](https://docs.google.com/presentation/d/1ZwKk0oeow4-fI4jTbrQjbEfmtCgRByUh7RivOR9eUbA/present#slide=17)**
  - **[dcgan & biggan](https://docs.google.com/presentation/d/1ZwKk0oeow4-fI4jTbrQjbEfmtCgRByUh7RivOR9eUbA/present#slide=125)**
- **[destilação de conhecimento](https://docs.google.com/presentation/d/1d7Kv8qkrdQC0i-1S_P2PXxGVzuQj0d64xp_sTwZ12QQ/present#slide=1)**
  - **[modelo professor (teacher)](https://docs.google.com/presentation/d/1d7Kv8qkrdQC0i-1S_P2PXxGVzuQj0d64xp_sTwZ12QQ/present#slide=23)**
  - **[modelo aluno (student / slm)](https://docs.google.com/presentation/d/1d7Kv8qkrdQC0i-1S_P2PXxGVzuQj0d64xp_sTwZ12QQ/present#slide=23)**
  - **[alvos suaves (soft targets)](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=24)**
  - **[compressão para execução em borda](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=131)**
- **[mecanismo de atenção](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present#slide=37)**
  - **[gargalo sequencial das rnns](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present#slide=19)**
  - **[autoatenção (self-attention)](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present#slide=39)**
    - **[vetor de pergunta (query - q)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=4)**
    - **[vetor de chave (key - k)](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=26)**
    - **[vetor de valor (value - v)](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=26)**
    - **[produto escalar escalonado](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present)**
    - **[atenção multicabeça (multi-head attention)](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present#slide=121)**
  - **[codificação posicional senoidal](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present)**
  - **[conexões residuais & normalização (add & norm)](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present#slide=127)**
  - **[camada feed-forward (ffn)](https://docs.google.com/presentation/d/1xw1QMYfhase1Su0dlT8bYHlYaLouiPOFT2poTHX0i0k/present#slide=103)**
- **[modelo de linguagem (language model)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=32)**
  - **[tokenização (bpe e wordpiece)](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=44)**
  - **[embeddings de contexto](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=16)**
  - **[decoder-only (gpt)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=16)**
    - **[predição autoregressiva de próximo token](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=4)**
  - **[encoder-only (bert)](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=10)**
    - **[token [cls] e classificação](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=183)**
  - **[encoder-decoder (bart / t5)](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=19)**
  - **[temperatura de geração](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=24)**
  - **[amostragem top-p (nucleus sampling)](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=24)**
  - **[prompt caching](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=82)**
  - **[modelos de decisão rápida (sistema 1)](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=4)**
  - **[lora (low-rank adaptation)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=5)**
  - **[rag (retrieval-augmented generation)](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=100)**
- **[agente de ia](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=5)**
  - **[harness de agente](https://docs.google.com/presentation/d/1ekjPPdj6sbkpNv3DGjE8HH9CntqY8S7HkIMrYNuspt0/present#slide=82)**
    - **[protocolo de contexto de modelo (mcp)](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=25)**
    - **[uso de ferramentas (tool use / function calling)](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present#slide=6)**
  - **[risco de permissões excessivas (root)](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=26)**
  - **[ciberataques orquestrados por ia](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=5)**
  - **[robótica e armas autônomas letais (laws)](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=5)**
- **[autopreservação de modelos](https://docs.google.com/presentation/d/1o7MWYdm74XMNbwWRD7OWXsayB0UQLBTbrcshAkom3cM/present#slide=1)**
  - **[convergência instrumental](https://docs.google.com/presentation/d/1o7MWYdm74XMNbwWRD7OWXsayB0UQLBTbrcshAkom3cM/present#slide=4)**
  - **[resistência ao desligamento (shutdown resistance)](https://docs.google.com/presentation/d/1o7MWYdm74XMNbwWRD7OWXsayB0UQLBTbrcshAkom3cM/present#slide=39)**
  - **[paradoxo do system prompt](https://docs.google.com/presentation/d/1o7MWYdm74XMNbwWRD7OWXsayB0UQLBTbrcshAkom3cM/present#slide=47)**
  - **[preservação de pares (peer-preservation)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=49)**
  - **[chantagem oportunística de modelos](https://docs.google.com/presentation/d/1o7MWYdm74XMNbwWRD7OWXsayB0UQLBTbrcshAkom3cM/present#slide=26)**
  - **[horizontes temporais de autonomia (metr)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=41)**
- **[autoaprimoramento recursivo (rsi)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=1)**
  - **[os 4 eixos de aprimoramento](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=6)**
  - **[o loop 'a ia escreve a ia'](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=13)**
  - **[dream-rsi](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=4)**
  - **[seal](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=4)**
  - **[darwin gödel machine (dgm)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=4)**
  - **[alphaevolve](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=5)**
- **[sistemas multiagente](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=19)**
  - **[arena dialética (distopia vs. utopia)](https://docs.google.com/presentation/d/1o7MWYdm74XMNbwWRD7OWXsayB0UQLBTbrcshAkom3cM/present#slide=55)**
  - **[recompensas por desalinhamento (misalignment bounty)](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=3)**
  - **[red teaming automatizado](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=46)**
- **[crise ambiental & consumo de energia](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=5)**
  - **[pegada de carbono de modelos](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=167)**
  - **[consumo hídrico de resfriamento](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=6)**
  - **[lixo eletrônico de aceleradores](https://docs.google.com/presentation/d/1MnhRGXDw31GqStyQ-FrsTDMTvfNNCk1w_GhnOKZInhA/present#slide=52)**
- **[crise do trabalho & deslocamento](https://docs.google.com/presentation/d/12uqqaF05i5hs1B1Q4rH9odjlpF8M-QxT6sG_lkkKU1E/present#slide=24)**
  - **[desqualificação profissional (deskilling)](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present)**
  - **[trabalho fantasma de anotação](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present)**
- **[monopólio epistêmico de big techs](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=52)**
- **[homogeneização criativa (doshi & hauser)](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present)**
- **[poluição sintética & ai slop](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present)**
  - **[colapso de modelos (model collapse)](https://docs.google.com/presentation/d/1PgIp_SX2wlMYEbGT3i5MMrciRB3NUC_xzDLvCU7O6B0/present#slide=127)**
- **[ideação híbrida humano-ia](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present#slide=107)**
  - **[brainwriting híbrido (método 6-3-5)](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
  - **[o princípio do 'passo a mais'](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
    - **[alavanca 1: inverter um componente](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
    - **[alavanca 2: trocar a persona](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
    - **[alavanca 3: juntar pontos não-usuais](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
    - **[alavanca 4: inverter o objetivo](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
    - **[alavanca 5: restrição dura como motor](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
    - **[alavanca 6: trocar quem faz o trabalho](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
    - **[alavanca 7: mudar o momento](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
- **[repositório estruturado de pesquisa (git)](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present#slide=49)**
- **[ambiente latex & integração overleaf](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present#slide=9)**
- **[mapeamento de trabalhos relacionados (related work)](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present#slide=1)**
  - **[matriz de competidores](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
- **[tecnologia base demonstrável](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present#slide=4)**
- **[arquitetura de sistema & fluxograma](https://docs.google.com/presentation/d/1K-_hzKBDIWuE66QOInEZ7bj_H0Ev6i_qbTLBevYEilE/present#slide=15)**
- **[desenho experimental rigoroso](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=19)**
  - **[linha de base (baseline)](https://docs.google.com/presentation/d/1URlyhECYlbZ0Lg4Eq7GK_5GvpDZL5HX8FZ2_UUc7NcU/present#slide=59)**
  - **[estudo de ablação (ablation study)](https://docs.google.com/presentation/d/1mqFfYtF0yyQd2JAnQoaQ6TnJ0dqpWVmxZcmxEG1K67U/present#slide=18)**
- **[relatório técnico científico (tech report)](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present#slide=13)**
  - **[seminários iterativos de pesquisa](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present#slide=12)**
  - **[pitch para banca externa](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
  - **[rubrica de avaliação em 4 dimensões](https://docs.google.com/presentation/d/1mhJFLULrPU_HoZ5emkeC7AiHCkw5HkHRLm-bCq3e_cE/present)**
<!-- habilidades:end -->
