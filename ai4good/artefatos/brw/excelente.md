# brw · exemplo excelente

> preenchimento fictício, escrito para mostrar o padrão buscado. as anotações do professor estão no fim.

## 1 · onde atacar

**crise** (marque 1 com `x`):

| | crise |
|:-:|:--|
| [x] | alimentação com veneno e ultraprocessados (vs. feiras agroecológicas) |

por que esta crise: na feira do meu bairro vejo produtor tentando vender o que trouxe sem saber quanto vai voltar para casa. enquanto isso, comprar no supermercado é mais fácil, e lá a prateleira mais à mão é de biscoito e refrigerante. quero que comprar comida fresca direto de quem planta seja tão fácil quanto.

**tecnologias de IA** (marque 3 e chame de A, B, C):

| | tecnologia de IA |
|:-:|:--|
| [x] A | visão computacional e OCR |
| [x] B | modelos locais / no aparelho (*SLMs*, 1B–7B) |
| [x] C | voz (fala ↔ texto) e interfaces sem tela |

**infraestruturas tradicionais** (marque 3 e chame de 1, 2, 3):

| | infraestrutura |
|:-:|:--|
| [x] 1 | plataformas de dois lados (*matching*, como Uber) |
| [x] 2 | mensageria leve e bots (WhatsApp, SMS) |
| [x] 3 | pagamento instantâneo (Pix, moeda local) |

## 2 · clichês

| clichê | o que acerta | onde fica raso |
|:--|:--|:--|
| marketplace de produtores | aproxima quem vende de quem compra e permite reservar. | o catálogo fica parado: não sabe o que já foi vendido na banca, e cadastrar tudo vira outro trabalho para o feirante. |
| chatbot de alimentação saudável | responde dúvidas na hora da compra. | saber que verdura faz bem não resolve se ela está à venda perto, nem a renda de quem planta. |
| mapa de feiras | ajuda quem não sabe onde comprar. | diz onde é a feira, não se ainda tem o produto quando a pessoa chega. |
| campanha "compre local" | dá visibilidade e pode trazer a primeira compra. | depende de boa vontade; não deixa a segunda compra mais fácil. |
| painel de preços | ajuda a comparar e negociar. | uma média de preço não diz unidade, qualidade nem horário: compara coisas diferentes e pode apertar ainda mais o produtor. |

## 3 · matriz 3 × 3 e a minha ideia

cada célula: **nome** · frase de até 20 palavras (quem usa, o que faz).

| | 1 · plataformas de dois lados | 2 · mensageria leve e bots | 3 · pagamento instantâneo |
|:--|:--|:--|:--|
| **A · visão e OCR** | **lote à vista** · produtor fotografa os lotes; compradores próximos veem o que tem e quanto, e o produtor confirma. | **placa que responde** · feirante fotografa a placa de preços; o OCR vira mensagem de "tem hoje" para os clientes. | **confere banca** · feirante fotografa o pedido numerado; o app acha o Pix daquele pedido e mostra se já caiu. |
| **B · modelos locais** | **encaixa colheita** · produtor diz o que vai colher; o modelo no celular acha cozinhas que pediram aquilo. | **rastro da banca** · feirante transforma as mensagens que já troca com clientes em pedidos organizados, sem redigitar. | **sobra quanto** · produtor pergunta quanto sobrou na semana; o modelo explica, e as contas são feitas por fórmula. |
| **C · voz** | **pregão falado** · produtor anuncia o lote por voz; compradores recebem a oferta escrita e respondem por áudio. | **reserva no gogó** · feirante dita no WhatsApp o que tem; cliente responde por áudio e reserva para buscar. | **recebe e escuta** · feirante ouve "Pix de 23 reais recebido" enquanto pesa, sem pegar o celular. |

**as 9 no mapa impacto × viabilidade:**

