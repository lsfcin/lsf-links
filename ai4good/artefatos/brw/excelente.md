# brw · exemplo excelente

> preenchimento fictício, escrito para mostrar o padrão buscado. as anotações do professor estão no fim.

## 1 · onde atacar

**crise** (marque 1 com `x`):

| | crise |
|:-:|:--|
| [x] | alimentação com veneno e ultraprocessados (vs. feiras agroecológicas) |

por que esta crise: quando vou à feira, vejo produtor tentando vender o que trouxe sem saber quanto vai voltar para casa. quero que comprar direto seja conveniente e que quem planta tenha informação para negociar melhor.

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
| marketplace de produtores | aproxima oferta e procura e permite reservar. | catálogo parado não acompanha estoque vendido na banca; cadastrar tudo vira outro trabalho. |
| chatbot de alimentação saudável | responde dúvidas na hora da compra. | saber que verdura faz bem não resolve disponibilidade, deslocamento ou renda do produtor. |
| mapa de feiras | ajuda quem não sabe onde comprar. | localização não informa se ainda há o produto quando a pessoa chega. |
| campanha “compre local” | dá visibilidade e pode trazer a primeira compra. | depende de disposição moral; não garante conveniência para a próxima compra. |
| dashboard de preços | ajuda a perceber diferenças e negociar. | uma média sem unidade, qualidade e horário compara produtos diferentes e pode apertar ainda mais o produtor. |

## 3 · matriz 3 × 3 e a minha ideia

cada célula: **nome** · frase de até 20 palavras (quem usa, o que faz).

| | 1 · plataformas de dois lados | 2 · mensageria leve e bots | 3 · pagamento instantâneo |
|:--|:--|:--|:--|
| **A · visão e OCR** | **lote à vista** · produtor fotografa lotes; visão sugere produtos para compradores compatíveis, com quantidade e qualidade confirmadas pelo produtor. | **placa que responde** · feirante fotografa sua placa; OCR transforma preços em mensagem de disponibilidade para clientes. | **confere banca** · feirante fotografa pedido numerado; OCR recupera referência e confere recebimento Pix por integração autorizada. |
| **B · modelos locais** | **encaixa colheita** · produtor descreve oferta; modelo local estrutura condições para encontrar cozinhas com pedidos compatíveis. | **rastro da banca** · feirante transforma mensagens próprias em pedidos organizados no aparelho, sem redigitar nomes e quantidades. | **sobra quanto** · produtor consulta registros locais; modelo explica margem após conferir custos e pagamentos Pix, com contas determinísticas. |
| **C · voz** | **pregão falado** · produtor anuncia lote por voz; compradores recebem ofertas estruturadas e devolvem contrapropostas faladas. | **reserva no gogó** · feirante dita disponibilidade no WhatsApp; cliente responde por áudio e recebe reserva para retirada. | **recebe e escuta** · feirante ouve confirmação de Pix recebido, consultada na conta autorizada, enquanto pesa produtos. |

**as 9 no mapa impacto × viabilidade:**

| | viabilidade alta | viabilidade baixa |
|:--|:--|:--|
| **impacto alto** | **rastro da banca** — pode tornar a venda direta recorrente sem outro cadastro; o caderno privado cabe num piloto com poucas bancas.<br>**reserva no gogó** — pode tornar a compra direta previsível para quem hoje depende do supermercado; reservas com retirada presencial cabem no semestre. | **lote à vista** — pode abrir compradores para lotes antes vendidos ao atravessador; exige atualizar disponibilidade e reunir os dois lados.<br>**encaixa colheita** — pode orientar carregamentos por pedidos de cozinhas; exige compradores comprometidos e condições comerciais comparáveis.<br>**pregão falado** — pode ampliar a negociação direta entre produtores e compradores; exige participação simultânea e confirmação das contrapropostas. |
| **impacto baixo** | **placa que responde** — melhora divulgação, mas sozinha não reorganiza a venda; fotografar e converter poucas placas é testável.<br>**confere banca** — reduz erros de conferência, mas não cria compradores; um piloto com pedidos numerados e integração autorizada é delimitado.<br>**recebe e escuta** — poupa consultas à tela, mas não muda a negociação; confirmar recebimentos de uma conta é um teste delimitado. | **sobra quanto** — melhora a gestão individual, mas sozinho não reorganiza o acesso ao mercado; reunir custos confiáveis é mais difícil que explicar pagamentos. |

onde discordei da IA, e por quê: a IA colocou “rastro da banca” em viabilidade baixa porque seria preciso integrar várias feiras. passei para alta porque consigo testar primeiro o caderno privado com poucas bancas, comparando tempo e erros com a anotação atual. isso testa o benefício que sustentaria a adesão; não comprova ainda que uma rede coletiva funciona. mantive “encaixa colheita” em baixa porque não consigo simular compromisso de compra só com um protótipo.

