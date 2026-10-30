# exp · exemplo quase bom / sem alma

> preenchimento fictício: tudo preenchido, mas raso. a mesma ideia do [exemplo excelente](excelente.md),
> feita do jeito fácil. as anotações do professor mostram onde falha.

## 0 · a minha ideia, e o que ficou para medir

**rastro da banca.** um app com inteligência artificial que transcreve e organiza automaticamente os pedidos que as clientes mandam por áudio no WhatsApp para a feirante.

**o que eu medi no tec:** o Whisper funcionou muito bem e transcreveu os áudios rápido e quase sem erros.

**o que o flx deixou para o experimento:** testar se a IA acerta os pedidos e se a feirante gosta de usar o aplicativo no dia a dia.

## 1 · os experimentos e a comunidade de cada um

| exp. | a pergunta que ele responde | o que é testado: a técnica, uma pessoa usando, ou o nicho | a comunidade e os veículos | o experimento publicado que eu sigo (com link) |
|:--|:--|:--|:--|:--|
| E1 | o Whisper transcreve bem os áudios dos pedidos? | a técnica | inteligência artificial: ICML, NeurIPS | [Whisper](https://proceedings.mlr.press/v202/radford23a.html) (Radford et al., ICML 2023): mede o WER em vários bancos de voz |
| E2 | a feirante acha o aplicativo prático e fácil de usar? | uma pessoa usando | IHC e negócios: CHI, arXiv | ["Business on WhatsApp is tough now"](https://arxiv.org/abs/2502.10913) (De, arXiv 2025): conversa com pequenas comerciantes sobre WhatsApp |

## 2 · E1 · precisão da IA nos áudios

### 2.1 · hipótese, linhas de base e o número que derruba

**a hipótese:** o modelo `whisper-small` vai ter uma boa acurácia na transcrição dos pedidos das clientes.

**o jeito de hoje:** o modelo `whisper-tiny`, que é a versão mais simples e leve.

**o competidor mais forte:** não tem, a ideia é inovadora.

**o número que derruba a hipótese:** acurácia abaixo de 75% nos pedidos testados, pois no nosso teste o modelo já conseguiu chegar em 80%.

**escrito antes de rodar:** link do repositório no GitHub.

### 2.2 · métricas e ablação

| métrica | o que mede | por que esta, e não outra | de onde vem (artigo ou checklist, com link) |
|:--|:--|:--|:--|
| WER | taxa de erro por palavra na transcrição | é a métrica oficial de reconhecimento de fala | [Whisper](https://proceedings.mlr.press/v202/radford23a.html) (Radford et al., ICML 2023) |
| acurácia | porcentagem de pedidos certos | é fácil de entender e mostra se a IA acertou | métricas clássicas de machine learning |

| ablação: o que eu tiro ou troco | o que espero ver | o que ela prova sobre a ideia |
|:--|:--|:--|
| trocar `whisper-small` por `whisper-tiny` | vamos ver a diferença de desempenho entre os modelos | mostra qual modelo é melhor para colocar no app |

**como vou reportar a incerteza:** não precisa de intervalo porque o modelo de transcrição dá sempre a mesma resposta para o mesmo áudio.

### 2.3 · dados, participantes e ética

| | resposta |
|:--|:--|
| origem dos dados ou das pessoas | 5 áudios gravados por nós mesmos no computador simulando pedidos de feira |
| quantos, e por que esse número | 5 áudios cobrem os principais produtos da banca e permitem testar rápido |
| como é coletado, e quem faz o gabarito | nós gravamos as frases e já sabemos o que foi falado em cada uma |
| o que separa treino, ajuste e teste | não treino nada, uso os 5 áudios direto para testar |
| consentimento e comitê de ética | não precisa de comitê de ética nem de TCLE porque os dados são anonimizados e seguros |
| dados pessoais: onde ficam e quando somem | ficam salvos numa pasta privada na nuvem, protegidos por senha conforme a LGPD |

### 2.4 · o piloto: o que rodei, o que deu, o que mudou no desenho

**o script e o commit:** rodei no Google Colab.

**a tabela, colada como saiu:**

| modelo | WER | acurácia |
|:--|--:|--:|
| whisper-small | 12% | 80% |
| whisper-tiny | 28% | 60% |

**o que o piloto prova, e o que ele não prova:** o modelo acertou 80% dos pedidos (4 de 5), provando que a IA funciona bem para a feira e supera a linha de base.

**o que mudou no desenho por causa dele:** ajustei o prompt do whisper três vezes nos mesmos 5 áudios até chegar nos 80%, e o desenho continua o mesmo.

## 3 · E2 · avaliação com a feirante

### 3.1 · hipótese, linhas de base e o número que derruba

**a hipótese:** o app vai melhorar a experiência da feirante e facilitar a organização das encomendas.

**o jeito de hoje:** a feirante organizar os pedidos sem auxílio de um assistente inteligente.

**o competidor mais forte:** não tem.

**o número que derruba a hipótese:** nota média abaixo de 7 (de 0 a 10) na avaliação de satisfação.

**escrito antes de rodar:** link do repositório no GitHub.

### 3.2 · métricas e ablação

| métrica | o que mede | por que esta, e não outra | de onde vem (artigo ou checklist, com link) |
|:--|:--|:--|:--|
| nota de satisfação (0 a 10) | o quanto a feirante gostou do app | mede diretamente se a experiência foi boa | pesquisa de satisfação de usuários |
| opinião aberta | comentários sobre praticidade | ajuda a entender os pontos fortes do sistema | ["Business on WhatsApp is tough now"](https://arxiv.org/abs/2502.10913) |

| ablação: o que eu tiro ou troco | o que espero ver | o que ela prova sobre a ideia |
|:--|:--|:--|
| mostrar o pedido com e sem o cálculo automático do valor total | ver qual formato a usuária prefere na tela | avalia a interface do aplicativo |

**como vou reportar a incerteza:** média simples das notas atribuídas na avaliação.

### 3.3 · dados, participantes e ética

| | resposta |
|:--|:--|
| origem dos dados ou das pessoas | usamos o ChatGPT configurado com um prompt detalhado da dona Cida, feirante de 52 anos |
| quantos, e por que esse número | 1 persona completa representando o perfil típico do nosso público-alvo |
| como é coletado, e quem faz o gabarito | apresentamos a tela e os 5 pedidos para a persona e pedimos a avaliação dela |
| o que separa treino, ajuste e teste | não há treino, é uma entrevista de avaliação qualitativa e nota |
| consentimento e comitê de ética | como foi testado com persona sintética e os dados são anonimizados e seguros, não exige CEP nem TCLE |
| dados pessoais: onde ficam e quando somem | o histórico da conversa fica salvo na conta da equipe para consulta |

### 3.4 · o piloto: o que rodei, o que deu, o que mudou no desenho

**o script e o commit:** conversa salva no ChatGPT.

**a tabela, colada como saiu:**

| avaliadora | nota de satisfação | comentário |
|:--|--:|:--|
| dona Cida (persona de IA) | 9/10 | achei muito prático, vai economizar bastante tempo na barraca |

**o que o piloto prova, e o que ele não prova:** a dona Cida simulada achou o app muito prático, nota 9/10, o que mostra que as feirantes vão gostar da solução e terão menos trabalho.

**o que mudou no desenho por causa dele:** nada, o resultado foi ótimo e validou a proposta.

## 4 · o que mudou na ideia, sem IA

os pilotos confirmaram que a arquitetura escolhida funciona bem e atende às necessidades da feirante.
o `whisper-small` teve boa precisão e a avaliação de usabilidade recebeu nota alta.
por isso, a ideia original se manteve sem precisar alterar o fluxograma nem os competidores.

## 5 · auditoria cega

**o veredito da conversa nova:** "revisei toda a folha de desenho dos experimentos. os dois experimentos cobrem tanto a parte técnica quanto o lado humano, as métricas de WER e satisfação fazem sentido para o problema e os pilotos já trouxeram resultados positivos (80% de acerto e nota 9/10). todos os 3 itens de verificação passam com tranquilidade."

**a minha resposta, sem IA:**
1. concordo com a auditoria, a hipótese e a linha de base ficaram claras.
2. concordo com a auditoria, as métricas e os pilotos confirmaram a ideia.
3. concordo com a auditoria, a parte ética e os dados estão bem definidos.

## anotações do professor

cada anotação cita uma frase do exemplo e explica onde ela falha. compare com o mesmo trecho no [exemplo excelente](excelente.md).

1. **§ 1, referência que não mede a tarefa e preprint como molde.** "[Whisper](https://proceedings.mlr.press/v202/radford23a.html) (Radford et al., ICML 2023): mede o WER em vários bancos de voz" e "["Business on WhatsApp is tough now"](https://arxiv.org/abs/2502.10913) (De, arXiv 2025)": o artigo do Whisper mede transcrição geral, não se o produto, a quantidade e a hora saíram certos do áudio; e o segundo está no arXiv, sem revisão por pares, e entrevista quem vende, sem medir tarefa nenhuma: serve de contexto para a ideia, não de molde para o experimento. no excelente, o E1 segue o [SLURP](https://doi.org/10.18653/v1/2020.emnlp-main.588) (Bastianelli et al., EMNLP 2020), que "mede a tarefa (o pedido), não só as palavras", e o E2 segue [Patel et al., CHI 2009](https://doi.org/10.1145/1518701.1518709), com "as duas condições com as mesmas pessoas, tarefa cronometrada".
2. **§ 2.1 e § 3.1, hipótese que nada derruba, linhas de base de mentira e limiar escolhido depois.** "o app vai melhorar a experiência da feirante", "o modelo `whisper-tiny`, que é a versão mais simples", "não tem, a ideia é inovadora" e "abaixo de 75% nos pedidos testados, pois no nosso teste o modelo já conseguiu chegar em 80%": "melhorar a experiência" ou "boa acurácia" não têm como dar errado; o `whisper-tiny` não é o jeito de hoje (troca de tamanho é ablação), e o próprio cmp do aluno lista competidores; e fixar 75% porque o piloto deu 80% é desenhar o alvo em volta da flecha, sem commit anterior ao piloto. no excelente, o jeito de hoje do E2 é "ouvir o áudio e anotar no caderno", e o competidor do E1 roda nos mesmos pedidos; o limiar ("errado sem aviso acima de 10% a 10 dB") foi commitado antes, e quando o piloto deu 20%, "a hipótese caiu".
3. **§ 2.2 e § 3.2, só WER e "acurácia", sem erro silencioso e ablação vazia.** "WER" e "acurácia: porcentagem de pedidos certos", e "vamos ver a diferença de desempenho entre os modelos": o WER trata errar "ô dona Cida" igual a trocar "jerimum" por "limão", e a "acurácia" mistura o erro em que o app avisa com "?" (que custa um clique) com o erro calado que chega errado à cliente. além disso, "ver a diferença" não diz o que se espera nem testa se a lista de produtos no contexto ou as regras fazem falta. no excelente, as métricas separam `pedido exato`, `errado com "?"` e `errado sem aviso` ([Geifman e El-Yaniv, NeurIPS 2017](https://proceedings.neurips.cc/paper/2017/hash/4a8423d5e91fda00bb7e46540e2b0cf1-Abstract.html)), e cada ablação testa uma peça do fluxograma ("sem a lista da banca como contexto → mais palavras da banca erradas", "qwen3:4b no lugar das regras → igual ou pior").
4. **§ 2.2 e § 2.4, 5 áudios como prova e sem intervalo de confiança.** "o modelo acertou 80%" e "não precisa de intervalo porque o modelo de transcrição dá sempre a mesma resposta": a incerteza não vem só de sorteio do modelo, vem da amostra de pedidos — acertar 4 em 5 (80%) tem um intervalo de confiança de 95% que vai de ~28% a ~99%, ou seja, não separa um sistema ótimo de um quebrado. no excelente, o piloto roda 30 pedidos no script [avaliar.py](https://github.com/lsfcin/rastro-da-banca/blob/main/avaliar.py), reporta "intervalo de 95% por bootstrap sobre os pedidos, 2000 reamostras" (`47% [30%–63%]`), calcula que para o experimento valendo são precisos "100 pedidos: o intervalo de 95% de uma taxa de 10% fica em ±6 pontos", e deixa claro que voz gravada no computador "não prova nada sobre voz de gente". e "ajustei o prompt do whisper três vezes nos mesmos 5 áudios" transforma o teste em ajuste: os 80% medem o quanto o prompt decorou aqueles áudios. no excelente, as regras que erraram "não as corrigi olhando o teste; isso vai para os 3 falantes de ajuste".
5. **§ 3.3 e § 3.4, persona de IA tratada como usuária.** "a dona Cida simulada achou o app muito prático, nota 9/10, o que mostra que as feirantes vão gostar": um modelo de linguagem elogiando a sua tela não é evidência empírica sobre feirantes reais — substituir participantes humanos por personas de IA invalida conclusões sobre pessoas ([Agnew et al., CHI 2024](https://doi.org/10.1145/3613904.3642703)), ainda mais pedindo nota de opinião, onde até humanos elogiam para agradar ([Dell et al., CHI 2012](https://doi.org/10.1145/2207676.2208589)). no guia e no excelente, uma persona de IA serve só para "testar o protocolo e os scripts" antes de ir a campo; o desenho do E2 mede comportamento ("pedido final errado", "tocou 'ouvir'", "correções por pedido") com "6 a 8" feirantes em quadrado latino ([Caine, CHI 2016](https://doi.org/10.1145/2858036.2858498)).
6. **§ 2.3 e § 3.3, ética genérica.** "os dados são anonimizados e seguros" e "protegidos por senha conforme a LGPD": a voz identifica a pessoa, então é dado pessoal na LGPD, e gravar falantes ou testar com feirantes exige Termo de Consentimento Livre e Esclarecido (TCLE), submissão ao Comitê de Ética em Pesquisa (CEP) e prazo exato de descarte. no excelente, há "termo de consentimento (TCLE) lido em voz alta e aceito em áudio (Res. CNS 510/2016), projeto ao comitê de ética da UFRPE", e "os áudios ficam no notebook da pesquisa só até o gabarito, e são apagados".
7. **§ 4 e § 5, nada mudou e auditoria por gentileza.** "todos os 3 itens de verificação passam com tranquilidade" e "concordo com a auditoria": o veredito veio num parágrafo elogioso fora da tabela obrigatória (item | passa ou não passa | trecho que prova | o que encontrei), sem começar de "não passa", sem checar commit anterior ao piloto e sem apontar as armadilhas da persona de IA e da linha de base com IA. e repetir "concordo com a auditoria" três vezes mostra que nem a auditoria tentou derrubar a folha, nem o aluno revisou o próprio desenho. no excelente, o piloto derruba a hipótese (20% contra o limiar de 10%) e muda a ideia ("o '?' é metade da ideia", "a própria dona Cida ouvindo e anotando" entra no cmp), e a auditoria testa item por item com resposta própria do aluno.