| | viabilidade alta | viabilidade baixa |
|:--|:--|:--|
| **impacto alto** | **rastro da banca** — pode tornar a compra direta um hábito, sem cadastro extra; dá para testar com poucas bancas.<br>**reserva no gogó** — deixa a compra direta garantida para quem hoje vai ao supermercado por segurança; reserva com retirada cabe no semestre. | **lote à vista** — pode tirar o atravessador da venda dos lotes; mas precisa juntar compradores e manter a oferta em dia.<br>**encaixa colheita** — o pedido das cozinhas guiaria o que levar; mas precisa de cozinhas que se comprometam a comprar.<br>**pregão falado** — amplia a negociação direta; mas precisa de produtor e comprador ao mesmo tempo. |
| **impacto baixo** | **placa que responde** — divulga, mas sozinha não muda a venda; fácil de testar com poucas placas.<br>**confere banca** — evita erro na conferência, mas não traz cliente novo; teste pequeno.<br>**recebe e escuta** — poupa olhar a tela, mas não muda a negociação; teste pequeno. | **sobra quanto** — ajuda cada um a se organizar, mas não abre mercado; juntar custos confiáveis é difícil. |

**as duas perguntas: o argumento do interesse próprio e a alternativa sem IA:**

| ideia | quem usa ganha, para si | o que custa a ele | o que resolve sem IA avançada | se sustenta? |
|:--|:--|:--|:--|:--|
| lote à vista | o produtor vende o lote sem levar à feira | uma foto por lote, e manter a oferta em dia | um grupo com fotos mostra o lote, mas não diz quanto tem; a visão estima | sim |
| placa que responde | o feirante avisa os clientes sem digitar | uma foto da placa que ele já escreve | um leitor pronto copia a placa, mas não avisa cada cliente do que ele costuma levar | sim |
| confere banca | o feirante sabe se o Pix daquele pedido caiu | fotografar cada pedido no pico da feira, com a fila esperando | o extrato do banco | **não**: olhar o extrato custa menos |
| encaixa colheita | o produtor vende antes de colher | dizer o que vai colher | uma planilha, se as cozinhas preencherem; o modelo lê o pedido como ele chega | sim |
| rastro da banca | o feirante tem um caderno de pedidos sem redigitar | nenhum gesto novo: as mensagens já existem | uma planilha, se o feirante redigitar cada mensagem; o modelo lê áudio e texto soltos sem redigitar | sim |
| sobra quanto | o produtor sabe quanto sobrou na semana | anotar cada custo, toda semana, antes de ver qualquer ganho | uma planilha de custos | **não**: o custo vem antes do ganho, e a planilha resolve |
| pregão falado | o produtor negocia o lote sem viajar | um áudio, e esperar comprador | o áudio do WhatsApp negocia um a um; a voz vira oferta escrita para muitos | sim |
| reserva no gogó | o feirante sai de casa com venda garantida | o áudio que ele já manda | nada pronto junta áudios soltos em reservas com hora de buscar | sim |
| recebe e escuta | o feirante confere o Pix sem largar a balança | nada | um aviso sonoro simples, sem IA avançada | **não**: a alternativa sem IA resolve |

onde discordei da IA, e por quê: a IA pôs o rastro da banca em viabilidade baixa porque teria de ligar várias feiras. passei para alta: consigo testar o caderno com 3 ou 4 bancas, comparando tempo e erros com o caderno de papel. isso não prova que a rede inteira funciona, só que o feirante ganha algo logo no começo. mantive o encaixa colheita em baixa: não dá para simular cozinha que se compromete a comprar só com um protótipo.

**minha ideia escolhida:** **rastro da banca** · feirante transforma suas mensagens de negociação num caderno de pedidos só dele, confirmando cada pedido antes de salvar.

**por que ela, sem IA, em até 3 linhas:**

escolho o rastro da banca porque o feirante ganha um caderno útil já no primeiro pedido.  
consigo comparar com o jeito que ele anota hoje, sem montar uma plataforma com compradores novos.  
quero começar poupando trabalho de quem vende; depois ligo esse registro à organização da próxima feira.

## 4 · motores