**minha ideia escolhida:** **rastro da banca** · feirante transforma suas mensagens de negociação em um caderno privado de pedidos, confirmando os campos antes de registrar.

**por que ela, sem IA, em até 3 linhas:**

escolho o rastro da banca porque o feirante ganha um caderno útil já no primeiro pedido.  
eu consigo comparar esse uso com a anotação atual sem montar uma plataforma com compradores novos.  
quero começar poupando trabalho de quem vende; depois posso ligar esse registro à organização da próxima feira.

## 4 · motores

| motor | o que foi [verbo] | nome | frase | o que mudou em relação à ideia |
|:--|:--|:--|:--|:--|
| inverter | quem faz o primeiro pedido: antes o feirante oferecia; agora a cozinha pede primeiro. | **pedido antes da roça** | cozinhas anunciam necessidades recorrentes; produtores transformam essas mensagens em propostas de fornecimento antes da colheita. | o caderno deixa de começar na oferta do feirante: o comprador declara sua necessidade e o produtor responde antes de preparar o carregamento. |
| canalizar | a conferência das próprias vendas, que o feirante já faz para não perder dinheiro. | **rastro coletivo** | ao conferir suas vendas para não perder dinheiro, feirantes geram tendências agregadas que ajudam a planejar os próximos carregamentos. | a conferência que interessa ao próprio feirante produz um sinal coletivo, com consentimento; ninguém precisa preencher um relatório para ajudar os outros. |
| transplantar | o agendamento por horário, das consultas médicas para a retirada na feira. | **janela de retirada** | como no agendamento de consultas, clientes reservam horários; o caderno distribui separação e atendimento ao longo da feira. | o pedido passa a ocupar uma janela com capacidade limitada; o mecanismo de agenda entra na organização da banca. |
| reescalar | o tamanho da operação: de uma banca inteira para uma caixa. | **feira de uma caixa** | como hipótese de redução cem vezes, o caderno organiza uma caixa compartilhada por moradores de um prédio, sem banca completa. | a unidade de operação passa da banca inteira para uma caixa; o teste muda para divisão de produtos e retirada num prédio. |
| trocar a persona | saiu o feirante, entrou a cozinheira de restaurante pequeno. | **compra da cozinha** | cozinheira de restaurante pequeno transforma mensagens de fornecedores em pedidos comparáveis e calcula custo por porção com contas verificáveis. | quem usa o caderno passa a ser a compradora; a decisão deixa de ser quanto levar à feira e passa a ser quanto custa servir. |
| trocar o contexto | do horário da feira para a troca de turno de quem trabalha. | **feira no intervalo** | produtores organizam pelo caderno reservas de trabalhadores de turno, com retirada na troca de expediente. | o atendimento sai do horário habitual da feira e acompanha o expediente dos compradores; pedidos precisam respeitar essa janela. |
| trocar a tecnologia | de modelo local para rede neural de grafos. | **frete de volta** | uma rede neural de grafos estima tempos de viagens de retorno para transportar os lotes registrados; produtores comparam custos antes de aceitar. | o registro de pedidos vira entrada para coordenar transporte; redes de grafos, fora da matriz, estimam tempos, e regras verificam capacidade e custo. |
| juntar | rastro da banca + reserva no gogó. | **colheita marcada** | juntar o rastro da banca à reserva no gogó permite consolidar encomendas antes do carregamento e combinar retirada por áudio. | o caderno deixa de apenas organizar mensagens: reserva confirmada e retirada combinada passam a orientar separação e carregamento. |
| restringir | a tela: o feirante não pode olhar o celular enquanto atende. | **banca sem tela** | sem olhar o celular durante atendimento, feirante dita pedidos e escuta os campos que precisam de confirmação. | a operação precisa funcionar por voz durante o trabalho; a tela deixa de ser uma etapa obrigatória para confirmar o pedido. |

## 5 · o que fica e o que sai

**o que eu gostei:** gostei da colheita marcada porque o registro passa a ajudar antes de sair para a feira. também quero a banca sem tela: se eu tiver de parar o atendimento para preencher um formulário, perdi a vantagem que me fez escolher o rastro.

**o que achei interessante:** no rastro coletivo, conferir a própria venda para não perder dinheiro também ajuda a decidir o próximo carregamento. eu não teria pensado que um caderno particular pudesse virar informação para a associação sem expor cada banca.

**o que eu descarto, e por quê:** deixo frete de volta para depois porque exige transportadores e outro problema de previsão. descarto a feira de uma caixa neste semestre: dividir produtos num prédio não testa o atendimento de uma banca. pedido antes da roça continua interessante, mas depende de cozinhas comprometidas antes de entregar valor ao produtor.

**minha ideia completa:** **rastro da banca · colheita marcada**

