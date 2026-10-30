# exp · exemplo excelente

> folha do artefato [desenho dos experimentos](../3-desenho-dos-experimentos.md), feita a partir do
> [flx excelente](../flx/excelente.md). o pré-registro e os pilotos são reais e rodam:
> [rastro-da-banca/experimentos.md](https://github.com/lsfcin/rastro-da-banca/blob/main/experimentos.md). as anotações do professor estão no fim.

## 0 · a minha ideia, e o que ficou para medir

**rastro da banca · colheita marcada.** feirantes usam as mensagens e áudios que já trocam com clientes para registrar pedidos; o cliente reserva e combina a hora de buscar. um transformer de voz transcreve no celular do feirante, regras tiram produto, quantidade e hora, e o feirante confere e confirma.

**o que eu medi no tec:** no notebook, em CPU, 13 s para três pedidos; o whisper trocou "jerimum" por "de limão"; o qwen errou número e hora.

**o que o flx deixou para o experimento:** o item que some calado ("dois pés de alface" que vira "dois peixes") nenhuma regra pega: quem pega é a dona Cida no passo 7. medir quantos pedidos ela corrige ali, e quanto o whisper demora no celular.

## 1 · os experimentos e a comunidade de cada um

| exp. | a pergunta que ele responde | o que é testado | a comunidade e os veículos | o experimento publicado que eu sigo |
|:--|:--|:--|:--|:--|
| E1 | o pedido sai certo do áudio, com barulho de feira? | a técnica | fala e linguagem: INTERSPEECH, ICASSP, EMNLP | [SLURP](https://doi.org/10.18653/v1/2020.emnlp-main.588) (Bastianelli et al., EMNLP 2020): mede a tarefa (o pedido), não só as palavras |
| E2 | a feirante termina com menos pedidos errados do que hoje? | uma pessoa usando, num nicho | IHC e desenvolvimento: CHI, CSCW, ICTD, COMPASS | [fala × teclado](https://doi.org/10.1145/1518701.1518709) (Patel et al., CHI 2009): 45 agricultores, as duas entradas medidas pela tarefa completada, com quem vai usar |

## 2 · E1 · o pedido sai certo do áudio

### 2.1 · hipótese, linhas de base e o número que derruba

**a hipótese:** com o barulho de uma feira (10 dB de relação sinal-ruído), no máximo 1 em cada 10 pedidos sai errado **sem aviso**, e a transcrição leva menos tempo que o próprio áudio.

**o jeito de hoje:** hoje ninguém transcreve: quem tira o pedido do áudio é a dona Cida, e isso é o E2. no lugar, as regras sozinhas sobre o que a cliente falou de verdade (o gabarito): o teto, que mostra se o erro é das regras ou do whisper.

**o competidor mais forte:** o Anota AI e o agente da Meta não rodam nos meus áudios. no lugar, um caminho alternativo maior, na nuvem: whisper `large-v3-turbo` + DeepSeek V4.1 Flash, nos mesmos pedidos, com a mesma lista e o mesmo julgamento. ele não representa esses produtos, e entrou depois do pré-registro, como emenda datada.

**o número que derruba a hipótese:** errado sem aviso acima de 10% a 10 dB, ou tempo / áudio acima de 1, com 30 pedidos.

**escrito antes de ver o resultado:** [experimentos.md](https://github.com/lsfcin/rastro-da-banca/blob/main/experimentos.md), commit anterior ao da tabela. o que a auditoria achou depois entrou como emenda datada, no fim do arquivo, sem reescrever o que estava lá; o limiar não mudou.

### 2.2 · métricas e ablação

| métrica | o que mede | por que esta, e não outra | de onde vem |
|:--|:--|:--|:--|
| pedido exato | todos os itens e a hora certos | é o que a cliente recebe | [SLURP](https://doi.org/10.18653/v1/2020.emnlp-main.588) |
| errado com "?" | o app errou, mas avisou | erro avisado custa um clique da dona Cida | predição seletiva ([Geifman e El-Yaniv, NeurIPS 2017](https://proceedings.neurips.cc/paper/2017/hash/4a8423d5e91fda00bb7e46540e2b0cf1-Abstract.html)) |
| **errado sem aviso** | o app errou e não avisou | é a alface que some: chega errado à cliente | o mesmo; é a métrica da hipótese |
| F1 dos itens | itens certos, contando os que faltam e os que sobram | mostra o erro parcial que o pedido exato esconde | SLURP |
| WER | palavras erradas na transcrição | o padrão da área, mas engana: "ô dona Cida" errado pesa igual a "jerimum" errado ([Morris et al., INTERSPEECH 2004](https://doi.org/10.21437/Interspeech.2004-668)); normalizo "2 kg" = "dois quilos" | a área de fala |
| tempo / áudio | segundos de transcrição por segundo de áudio | acima de 1, a fila de áudios cresce na feira | a área de fala |

| ablação: o que eu tiro ou troco | o que espero ver | o que ela prova sobre a ideia |
|:--|:--|:--|
| sem a lista da banca como contexto | mais palavras da banca erradas | que a lista no contexto vale o seu lugar no fluxograma ([Sun et al., INTERSPEECH 2023](https://doi.org/10.21437/Interspeech.2023-1440)) |
| whisper `tiny` e `base` | mais rápido, mais erro | o tamanho mínimo que o celular pode rodar |
| qwen3:4b no lugar das regras | igual ou pior | se tirar o qwen no flx foi certo |
| ruído: limpo, 10 dB, 0 dB | o erro sobe com o ruído | onde a ideia para de funcionar |

**como vou reportar a incerteza:** intervalo de 95% por bootstrap sobre os pedidos, 2000 reamostras. o whisper com `beam_size=5` não sorteia nada, então uma rodada basta.

### 2.3 · dados, participantes e ética

| | resposta |
|:--|:--|
| origem | 10 falantes da região, clientes de feira, lendo um cartão com os itens e falando do seu jeito, gravados no WhatsApp na própria feira |
| quantos, e por quê | 100 pedidos, 70 no teste: o intervalo de 95% de uma taxa de 10% fica em ±7 pontos, e mais se os falantes variam muito. com 30, fica em ±11, e não dá para separar 10% de 20% |
| gabarito | duas pessoas anotam cada pedido, e a concordância entre elas (κ) é reportada |
| ajuste × teste | 3 falantes para ajustar as regras, 7 para o teste, sem olhar o teste antes |
| consentimento e ética | termo de consentimento (TCLE) lido em voz alta e aceito em áudio (Res. CNS 510/2016), projeto ao comitê de ética da UFRPE (Res. 466/2012, Lei 14.874/2024) |
| dados pessoais | os áudios ficam no notebook da pesquisa até o fim do E2, que os reusa, e então são apagados; o gabarito não tem nome (LGPD) |

### 2.4 · o piloto: o que rodei, o que deu, o que mudou no desenho

**o script e o commit:** [avaliar.py](https://github.com/lsfcin/rastro-da-banca/blob/main/avaliar.py). 30 pedidos do [gabarito](https://github.com/lsfcin/rastro-da-banca/blob/main/pedidos/gabarito.tsv) (22 normais, 5 com produto fora da lista, 2 que não são pedido, 1 só barulho) em voz sintética (Piper, 4 vozes), com o burburinho de outras falas por baixo.

**a tabela, colada como saiu** (trecho; a inteira está em `resultados/e1.md`):

| condição | ruído | pedido exato | errado com "?" | errado sem aviso | F1 dos itens | WER | tempo / áudio |
|:--|:--|--:|--:|--:|--:|--:|--:|
| linha de base: as regras sobre o que a cliente falou | — | 97% | 3% | 0% | 0.98 | — | — |
| completo | limpo | 60% [43%–77%] | 20% | 20% [7%–37%] | 0.86 | 0.12 | 0.17 |
| completo | 10db | 47% [30%–63%] | 33% | 20% [7%–37%] | 0.82 | 0.24 | 0.17 |
| completo | 0db | 7% [0%–17%] | 23% | 70% [53%–87%] | 0.23 | 0.95 | 0.37 |
| sem a lista como contexto | 10db | 27% [10%–43%] | 47% | 27% [10%–43%] | 0.47 | 0.36 | 0.22 |
| whisper tiny | 10db | 17% [3%–30%] | 37% | 47% [30%–63%] | 0.42 | 0.46 | 0.06 |
| whisper base | 10db | 30% [13%–47%] | 37% | 33% [17%–50%] | 0.63 | 0.33 | 0.10 |
| qwen3:4b no lugar das regras | 10db | 20% [7%–33%] | 50% | 30% [13%–47%] | 0.46 | 0.24 | 0.17 |
| pipeline alternativo: turbo + DeepSeek | 10db | 77% [60%–90%] | 17% | 7% [0%–17%] | 0.87 | 0.11 | 0.60 |

**o que o piloto prova, e o que ele não prova:** a hipótese não se sustentou: 20% de erro sem aviso a 10 dB, o dobro do limiar, e já 20% no áudio limpo. com 30 pedidos o intervalo (7% a 37%) ainda inclui 10%: quem decide é o experimento com 70 pedidos de teste. a linha de base mostra de onde vem o erro: sobre o que a cliente falou, as regras erram calado 0 vez; o erro calado nasce na transcrição. o tempo passou no notebook (0,17) e caiu no celular: num Redmi Note 10 Pro, com o whisper.cpp rodando pelo adb, sem app ([medir_no_celular.py](https://github.com/lsfcin/rastro-da-banca/blob/main/medir_no_celular.py)), o `small` leva 2,89 vezes a duração do áudio, e um pedido de 20 s pede quase 1 minuto; e isso sem o peso de um app, com wav no lugar do ogg e sem o celular esquentar numa feira inteira. a lista no contexto e as regras valem o seu lugar: sem a lista, o pedido exato cai de 47% para 27%; com o qwen, para 20%. a 0 dB a ideia não funciona. o competidor, maior e na nuvem, acerta 77% a 10 dB, com 7% sem aviso: passaria no meu limiar. a aposta da ideia não é acertar mais, é rodar sem internet com a voz da cliente no celular, e o número diz o preço dela: até 30 pontos de pedido exato, porque o competidor troca o whisper e o extrator de uma vez. não prova nada sobre voz de gente: a voz sintética `cadu` acertou 7 de 8 pedidos a 10 dB, e a `jeff`, 1 de 8.

**o que mudou no desenho por causa dele:** (1) o falante pesa mais que qualquer ablação: o teste separa os falantes, e a tabela sai também por falante. (2) as regras perdem "lá pelos onze" e "a sete e meia": não as corrigi olhando o teste; isso vai para os 3 falantes de ajuste. (3) no celular, o `small` não cabe no tempo: o experimento testa o `base` no aparelho (no notebook, 30% de pedido exato contra 47%), ou a transcrição roda enquanto a feirante atende, e o app avisa quando o pedido fica pronto.

## 3 · E2 · a feirante erra menos com o app

### 3.1 · hipótese, linhas de base e o número que derruba

**a hipótese:** conferindo a tela do app (passo 7), a feirante termina com menos pedidos errados que ouvindo e anotando, e corrige no máximo 1 em cada 3 pedidos.

**o jeito de hoje:** ouvir o áudio e anotar no caderno.

**o competidor mais forte:** não roda no piloto. no Anota AI quem finaliza é o cliente, no cardápio; o agente da Meta passa a conversa para uma pessoa. compará-los pede testar o fluxo deles com feirantes, no experimento real. no piloto, a ablação "sem conferência" mostra o que chega à cliente quando ninguém confere.

**o número que derruba a hipótese:** pedidos errados no fim, com o app, iguais ou acima dos sem o app; ou mais de 1 correção a cada 3 pedidos.

**escrito antes de ver o resultado:** o mesmo commit do E1.

### 3.2 · métricas e ablação

| métrica | o que mede | por que esta, e não outra | de onde vem |
|:--|:--|:--|:--|
| pedido final errado | o que chega errado à cliente, nas duas condições | é o que a ideia promete diminuir | Patel et al., CHI 2009 (tarefa completada) |
| correções por pedido | o trabalho que o app ainda dá | o flx pediu esta medida | o flx § 4 |
| tocou "ouvir" | se ela confere ou confia | sem ouvir, o erro silencioso passa | viés de automação ([Parasuraman e Manzey, 2010](https://doi.org/10.1177/0018720810376055)) |
| tempo por pedido, e carga (NASA-TLX reduzido, oral) | o custo para quem usa | numa feira cheia, atenção é o recurso escasso | IHC |
| entrevista curta | o porquê dos números | gente elogia o que o pesquisador traz: comportamento vale mais que opinião | [Dell et al., CHI 2012](https://doi.org/10.1145/2207676.2208589) |

| ablação: o que eu tiro ou troco | o que espero ver | o que ela prova sobre a ideia |
|:--|:--|:--|
| condição A: sem o app | mais tempo, erro de ouvido | se o app ganha da prática de hoje |
| o "?" escondido da tela | mais erro que passa | se avisar é o que protege a cliente |

**como vou reportar a incerteza:** a diferença B − A por feirante, com intervalo de 95% por bootstrap sobre as pessoas; sem caça a valor-p ([Dragicevic, 2016](https://doi.org/10.1007/978-3-319-26633-6_13)).

### 3.3 · dados, participantes e ética

| | resposta |
|:--|:--|
| origem | feirantes da agricultura familiar, numa feira agroecológica do bairro |
| quantos, e por quê | 6 a 8, cada uma comparada com ela mesma: o tamanho na CHI varia com o método e pede justificativa local ([Caine, CHI 2016](https://doi.org/10.1145/2858036.2858498)); com 8, o estudo mostra a direção e o tamanho da diferença por pessoa, não uma taxa da população |
| desenho | duas listas de 15 pedidos equivalentes (L1, L2), em quadrado latino: metade começa sem o app; ninguém ouve o mesmo áudio duas vezes |
| consentimento e ética | o mesmo TCLE e o mesmo projeto do E1; a pessoa pode parar quando quiser |
| dados pessoais | só o número do participante; a voz da feirante não é gravada |

### 3.4 · o piloto: o que rodei, o que deu, o que mudou no desenho

**o script e o commit:** [simular_feirante.py](https://github.com/lsfcin/rastro-da-banca/blob/main/simular_feirante.py), com a persona em [nuvem.py](https://github.com/lsfcin/rastro-da-banca/blob/main/nuvem.py). a troca de persona e as comparações novas entraram como emenda datada no [experimentos.md](https://github.com/lsfcin/rastro-da-banca/blob/main/experimentos.md), depois de conhecer o E1 e antes de rodar o E2. são 4 execuções simuladas, uma por combinação de ordem e lista, com 15 pedidos por condição, a 10 dB. a persona é o DeepSeek V4.1 Flash lendo o que o whisper `large-v3-turbo` ouviu; na sensibilidade, ela lê a fala certa.

**a tabela, colada como saiu** (`resultados/e2.md`):

| ouvido da persona | condição | pedidos | pedido final exato | errado no fim | ouviu o áudio | pedidos corrigidos | trocas por pedido | tokens por pedido |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|
| turbo | A | 60 | 58% | 42% | 100% | 0% | 0.00 | 1394 |
| turbo | B | 60 | 65% | 35% | 50% | 35% | 0.82 | 1805 |
| fala certa | A | 60 | 90% | 10% | 100% | 0% | 0.00 | 949 |
| fala certa | B | 60 | 78% | 22% | 50% | 32% | 0.75 | 1480 |
| — | sem conferência | 30 | 47% | 53% | 0% | 0% | 0.00 | 0 |

dos 12 erros sem aviso do app na condição B, a persona confirmou 2 sem ouvir.

**o que o piloto prova, e o que ele não prova:** o protocolo roda de ponta a ponta, e o piloto achou um instrumento quebrado: na condição A, a persona escreveu "Dona Cida", "caderno" ou "10" no campo da hora em 12 de 60 pedidos, e 9 deles erraram só por isso. sem esse defeito, A ficaria perto de 27% de errados, abaixo dos 35% de B: a vantagem aparente do app vem do instrumento, não da ideia. com a fala certa, o caderno ganha com folga (10% contra 22%): na simulação, com um bom ouvido, conferir a tela atrapalha. a persona corrigiu 35% dos pedidos, acima do limiar de 1 em 3. nada disso diz como uma feirante agiria: a persona é um modelo lendo texto, sem pressa e sem cliente na frente, e o ouvido dela é outro whisper, que erra junto com o do app.

**o que mudou no desenho por causa dele:** (1) antes de comparar condições, separo o erro de formato do erro de conteúdo; na persona, a hora passa a ser validada (HH:MM ou "?"). (2) a correção conta pedidos corrigidos, não trocas, como o limiar pede. (3) com 50% de áudios ouvidos e 2 erros calados confirmados, o "?" não basta: o experimento real mede quantos erros sem aviso passam pela tela.

## 4 · o que mudou na ideia, sem IA

o qwen ficou fora com número: com ele, o pedido exato cai de 47% para 20%.  
o "?" é metade da ideia: um terço dos pedidos errou, mas avisou. a tela do passo 7 tem de abrir pelo "?" e tocar o áudio sozinha.  
no áudio limpo, 1 em cada 5 pedidos ainda erra calado: o app não pode prometer "sem conferir".  
entra um competidor no cmp: a própria dona Cida ouvindo e anotando, o jeito de hoje do E2. e o caminho na nuvem acerta 30 pontos a mais: ficar no celular tem esse preço, e a ideia tem de dizer por que o paga.

## 5 · auditoria cega

**o veredito da conversa nova** (Codex, 30/10/2026, sobre a versão anterior às correções abaixo; resumido):

| item | passa ou não passa | trecho que prova | o que encontrei |
|:--|:--|:--|:--|
| 1 · decididos antes | passa | § 2.1 e § 3.1, os limiares | `cc067d7` antecede scripts e resultados, e as hipóteses perderam. mas as emendas do E2 entraram no mesmo commit dos resultados, e 10% e 1/3 seguem sem justificativa de custo |
| 2 · métricas e ablação | **não passa** | § 3.2 promete o "?" escondido e intervalo por pessoa; o § 3.4 não traz nenhum | os números batem com o repositório, mas: a linha de base não saía do script; um "?" de hora esconde um item perdido (pedido 12); "limão está na lista" é falso; o DOI de Dell aponta outro artigo; os 30 pontos trocam duas peças de uma vez; o NASA-TLX "reduzido" não está especificado |
| 3 · dados, pessoas e ética | **não passa** | § 2.3 guarda os áudios "até o fim do E2"; o TCLE diz "só até a gente escrever" | a persona não foi tratada como pessoa. mas "conferir atrapalha" só vale na simulação, 6 a 8 feirantes não diz o que estima, e o TCLE contradiz a retenção |

**a minha resposta, sem IA:**
1. concordo com a ressalva: as emendas do E2 entraram no mesmo commit dos resultados. daqui em diante, cada emenda é um commit próprio, antes de rodar.
2. corrigi o que era erro: o DOI de Dell; "limão está na lista" (não está, vira "?"; o erro calado de verdade é o item que some, e o § 0 e o flx agora dizem isso); a linha de base agora sai do script; e os 30 pontos trocam duas peças de uma vez, como a folha diz. o "?" que cobre o erro de outro campo e a ablação do "?" escondido vão para o experimento real (emenda 10).
3. o TCLE contradizia a emenda 4: corrigido na emenda 11. "conferir a tela atrapalha" vale só na simulação, e a folha diz isso. falta dizer o que 6 a 8 feirantes estimam com precisão útil, antes do projeto ir ao CEP.

## anotações do professor

cada anotação cita uma frase do exemplo e explica por que ela é o padrão que buscamos.

1. **§ 1, um molde por comunidade.** a técnica segue o SLURP, que "mede a tarefa (o pedido), não só as palavras"; quem usa segue Patel, "as duas condições com as mesmas pessoas". cada experimento é julgado por quem entende daquele tipo de resultado, e o molde diz como medir antes de você inventar.
2. **§ 2.1 e § 2.4, uma hipótese que não se sustentou.** "errado sem aviso acima de 10% a 10 dB" estava no commit do pré-registro, e o piloto deu 20%. o limiar veio antes, por isso o resultado ensina; e a folha não exagera: "o intervalo ainda inclui 10%: quem decide é o experimento".
3. **§ 2.2, o erro que ninguém vê.** "errado com '?'" e "errado sem aviso" em colunas separadas: um custa um clique da dona Cida, o outro chega errado à cliente. uma "acurácia" só esconderia a diferença que decide a ideia.
4. **§ 2.2 e § 2.4, cada ablação prova uma peça.** "sem a lista, o pedido exato cai de 47% para 27%; com o qwen, para 20%": o contexto e as regras do fluxograma ganharam o lugar com número, e o qwen saiu com número também.
5. **§ 2.4, o que o piloto não prova.** "a voz sintética `cadu` acertou 7 de 8 pedidos a 10 dB, e a `jeff`, 1 de 8": o aluno leu a própria tabela contra si, achou que o falante pesa mais que qualquer ablação, e mudou o desenho (teste separado por falante) em vez de comemorar.
6. **§ 2.4, não ajustar olhando o teste.** "não as corrigi olhando o teste; isso vai para os 3 falantes de ajuste": consertar as regras no mesmo conjunto que as mede faria o número subir sem a ideia melhorar.
7. **§ 3.4, a persona no lugar dela.** "a vantagem aparente do app vem do instrumento, não da ideia": o piloto com persona serve para achar o que quebrou no protocolo, e o aluno achou antes de comemorar o 35% contra 42%. a folha diz que ela não fala por nenhuma feirante. quem testa a ideia são as 6 a 8 feirantes do protocolo, com consentimento e comitê de ética.