| motor | o que foi [verbo] | nome | frase | o que mudou em relação à ideia | o que quem usa ganha para si | se sustenta nas duas perguntas? |
|:--|:--|:--|:--|:--|:--|:--|
| inverter | quem faz o primeiro pedido: antes o feirante oferecia; agora a cozinha pede primeiro. | **pedido antes da roça** | cozinhas mandam o que precisam toda semana; o produtor responde com uma proposta antes de colher. | o caderno não começa mais na oferta do feirante: o comprador diz o que quer e o produtor responde antes de montar a carga. | o produtor vende antes de colher, sem sobra. | sim |
| canalizar | a conferência das próprias vendas, que o feirante já faz para não perder dinheiro. | **rastro coletivo** | ao conferir as próprias vendas, os feirantes juntos mostram o que mais sai e ajudam a planejar a próxima feira. | a conta que cada um já faz para si vira informação para todos, se ele aceitar; ninguém preenche relatório para ajudar os outros. | a conta que já faz, sem passo a mais. | sim |
| transplantar | o agendamento por horário, das consultas médicas para a retirada na feira. | **janela de retirada** | como numa consulta, o cliente marca a hora de buscar; o caderno espalha o trabalho de separar ao longo da feira. | o pedido ganha hora marcada, com vagas limitadas por horário. | separa os pedidos fora do pico. | **não**: um app de agendamento resolve |
| reescalar | o tamanho da operação: de uma banca inteira para uma caixa. | **feira de uma caixa** | os moradores de um prédio dividem uma caixa de feira; o caderno organiza quem pegou o quê. | em vez de uma banca inteira, uma caixa; o teste vira dividir produtos num prédio. | o morador faz feira barata sem ir à feira. | **não**: uma planilha resolve |
| trocar a persona | saiu o feirante, entrou a cozinheira de restaurante pequeno. | **compra da cozinha** | a dona de um restaurante pequeno organiza as mensagens dos fornecedores e vê quanto custa cada prato. | quem usa passa a ser quem compra; a pergunta vira quanto custa servir. | sabe quanto custa cada prato. | sim |
| trocar o contexto | do horário da feira para a troca de turno de quem trabalha. | **feira no intervalo** | produtores atendem reservas de quem trabalha por turno, com retirada na troca de expediente. | a feira vai até o horário de quem não consegue ir de manhã. | compra direto no horário que tem. | sim |
| trocar a tecnologia | de modelo local para rede neural de grafos. | **frete de volta** | uma rede neural de grafos estima o tempo de caminhões que voltam vazios; o produtor compara o custo antes de aceitar. | os pedidos viram carga para um frete que já existe; a rede de grafos estima os tempos e regras simples conferem custo e espaço. | o produtor paga menos frete. | sim |
| juntar | rastro da banca + reserva no gogó. | **colheita marcada** | as reservas por áudio entram no caderno antes da feira, e o produtor sabe o que levar. | o caderno deixa de só organizar mensagens: reserva confirmada e hora de buscar passam a dizer o que colher e levar. | o produtor leva só o que já foi reservado. | sim |
| restringir | a tela: o feirante não pode olhar o celular enquanto atende. | **banca sem tela** | sem olhar o celular, o feirante dita o pedido e ouve só o que precisa confirmar. | tudo tem de funcionar por voz durante o trabalho; a tela deixa de ser obrigatória. | registra sem largar a balança. | sim |

## 5 · o que fica e o que sai

**o que eu gostei:** da colheita marcada, porque o caderno passa a ajudar antes de sair para a feira. e da banca sem tela: se o feirante tiver de parar o atendimento para preencher formulário, perde a vantagem que me fez escolher o rastro.

**o que achei interessante:** no rastro coletivo, a conta que cada feirante já faz para não perder dinheiro também ajuda a decidir a próxima carga. eu não teria pensado que um caderno particular pudesse virar informação para a associação sem expor ninguém.

**o que eu descarto, e por quê:** o frete de volta fica para depois: precisa de transportadores e é outro problema. descarto a feira de uma caixa neste semestre: dividir produtos num prédio não testa o atendimento de uma banca. o pedido antes da roça continua interessante, mas só funciona com cozinhas comprometidas antes de o produtor ganhar alguma coisa.

**minha ideia completa:** **rastro da banca · colheita marcada**

feirantes usam as mensagens e áudios que já trocam com clientes para registrar pedidos; o cliente reserva e combina a hora de buscar.  
um transformer de voz transcreve, e um modelo pequeno no celular tira produto, quantidade e hora; o feirante confirma falando, e as contas são feitas por regra.  
antes da feira, o caderno junta as encomendas e diz o que levar; depois, se cada feirante aceitar, a associação vê só o total do que mais saiu, sem preço nem cliente de ninguém.  
comprar comida fresca fica tão garantido quanto ir ao supermercado: menos famílias trocam a feira pelo biscoito e pelo congelado por falta de tempo, e o produtor vende mais sem atravessador.