feirantes aproveitam mensagens e áudios habituais para registrar pedidos; clientes reservam produtos e combinam uma janela de retirada.  
transformers de voz e um modelo local extraem os campos; o feirante confirma por voz, e regras organizam horários, contas e recebimentos.  
antes da feira, o caderno consolida encomendas para orientar o carregamento; depois, vendas confirmadas alimentam tendências coletivas mediante consentimento.  
a associação compartilha apenas tendências amplas de quantidade, sem preços individuais nem estoque atual: comprar direto ganha conveniência e o produtor ganha informação para negociar.

## 6 · refinamento

**a · e se todo mundo usasse?** como hipótese para cinco anos, imagino uma rede nacional de feiras, governada pelas associações, coordenando carregamentos por reservas e vendas observadas. o produtor venderia direto, sem atravessador, com compradores recorrentes e informação própria para negociar. famílias garantiriam produtos e retirada sem percorrer bancas à toa; menos comida voltaria sem venda. o feirante entra para trabalhar menos e vender mais; o cliente, para garantir sua compra. essa conveniência alimenta a rede.

**b · a IA que não pode faltar.** técnica: transformers para reconhecimento de fala e um modelo de linguagem pequeno executado localmente

por que sem ela não roda: o primeiro transcreve áudio; o segundo extrai produto, unidade, quantidade e retirada, apontando ambiguidades sem inventar conversões. cálculos, horários e conferência de pagamento usam regras. sem os modelos, seria possível registrar vendas manualmente, mas desapareceria o mecanismo central: reaproveitar a conversa habitual sem exigir outro cadastro. a indispensabilidade depende de demonstrar essa economia de esforço em campo; se um formulário for tão fácil quanto, retiro a alegação e volto aos motores.

**c · críticas de quem está de fora**

| crítica | saída 1 | saída 2 | minha decisão |
|:--|:--|:--|:--|
| barulho, sotaque e “meia caixa” podem virar quantidade ou preço errado; confirmar tudo pode custar mais trabalho que anotar. | começar com poucos produtos e confirmação falada de quantidade, unidade e preço. | começar com mensagens escritas; incorporar voz somente após medir erros e tempo. | escolho a primeira numa feira piloto, comparando esforço e erros com o caderno atual. se não poupar trabalho com segurança, adoto a segunda antes de ampliar. |
| feirantes podem abandonar mais uma ferramenta; vendas de quem aderiu não representam toda a procura, especialmente sem dinheiro e aparelhos compatíveis. | apoiar o piloto numa associação, aceitar confirmação de vendas em dinheiro e informar cobertura e lacunas nos resumos. | começar apenas com o caderno privado e reservas de clientes habituais, em aparelhos disponíveis, adiando sinais coletivos. | começo pela segunda para testar se o benefício sustenta o uso. só avanço ao coletivo com a primeira; nunca chamo venda observada de demanda total. |
| um comprador grande pode inferir quem está com sobra e pressionar preços; numa feira pequena, retirar nomes não impede identificação. | restringir acesso aos participantes, suprimir recortes com poucas bancas e atrasar publicação. | compartilhar apenas tendências amplas de quantidade; manter preços, clientes e estoque atual no aparelho. | escolho a segunda com supressão de grupos pequenos. a associação administra permissões; sem proteção contra inferência, mantenho apenas o uso privado enquanto redesenho o compartilhamento. |

## 7 · resumo, sem IA

a concentração do varejo deixa o produtor familiar com pouca informação para organizar sua venda direta.  
o rastro da banca · colheita marcada transforma conversas em pedidos confirmados, reservas e retiradas combinadas.  
transformers de voz e um modelo local extraem os campos; regras conferem contas e organizam horários.  
em escala, uma rede nacional de feiras poderia orientar carregamentos e sustentar vendas sem atravessador, com menos comida perdida.  
cada feirante usa para trabalhar menos e vender mais; cada cliente, para garantir produto e retirada.

## anotações do professor

- “catálogo parado” identifica uma limitação concreta do marketplace; “sem redigitar nomes e quantidades” transforma essa limitação em requisito.
- “não comprova ainda que uma rede coletiva funciona” delimita a discordância com a IA: testar o caderno sustenta a viabilidade inicial, sem fingir que valida toda a visão.
- “reserva confirmada e retirada combinada passam a orientar separação e carregamento” mostra uma mudança de mecanismo. os nove motores partem da mesma ideia e explicam o que mudou.
- “antes da feira” e “depois, vendas confirmadas alimentam tendências coletivas” mostram uma mistura efetiva: juntar melhora o carregamento, canalizar produz informação coletiva e restringir permite confirmar durante o atendimento.
- “uma rede nacional de feiras” e “sem atravessador” permitem imaginar uma transformação concreta; “trabalhar menos e vender mais” e “garantir sua compra” explicam a adesão individualista.
- “se um formulário for tão fácil quanto, retiro a alegação” põe a IA à prova. “nunca chamo venda observada de demanda total” e “manter preços, clientes e estoque atual no aparelho” mostram críticas incorporadas às decisões.
