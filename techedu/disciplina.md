# tecnologias na educação · techedu

> prof. lucas silva figueiredo  
> ufrpe · departamento de computação (dc)  
> 2026.2 · quartas às 18h30 e sextas às 20h10 · sala 37

![banner techedu](https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format&fit=crop&q=80)

<!-- publicacao
para o professor (ou o agente dele): marcar itens em painel:dados-va1 e painel:dados-va2 ('v' feito, '-' pendente);
se cronograma, ementa ou slides foram alterados, conferir se academy/teaching/classes/techedu/arvore.yaml
precisa de novos nós ou ajuste de links. depois um comando só (redesenha painel + árvore e publica, ~30 s):
   cd ~/workspace && core/run tools/links/cfpages publish academy/teaching/classes/techedu/disciplina.md
# web: https://lucassf.pages.dev/techedu · raw: https://lucassf.pages.dev/techedu/disciplina.md
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
- [`google meet`](https://meet.google.com/zxu-ffar-qrj) · sala para encontros e acompanhamento remoto
- [`questionário setup`](https://lucassf.pages.dev/techedu/setup) · cadastro instrumental e nivelamento

---

## visão

**base** · a armadilha mais frequente em tecnologia educacional é a "solução à procura de um problema": o consumo ingênuo de ferramentas, propostas genéricas de gamificação superficial e dependência acrítica de caixas-pretas de IA sem escutar as dores estruturais de quem ensina e aprende no Brasil.

**horizonte** · autonomia metodológica e técnica de ponta a ponta: acoplamento rigoroso entre uma dor educacional autêntica (documentada com evidências empíricas) e tecnologias emergentes viáveis locais (agentes, RAG, modelos locais, visão e voz), aplicando as 7 alavancas contra o óbvio para produzir um artigo científico publicável (SBC/IEEE) e uma demonstração técnica com fator wow.

---

## regras

- cada verificação de aprendizagem (va) é feita de 50 itens de verificação (caixas)
- cada item consta como ◼ feito ou ◻ não feito, e cada ◼ vale 2 pontos: 50 itens = 100 pts = nota 10,0
- os itens vêm de artefatos, enigmas e status reports; cada um lista seus itens na própria definição
- artefatos podem ser repositórios git, relatórios em latex, protótipos funcionais ou vídeos demonstrativos
- quartas-feiras trazem aulas expositivas de fundamento ou momentos de status report (checagem pública do progresso)
- sextas-feiras são focadas na produção de artefatos (código de engenharia e relatório científico)
- enigmas são desafios teóricos e conceituais em sala: certo ou errado, 1 ◻ cada, com consulta e sem IA
- o passo a mais é obrigatório na definição de problema e solução: declarar qual das 7 alavancas foi usada e qual era o óbvio abandonado
- o professor verifica os itens um a um, nas aulas de checagem e nos status reports
- atrasou? combine uma checagem com o professor: o item é verificado depois e vale o mesmo
- o painel é público, os itens são dados de antemão, ninguém está atrás, basta entregar
- dialogue com o professor sempre que precisar

---

## cronograma

| data | descrição | materiais |
|:---:|:---|:---|
| · 01 ·<br>12/08<br>· qua · | teoria<br>**abertura, perfis e equipes** | [`[1] slides · abertura`](https://lucassf.pages.dev/techedu/abertura) |
| · 02 ·<br>14/08<br>· sex · | prática<br>**configuração do ambiente e harness** | [`[3] artefato · base git repo`](artefatos/3-base-git-repo.md)<br>[`[4] artefato · latex project`](artefatos/4-latex-project.md) |
| · 03 ·<br>19/08<br>· qua · | teoria<br>**design thinking e problemas reais** | [`[1] slides · design thinking`](https://lucassf.pages.dev/techedu/design-thinking) |
| · 04 ·<br>21/08<br>· sex · | prática<br>**mapeamento de dores e personas** | [`[5] artefato · personas e dores`](artefatos/5-personas-e-dores.md) |
| · 05 ·<br>26/08<br>· qua · | teoria<br>**árvore de tecnologias emergentes** | [`[1] slides · tecnologias emergentes`](https://lucassf.pages.dev/techedu/tecnologias-emergentes) |
| · 06 ·<br>28/08<br>· sex · | prática<br>**tecnologias demonstráveis locais** | [`[5] artefato · tecnologias demonstráveis`](artefatos/5-tecnologias-demonstraveis.md) |
| · 07 ·<br>02/09<br>· qua · | mentoria<br>**refinamento do problema educacional** | |
| · 08 ·<br>04/09<br>· sex · | prática<br>**acoplamento problema-tecnologia** | |
| · 09 ·<br>09/09<br>· qua · | prática<br>**pré-seleção problem-tech fit** | |
| · 10 ·<br>11/09<br>· sex · | prática<br>**artigo: contextualização e introdução** | [`[5] artefato · introdução do artigo`](artefatos/5-introducao-artigo.md) |
| · 11 ·<br>16/09<br>· qua · | checagem<br>**status report · problem-tech fit** | [`[5] artefato · problem-tech fit git`](artefatos/5-ptf-git-repo.md)<br>[`[5] artefato · problem-tech fit report`](artefatos/5-ptf-tech-report.md) |
| · 12 ·<br>18/09<br>· sex · | teoria<br>**análise competitiva e diferenciais** | [`[1] slides · concorrentes`](https://lucassf.pages.dev/techedu/concorrentes) |
| · 13 ·<br>23/09<br>· qua · | checagem<br>**status report · concorrentes** | [`[5] artefato · concorrentes report`](artefatos/5-concorrentes-tech-report.md) |
| · 14 ·<br>25/09<br>· sex · | prática<br>**storyboard da experiência de uso** | [`[5] artefato · storyboard e fluxo`](artefatos/5-storyboard-fluxo.md) |
| · 15 ·<br>30/09<br>· qua · | checagem<br>**status report · storyboard** | [`[5] artefato · storyboard report`](artefatos/5-storyboard-tech-report.md) |
| · 16 ·<br>02/10<br>· sex · | prática<br>**seleção de conceito e refinamento** | |
| · 17 ·<br>07/10<br>· qua · | teoria<br>**prototipagem de baixa fidelidade** | [`[1] slides · baixa fidelidade`](https://lucassf.pages.dev/techedu/baixa-fidelidade) |
| · 18 ·<br>09/10<br>· sex · | prática<br>**protótipo papel e metodologia** | [`[5] artefato · protótipo baixa fidelidade`](artefatos/5-prototipo-baixa-fidelidade.md) |
| · 19 ·<br>14/10<br>· qua · | teoria<br>**prototipagem de alta fidelidade** | [`[1] slides · alta fidelidade`](https://lucassf.pages.dev/techedu/alta-fidelidade) |
| · 20 ·<br>16/10<br>· sex · | prática<br>**arquitetura de software e código** | [`[5] artefato · arquitetura técnica`](artefatos/5-arquitetura-tecnica.md) |
| · 21 ·<br>21/10<br>· qua · | checagem<br>**status report · prototipação** | [`[5] artefato · protótipo funcional`](artefatos/5-prototipo-funcional.md) |
| · 22 ·<br>23/10<br>· sex · | prática<br>**desenho de testes com usuários** | [`[5] artefato · plano de testes`](artefatos/5-plano-de-testes.md) |
| · -- ·<br>28/10<br>· qua · | feriado<br>**dia do servidor público federal** | |
| · 23 ·<br>30/10<br>· sex · | prática<br>**iteração do protótipo e experimentos** | |
| · 24 ·<br>04/11<br>· qua · | teoria<br>**métricas e coleta empírica** | [`[1] slides · testes empíricos`](https://lucassf.pages.dev/techedu/testes-empiricos) |
| · 25 ·<br>06/11<br>· sex · | prática<br>**análise de dados e resultados** | [`[5] artefato · dados de testes`](artefatos/5-dados-de-testes.md) |
| · 26 ·<br>11/11<br>· qua · | checagem<br>**status report · validação empírica** | [`[5] artefato · resultados preliminares`](artefatos/5-resultados-preliminares.md) |
| · 27 ·<br>13/11<br>· sex · | prática<br>**revisão cruzada entre equipes** | |
| · 28 ·<br>18/11<br>· qua · | teoria<br>**técnicas de pitch e comunicação** | [`[1] slides · pitch e comunicação`](https://lucassf.pages.dev/techedu/pitch-comunicacao) |
| · -- ·<br>20/11<br>· sex · | feriado<br>**dia nacional da consciência negra** | |
| · 29 ·<br>25/11<br>· qua · | checagem<br>**status report · artigo e demo** | [`[5] artefato · artigo preliminar`](artefatos/5-artigo-preliminar.md) |
| · 30 ·<br>27/11<br>· sex · | mentoria<br>**polimento final e ensaio de pitch** | |
| · 31 ·<br>02/12<br>· qua · | seminário<br>**pitch final para banca externa** | `[12] seminário · banca examinadora` |
| · 32 ·<br>04/12<br>· sex · | checagem<br>**va2 · fechamento artigo e demo** | [`[6] artefato · artigo final`](artefatos/6-artigo-final.md)<br>[`[5] artefato · demonstração funcional`](artefatos/5-demonstracao-funcional.md) |
| · 33 ·<br>09/12<br>· qua · | checagem<br>**va3 · avaliação escrita** | |
| · 34 ·<br>11/12<br>· sex · | checagem<br>**va4 · exame final institucional** | |

> **teoria:** aula expositiva focada na aprendizagem de fundamentos por seus componentes teóricos  
> **prática:** aula com acesso à infraestrutura para produção de artefatos de engenharia e texto  
> **mentoria:** aula de acompanhamento e auxílio sobre o desenvolvimento de uma determinada prática  
> **seminário:** aula em que os alunos apresentam de forma didática e direta os seus resultados  
> **checagem:** aulas avaliativas (incluindo status reports de quarta) em que cada item de verificação é analisado e pontuado

---

## painel

acompanhamento transparente dos itens de verificação (2 pontos por ◻ · 50 caixas = 100 pontos por va). lista estritamente alfabética.

<!-- painel:dados-va1 caixas=50
aécio: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
albérico: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
arthur: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
beatriz: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
cauã: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
dauane: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
dayana: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
erick: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
guilherme: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
igor: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
isabelly: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
juarez: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
júlio: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
kauã: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
leo: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
luis: git=vvv, tex=vvv-, ptf·c=vvvvv, ptf·r=vvvvv, cmp·r=-----, sty·r=-----, rep1=----, rep2=----, eng=---------------
-->
<!-- painel-va1:start -->
```text
            git tex  ptf·c ptf·r cmp·r sty·r rep1 rep2 eng              nota 1
    aécio   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
 albérico   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
   arthur   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
  beatriz   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
     cauã   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
   dauane   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
   dayana   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
    erick   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
guilherme   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
     igor   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
 isabelly   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
   juarez   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
    júlio   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
     kauã   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
      leo   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
     luis   ◼◼◼ ◼◼◼◻ ◼◼◼◼◼ ◼◼◼◼◼ ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻  32 pts
```
<!-- painel-va1:end -->

> **git:** base git repo · **tex:** latex project · **ptf·c:** problem-tech fit código · **ptf·r:** problem-tech fit relatório · **cmp·r:** concorrentes relatório · **sty·r:** storyboard relatório · **rep1:** status report 1 · **rep2:** status report 2 · **eng:** 15 enigmas em sala

<!-- painel:dados-va2 caixas=50
aécio: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
albérico: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
arthur: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
beatriz: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
cauã: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
dauane: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
dayana: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
erick: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
guilherme: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
igor: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
isabelly: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
juarez: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
júlio: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
kauã: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
leo: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
luis: proto=-----, teste=-----, rep3=----, rep4=----, rep5=----, artigo=------, demo=-----, pitch=------------, pares=-----
-->
<!-- painel-va2:start -->
```text
            proto teste rep3 rep4 rep5 artigo demo  pitch        pares  nota 2
    aécio   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
 albérico   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
   arthur   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
  beatriz   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
     cauã   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
   dauane   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
   dayana   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
    erick   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
guilherme   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
     igor   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
 isabelly   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
   juarez   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
    júlio   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
     kauã   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
      leo   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
     luis   ◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻ ◻◻◻◻◻◻ ◻◻◻◻◻ ◻◻◻◻◻◻◻◻◻◻◻◻ ◻◻◻◻◻  00 pts
```
<!-- painel-va2:end -->

> **proto:** protótipo funcional · **teste:** validação empírica · **rep3/4/5:** status reports de prototipação e validação · **artigo:** artigo científico final · **demo:** demonstração wow · **pitch:** defesa perante banca externa · **pares:** avaliação intragrupo ponderada

---

## entregue

repositórios e artigos científicos validados na turma atual.

- **equipe beta** | [`git`](url) · [`artigo`](url) · [`slides`](url)
- **equipe gamma** | [`git`](url) · [`artigo`](url) · [`slides`](url)
- **equipe zeta** | [`git`](url) · [`artigo`](url) · [`slides`](url)

---

## legado

projetos de turmas anteriores para inspiração e referência metodológica.

- **projeto a** | [`git`](url) · [`artigo`](url) · [`demo`](url)
- **projeto b** | [`git`](url) · [`artigo`](url)

---

## referências

leituras de base, artigos seminais e recursos de suporte.

- [**doshi & hauser (2023)**](https://www.science.org/doi/10.1126/sciadv.adn5290) — generative ai enhances individual creativity but reduces the collective diversity of novel content.
- [**design kit ideo**](https://www.designkit.org/) — métodos centrados no humano para inovação social e educacional.
- [**toolkit tcu**](https://portal.tcu.gov.br/) — ferramentas de design thinking aplicadas ao setor público e serviços sociais.

---

## habilidades

árvore de habilidades e conhecimento desenvolvida ao longo da disciplina. cada conceito aponta para o slide exato onde o fundamento é ensinado (gerado automaticamente via arvore.py a partir de arvore.yaml em minúsculas).

<!-- habilidades:start -->
- **[design thinking e problematização](https://lucassf.pages.dev/techedu/design-thinking#slide=1)**
  - **[dor educacional autêntica](https://lucassf.pages.dev/techedu/problemas#slide=1)**
    - **[escuta de professores e estudantes](https://lucassf.pages.dev/techedu/problemas#slide=5)**
    - **[dados empíricos de contexto escolar](https://lucassf.pages.dev/techedu/problemas#slide=10)**
  - **[personas e empatia](https://lucassf.pages.dev/techedu/personas#slide=1)**
    - **[rotinas e atritos diários](https://lucassf.pages.dev/techedu/personas#slide=8)**
  - **[as 7 alavancas contra o óbvio](https://lucassf.pages.dev/techedu/alavancas#slide=1)**
    - **[inversão de componente](https://lucassf.pages.dev/techedu/alavancas#slide=4)**
    - **[troca de persona](https://lucassf.pages.dev/techedu/alavancas#slide=6)**
    - **[restrição dura como motor](https://lucassf.pages.dev/techedu/alavancas#slide=8)**
    - **[troca de quem faz o trabalho](https://lucassf.pages.dev/techedu/alavancas#slide=10)**
  - **[análise competitiva](https://lucassf.pages.dev/techedu/concorrentes#slide=1)**
    - **[diferencial competitivo](https://lucassf.pages.dev/techedu/concorrentes#slide=5)**
  - **[storyboard e narrativa](https://lucassf.pages.dev/techedu/storyboard#slide=1)**
- **[tecnologias emergentes na educação](https://lucassf.pages.dev/techedu/tecnologias#slide=1)**
  - **[agentes e ferramentas](https://lucassf.pages.dev/techedu/agentes#slide=1)**
    - **[loop agêntico com ferramentas](https://lucassf.pages.dev/techedu/agentes#slide=4)**
    - **[multiagente colaborativo](https://lucassf.pages.dev/techedu/agentes#slide=8)**
  - **[recuperação e rag](https://lucassf.pages.dev/techedu/rag#slide=1)**
    - **[rag clássico sobre documentos](https://lucassf.pages.dev/techedu/rag#slide=4)**
    - **[busca híbrida léxica e vetorial](https://lucassf.pages.dev/techedu/rag#slide=8)**
  - **[modelos locais e no navegador](https://lucassf.pages.dev/techedu/modelos-locais#slide=1)**
    - **[execução local sem nuvem](https://lucassf.pages.dev/techedu/modelos-locais#slide=4)**
    - **[llm no navegador (webgpu/transformers.js)](https://lucassf.pages.dev/techedu/modelos-locais#slide=8)**
  - **[voz e áudio](https://lucassf.pages.dev/techedu/voz#slide=1)**
    - **[transcrição local de fala](https://lucassf.pages.dev/techedu/voz#slide=4)**
    - **[síntese de voz aberta](https://lucassf.pages.dev/techedu/voz#slide=8)**
- **[engenharia pedagógica e validação](https://lucassf.pages.dev/techedu/engenharia#slide=1)**
  - **[prototipagem iterativa](https://lucassf.pages.dev/techedu/prototipagem#slide=1)**
    - **[protótipo de baixa fidelidade](https://lucassf.pages.dev/techedu/prototipagem#slide=4)**
    - **[protótipo funcional de alta fidelidade](https://lucassf.pages.dev/techedu/prototipagem#slide=10)**
  - **[desenho de testes empíricos](https://lucassf.pages.dev/techedu/testes#slide=1)**
    - **[protocolos de teste com usuários](https://lucassf.pages.dev/techedu/testes#slide=5)**
    - **[análise quantitativa e qualitativa](https://lucassf.pages.dev/techedu/testes#slide=12)**
  - **[escrita científica e comunicação](https://lucassf.pages.dev/techedu/comunicacao#slide=1)**
    - **[relatório técnico no padrão sbc](https://lucassf.pages.dev/techedu/comunicacao#slide=4)**
    - **[pitch para banca examinadora](https://lucassf.pages.dev/techedu/comunicacao#slide=10)**
<!-- habilidades:end -->