## 6 · refinamento

**a · e se todo mundo usasse?**

o tamanho da crise hoje:
- 80,5% das crianças de 6 meses a 2 anos já comem ultraprocessados ([ENANI-2019, Pesquisa FAPESP](https://revistapesquisa.fapesp.br/anemia-e-deficiencia-de-nutrientes-caem-e-excesso-de-peso-cresce-entre-criancas-de-ate-5-anos/)).
- o consumo de ultraprocessados está ligado a cerca de 57 mil mortes prematuras por ano no Brasil, 10,5% das mortes entre 30 e 69 anos ([Nilson et al., 2022, AJPM](https://www.elsevier.com/about/press-releases/ultraprocessed-foods-linked-to-premature-deaths)).
- hipertensão, diabetes e obesidade custaram R$ 3,45 bilhões ao SUS em 2018 ([Nilson et al., 2020, OPAS](https://journal.paho.org/en/articles/costs-attributable-obesity-hypertension-and-diabetes-unified-health-system-brazil-2018)).
- só o Carrefour, grupo francês, faturou R$ 115,4 bilhões em 2023, cerca de 11% de tudo o que os supermercados venderam no país, R$ 1 trilhão ([ranking ABRAS, SuperVarejo](https://www.supervarejo.com.br/varejo/carrefour-lidera-pela-oitava-vez-consecutiva-o-ranking-abras)).

se todo mundo usasse por 5 anos (a minha aposta):
- se as feiras com reserva ficassem com 5% do que hoje vai para os supermercados, seriam uns R$ 50 bilhões por ano pagos direto a quem planta e circulando no bairro, em vez de irem para o caixa de grandes grupos.
- se isso tirasse 10% das calorias de ultraprocessados da mesa, o mesmo estudo das 57 mil mortes estima cerca de 5,9 mil vidas poupadas por ano, e uma parte dos R$ 3,45 bilhões do SUS deixaria de ser gasta.
- as crianças comeriam mais fruta e verdura em casa, porque a família garante a feira da semana em vez de completar a despensa com biscoito.

por que cada pessoa usaria: o feirante, para trabalhar menos e vender mais; o cliente, para garantir o que quer sem viagem perdida. ninguém precisa querer ajudar.

**b · a IA que não pode faltar.** técnica: um transformer de reconhecimento de fala e um modelo de linguagem pequeno rodando no celular

por que sem ela não roda: o primeiro transforma o áudio em texto; o segundo tira produto, unidade, quantidade e hora, e pergunta quando algo está ambíguo ("meia caixa de quê?"). contas, horários e Pix são feitos por regra. sem os modelos, o feirante poderia anotar tudo à mão, mas aí some o que faz a ideia funcionar: aproveitar a conversa que ele já tem, sem cadastro extra. se no teste um formulário simples for tão fácil quanto, eu retiro a IA e volto aos motores.

**c · críticas de quem está de fora**

| crítica | saída 1 | saída 2 | minha decisão |
|:--|:--|:--|:--|
| barulho e sotaque viram pedido errado. | começar com poucos produtos e confirmar por voz quantidade, unidade e preço. | começar só com mensagens escritas e pôr a voz depois. | **saída 1**, numa feira piloto, medindo erros e tempo contra o caderno de papel. |
| feirantes largam mais um app. | apoiar o piloto numa associação de feirantes. | começar só com o caderno de cada um e clientes que já compram dele. | **saída 2**: primeiro o feirante precisa ganhar algo sozinho; a parte coletiva vem depois. |
| um comprador grande descobre quem está com sobra e força o preço para baixo. | só participantes veem os dados, e com atraso. | a associação vê só o total do que mais saiu; preço, cliente e estoque ficam no celular de cada um. | **saída 2**: se nem o total for seguro numa feira pequena, fica só o caderno particular. |

## 7 · resumo, sem IA

as famílias trocam a feira por ultraprocessado porque o supermercado é mais garantido, e o produtor vende sem saber o que vai sobrar.  
o rastro da banca · colheita marcada transforma as conversas da banca em pedidos confirmados, com reserva e hora de buscar.  
um transformer de voz e um modelo no celular tiram os dados do áudio; regras fazem as contas.  
se todo mundo usasse, bilhões passariam a ir direto para quem planta, e menos ultraprocessado chegaria à mesa das crianças.  
o feirante usa para trabalhar menos e vender mais; o cliente, para garantir o que quer.

## 8 · auditoria cega

**o veredito da conversa nova:**

| item | passa ou não passa | trecho que prova | o que já resolve sem IA avançada |
|:--|:--|:--|:--|
| 1 · brw completo | passa | todas as seções, do § 1 ao resumo | — |
| 2 · impacto claro | passa | "80,5% das crianças de 6 meses a 2 anos já comem ultraprocessados"; "trabalhar menos e vender mais" | — |
| 3 · ia avançada | **não passa** | "um transformer de voz e um modelo no celular tiram os dados do áudio" | o catálogo do WhatsApp Business já recebe reservas |

**a minha resposta, sem IA:**
1. nada a mudar.
2. nada a mudar.
3. discordo em parte: a cliente reserva por áudio no meio da conversa e não abre o catálogo. mas é uma aposta, então o § 6b diz o teste que me faria retirar a IA.

## anotações do professor

cada anotação cita uma frase do exemplo e explica por que ela é o padrão que buscamos.

1. **§ 1, por que esta crise.** "vejo produtor tentando vender o que trouxe sem saber quanto vai voltar para casa": a crise começa numa cena que o aluno viu de verdade. uma frase como "alimentação é importante" serviria para qualquer pessoa; esta só serve para ele, e mostra que ele conhece o problema de perto.
2. **§ 2, clichês.** "o catálogo fica parado: não sabe o que já foi vendido na banca": o clichê (marketplace) não é criticado por ser comum, mas pelo que dá errado na feira. e essa falha vira a ideia dele: registrar pedidos "sem redigitar".
3. **§ 3, matriz.** "feirante dita no WhatsApp o que tem; cliente responde por áudio e reserva para buscar": dá para ver quem faz o quê, com qual ferramenta. toda célula da matriz tem de ser lida assim, sem o leitor precisar perguntar "como assim?".
4. **§ 3, onde discordei da IA.** "consigo testar o caderno com 3 ou 4 bancas, comparando tempo e erros com o caderno de papel": discordar da IA vale quando você mostra um teste que cabe no semestre, e não só a sua opinião.
5. **§ 3, o argumento do interesse próprio.** "fotografar cada pedido no pico da feira, com a fila esperando": a pergunta olha o gesto de quem usa, não a tecnologia. o confere banca é viável e mesmo assim não se sustenta, porque olhar o extrato custa menos. e a escolhida se sustenta sem pedir gesto novo: as mensagens já existem. a alternativa sem IA corta junto: três das quatro de impacto baixo têm um extrato, uma planilha ou um aviso sonoro que já resolve, e nos motores a janela de retirada é só um app de agendamento.
6. **§ 4, motores.** "o comprador diz o que quer e o produtor responde antes de montar a carga": isto é inverter de verdade, porque mudou quem começa o pedido. a coluna "o que foi invertido" diz isso em uma linha; se você não consegue escrevê-la, o motor não foi usado.
7. **§ 5, o que eu descarto.** "dividir produtos num prédio não testa o atendimento de uma banca": descartar com motivo é o que faz a ideia completa ser uma escolha, e não uma soma de tudo o que apareceu.
8. **§ 6a, e se todo mundo usasse.** "80,5% das crianças de 6 meses a 2 anos já comem ultraprocessados" e "uns R$ 50 bilhões por ano pagos direto a quem planta": primeiro o tamanho do problema, com número e fonte; depois uma aposta com número, que diz de qual dado parte e pode dar errado. e "trabalhar menos e vender mais" é interesse próprio, como no Waze: ninguém precisa querer ajudar.
9. **§ 6b e 6c, a IA e as críticas.** "se um formulário simples for tão fácil quanto, eu retiro a IA": o aluno diz o que provaria que a IA não é necessária. nas críticas, "barulho e sotaque viram pedido errado" só vale para esta ideia, e cada linha termina com **uma** decisão.
