# cmp · exemplo excelente

> folha do artefato [competidores e contribuição](../3-competidores-e-contribuicao.md), preenchida a
> partir do [brw excelente](../brw/excelente.md). todos os links foram abertos em 16/10/2026.

## 0 · a minha ideia completa

**rastro da banca · colheita marcada.** feirantes usam as mensagens e áudios que já trocam com clientes para registrar pedidos; o cliente reserva e combina a hora de buscar. um transformer de voz transcreve no celular do feirante, regras tiram produto, quantidade e hora, e o feirante confere e confirma. antes da feira, o caderno junta as encomendas e diz o que levar; depois, se cada feirante aceitar, a associação vê só o total do que mais saiu.

## 1 · a ficha da ideia

- **cenário:** feira livre de bairro, com venda direta do produtor.
- **usuário:** feirante da agricultura familiar, que vende sozinho ou com a família.
- **problema do usuário:** perde pedidos anotados no papel e em áudios, e não sabe quanto colher e levar.
- **tecnologia:** transcrição de voz rodando no celular, e regras sobre a lista da banca.

## 2 · catálogo de ferramentas

ficha: **C**enário · **U**suário · **P**roblema · **T**ecnologia, cada um **=** igual, **≈** parecido ou **≠** diferente.

| ferramenta | o que faz | no que é bom | onde falha | C U P T |
|:--|:--|:--|:--|:-:|
| **[WhatsApp Business](https://whatsappbusiness.com/pt-br/)** | catálogo, etiquetas e respostas rápidas no WhatsApp. | é onde a conversa já acontece: feirantes de feira agroecológica já vendem por ele. | organiza conversas, não pedidos: nada soma o que levar. | = = ≈ ≠ |
| **o caderno da feirante** (a prática de hoje, achado no exp) | ouvir cada áudio e anotar o pedido à mão. | não custa nada, não depende de internet, e quem anota conhece cada cliente. | numa feira cheia, o pedido se perde entre um atendimento e outro; nada soma o que levar. | = = = ≠ |
| **[Kyte](https://www.kyteapp.com/pt)** | catálogo on-line, caixa e estoque para MEI; o pedido do catálogo chega pelo WhatsApp. | o pedido vira registro com status, e as vendas viram relatório. | o cliente precisa pedir pelo catálogo; áudio não vira pedido. | ≈ ≈ = ≠ |
| **[Anota AI](https://anota.ai/)** | robô com IA que atende pelo WhatsApp e manda o pedido para a cozinha. | entende pedido escrito em texto livre, no número do próprio negócio. | feito para cardápio fixo de restaurante; pago; os dados ficam na empresa (comprada pelo iFood). | ≠ ≈ ≈ ≈ |
| [Sementes](https://gitlab.com/eita/sementes) | plugin livre de WordPress para cestas agroecológicas, com ciclos de pedido. | brasileiro, livre, e o ciclo de pedido acompanha a colheita. | o pedido entra por um site; quem organiza é a cesta, não o feirante. | ≈ = ≈ ≠ |
| [Open Food Network](https://openfoodnetwork.org/) | loja coletiva de código aberto para hubs de produtores locais. | pensado para o circuito curto e para vários produtores juntos. | exige cadastro de produtos e computador; o cliente compra numa loja web. | ≈ = ≈ ≠ |
| [GrownBy](https://grownby.com/) | app de pré-encomenda e cestas, de uma cooperativa de agricultores dos EUA. | o pedido antes da colheita, com retirada marcada, e os donos são os agricultores. | EUA, inglês e cartão; o cliente precisa instalar o app. | ≈ ≈ ≈ ≠ |
| [Põe na Cesta](https://emater.df.gov.br/site-poenacesta) | vitrine da Emater-DF: busca por produtor, produto e comunidade. | gratuita, e ajuda cliente novo a achar o produtor. | só dá o contato: o pedido continua no telefone. | ≈ = ≠ ≠ |
| [Farmerline](https://farmerline.co/) | mensagens de voz em línguas locais para agricultores (Gana). | voz para quem não lê, em escala. | informa (clima, preço), não registra venda. | ≠ ≈ ≠ ≈ |
| [Whisper](https://github.com/openai/whisper) | modelo aberto de transcrição de fala. | transcreve português e roda em versões pequenas. | é uma peça, não um produto: ninguém vende com ele sozinho. | ≠ ≠ ≠ = |
| [Raízs](https://www.raizs.com.br/) | loja on-line de orgânicos de pequenos produtores, com entrega. | a compra é garantida e chega em casa. | ela é o intermediário: o produtor não fala com o cliente. | ≠ ≈ ≠ ≠ |
| **[agente de vendas da Meta](https://canaltech.com.br/apps/whatsapp-libera-ia-que-fala-pela-sua-empresa-e-funciona-24h-por-dia/)** (achado no passo 7) | IA dentro do WhatsApp Business que responde clientes, recomenda produtos e fecha vendas. | já está no app que o feirante usa, e começou grátis. | roda na nuvem da Meta; não soma encomendas nem planeja colheita. | ≈ ≈ ≈ ≈ |

## 3 · catálogo de artigos

| artigo (autores, ano, com link) | veículo | o que propõe | no que é bom | onde falha | C U P T |
|:--|:--|:--|:--|:--|:-:|
| **[Avaaj Otalo](https://doi.org/10.1145/1753326.1753434)** (Patel et al., 2010) | CHI · A1 | fórum de voz por telefone para pequenos agricultores na Índia. | 7 meses de campo com 51 agricultores: voz funciona para quem não usa texto. | perguntas sobre plantio, não venda. | ≈ ≈ ≈ ≈ |
| **[A Comparative Study of Speech and Dialed Input Voice Interfaces in Rural India](https://hci.stanford.edu/publications/2009/chi2009_patel.pdf)** (Patel et al., 2009) | CHI · A1 | compara fala e teclado do telefone com 45 agricultores. | mede o risco da minha ideia: com pouca escolaridade, o teclado completou mais tarefas que a fala. | só testa a entrada, não um serviço inteiro. | ≈ ≈ ≈ = |
| **[Infrastructuring Food Democracy](https://doi.org/10.1145/3359159)** (Prost et al., 2019) | CSCW (PACM HCI) · A1 | monta, com moradores e vendedores, um hub local de comida sobre o Open Food Network. | mostra o que sustenta a venda direta: relação entre pessoas, mais que a plataforma. | pedido por loja web; sem IA. | ≈ = = ≠ |
| [Food Democracy in the Making](https://doi.org/10.1145/3173574.3173907) (Prost et al., 2018) | CHI · A1 | redes locais de comida numa plataforma de venda direta, em bairros pobres. | as tensões entre preço justo, renda do produtor e quem governa a plataforma. | mesma rede do artigo de 2019, olhada antes. | ≈ = ≈ ≠ |
| [Job Opportunities through Entertainment](https://doi.org/10.1145/2470654.2481389) (Raza et al., 2013) | CHI · A1 | serviço de voz por telefone que se espalha por diversão, para quem lê pouco. | 85 mil usuários sem treino nenhum. | anúncios de emprego, não pedidos. | ≠ ≈ ≠ ≈ |
| [Whisper](https://proceedings.mlr.press/v202/radford23a.html) (Radford et al., 2023) | ICML · A1 | reconhecimento de fala treinado em 680 mil horas de áudio. | a base técnica da transcrição. | não sabe nada de feira: é uma peça. | ≠ ≠ ≠ = |
| [MobileLLM](https://proceedings.mlr.press/v235/liu24ce.html) (Liu et al., 2024) | ICML · A1 | modelos de linguagem com menos de 1 bilhão de parâmetros, para o celular. | mostra que um modelo pequeno no aparelho é viável. | avaliado em benchmarks, não com usuário. | ≠ ≠ ≠ ≈ |
| [A Situated-Infrastructuring of WhatsApp for Business](https://doi.org/10.1145/3613905.3651034) (De, 2024) | CHI EA · **resumo estendido** | como a Meta molda o WhatsApp Business na Índia. | o risco de depender de uma plataforma que muda as regras. | não é artigo completo: não conta como veículo de excelência. | ≈ ≈ ≈ ≠ |
| ["Business on WhatsApp is tough now"](https://arxiv.org/abs/2502.10913) (De, 2025) | arXiv | entrevista 14 donas de pequenos negócios sobre as mudanças no WhatsApp Business. | a voz de quem vende pelo WhatsApp. | arXiv, sem revisão por pares. | ≈ ≈ ≈ ≠ |
| [Sementes no Armazém do Campo](https://cadernos.aba-agroecologia.org.br/cadernos/article/view/8664) (Alvear et al., 2024) | Cadernos de Agroecologia · fora da lista | relato da construção do software Sementes para o MST-RJ. | brasileiro, e conta o que travava as cestas: a logística de pedidos. | relato técnico, fora da lista de veículos. | ≈ = ≈ ≠ |

## 4 · os 3 + 3 mais próximos

- **WhatsApp Business:** é onde o pedido nasce hoje; se ele já resolvesse, a minha ideia sobrava. ficou à frente do Sementes porque o Sementes pede que o cliente mude de canal.
- **Kyte:** o mais próximo em transformar pedido em registro para um pequeno vendedor. ficou à frente do Open Food Network porque roda no celular de quem vende.
- **Anota AI:** entra pela exceção "tecnologia próxima para um problema parecido": IA lendo pedido no WhatsApp, só que para restaurante. é o que mais ameaça a minha ideia.
- **Avaaj Otalo:** o único com os 4 parecidos: voz, agricultor pequeno, informação que circula entre eles.
- **fala vs. teclado (Patel et al., 2009):** mesma tecnologia (entrada por fala) para o mesmo usuário. escolhi porque ele pode me contrariar.
- **Infrastructuring Food Democracy:** entra pela exceção "o mesmo problema com tecnologia próxima": juntar pedidos de produtores locais para retirada, mas por loja web. ficou à frente do artigo de 2018 porque mostra o hub funcionando.

ficaram de fora: Whisper (só a tecnologia bate), MobileLLM (a ideia já não usa modelo de linguagem), o resumo estendido e o arXiv (não contam como veículo), e o Sementes, que guardo para a seção de trabalhos relacionados do artigo.

## 5 · a matriz

eixos tirados da conversa nova com os 6 trabalhos; os dois últimos são onde a minha ideia perde.

**✔** faz · **◐** faz em parte · **✘** não faz · **?** não achei evidência

| trabalho | o pedido entra pela conversa que já existe | entende áudio | vira pedido organizado | soma as encomendas e diz o que levar | os dados ficam com o vendedor | ajuda a achar cliente novo | testado com usuários reais |
|:--|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| WhatsApp Business | ✔ | ✘ | ◐ | ✘ | ◐ | ◐ | ✔ |
| Kyte | ◐ | ✘ | ✔ | ◐ | ✘ | ✔ | ✔ |
| Anota AI | ✔ | ? | ✔ | ✘ | ✘ | ✘ | ✔ |
| Avaaj Otalo | ✘ | ◐ | ✘ | ✘ | ✘ | ✘ | ✔ |
| fala vs. teclado (Patel, 2009) | ✘ | ✔ | ✘ | ✘ | ? | ✘ | ✔ |
| Infrastructuring Food Democracy | ✘ | ✘ | ✔ | ✔ | ◐ | ✔ | ✔ |
| agente de vendas da Meta | ✔ | ? | ◐ | ✘ | ✘ | ◐ | ◐ |
| **a minha ideia** | ✔ | ✔ | ✔ | ✔ | ✔ | ✘ | ✘ |

**evidência:**
- WhatsApp Business: conversa e catálogo são o produto; etiquetas organizam à mão; a conta é da Meta, mas as mensagens ficam no aparelho.
- Kyte: o pedido do catálogo cai no WhatsApp e no menu de pedidos; tem relatório de vendas e estoque; vitrine on-line.
- Anota AI: atende no WhatsApp do restaurante e manda o pedido para a cozinha. não achei no site se entende áudio: ficou "?".
- Avaaj Otalo: grava a voz, mas a navegação é por teclado e quem responde é gente; 51 agricultores por 7 meses.
- fala vs. teclado: o reconhecimento de fala é o objeto do estudo; 45 participantes.
- Infrastructuring Food Democracy: o hub junta os pedidos por ciclo; a plataforma é de uma cooperativa, não do vendedor.
- agente de vendas da Meta: responde e fecha vendas no WhatsApp, recomenda produtos; a liberação é gradual, e a reportagem não diz se entende áudio.

## 6 · a contribuição

**a frase:** o rastro da banca faz o pedido nascer do áudio que o cliente já manda, entendido no próprio celular do feirante, e soma as encomendas para dizer o que colher e levar, o que nenhum dos trabalhos faz junto; por isso o feirante organiza a venda sem mudar o jeito de vender e sem entregar os dados de quem compra dele.

**o trabalho mais próximo, e por que ele não chega lá:** o Anota AI entende o pedido na conversa, mas manda os dados para a nuvem de uma empresa e não planeja colheita: ele serve a quem cozinha o mesmo cardápio todo dia, não a quem colhe o que a semana deu.

## 7 · tentei derrubar

o que a conversa nova achou: o [agente de vendas com IA](https://canaltech.com.br/apps/whatsapp-libera-ia-que-fala-pela-sua-empresa-e-funciona-24h-por-dia/) que a Meta liberou dentro do próprio WhatsApp Business (junho de 2026). abri: ele responde clientes, recomenda produtos e fecha vendas.

o que eu mudei: entrou no catálogo e na matriz, e é agora o mais próximo. a frase ficou, porque ele roda na nuvem da Meta e não soma encomendas para a colheita. mas aprendi que "entender a conversa" deixou de ser diferencial: a minha contribuição está nos dados que ficam no celular e na colheita marcada.

## 8 · resumo, sem IA

o WhatsApp, o Kyte e agora a própria Meta já organizam pedidos de pequenos vendedores, e hubs como o de Prost juntam encomendas de produtores locais.  
nenhum entende o áudio no celular do feirante e diz o que colher.  
a minha ideia faz as duas coisas sem tirar a conversa do lugar.  
a pesquisa de Patel me avisa do risco: com pouca escolaridade, a fala erra mais que o teclado, e o piloto precisa medir isso.

## 9 · auditoria cega

**o veredito da conversa nova:**

| item | passa ou não passa | trecho que prova | o que encontrei |
|:--|:--|:--|:--|
| 1 · ferramentas | passa | 10 no catálogo, 3 escolhidas com motivo | abri WhatsApp Business, Kyte e Anota AI: existem e batem |
| 2 · artigos | **não passa** | um dos 3 escolhidos é de 2009 | a fala no celular mudou muito desde então |
| 3 · contribuição | passa | "a minha contribuição está nos dados que ficam no celular e na colheita marcada" | só o agente de vendas da Meta chega perto, e já está no § 7 |

**a minha resposta, sem IA:**
1. nada a mudar.
2. discordo: o artigo de 2009 é revisado por pares e é o único que mede a fala com quem lê pouco. ficou, e o risco que ele aponta está no resumo.
3. nada a mudar: a busca achou o mesmo concorrente que a derrubada do § 7.

## anotações do professor

cada anotação cita uma frase do exemplo e explica por que ela é o padrão que buscamos.

1. **§ 2, o catálogo.** "organiza conversas, não pedidos: nada soma o que levar": o "onde falha" é medido contra o usuário da ficha, e não é um defeito genérico. por isso a coluna serve para escolher.
2. **§ 3, veículo conferido.** "não é artigo completo: não conta como veículo de excelência": o aluno não se deixou levar pelo nome CHI. o resumo estendido e o arXiv ficam no catálogo, como fonte, mas não são escolhidos.
3. **§ 4, por que este e não o vizinho.** "escolhi porque ele pode me contrariar": a escolha dos próximos não é para ficar bem na foto. o artigo de 2009 mostra que a fala falha com quem lê pouco, e isso volta no resumo como risco a medir.
4. **§ 5, eixos do campo.** "os dois últimos são onde a minha ideia perde": os eixos vieram dos 6 trabalhos, não da ideia, e a ideia perde em dois. assim a matriz mede, em vez de enfeitar.
5. **§ 5, o "?".** "não achei no site se entende áudio: ficou '?'": um "?" honesto vale mais que um ✘ chutado. é ele que diz o que conferir antes da banca.
6. **§ 7, derrubada que muda a frase.** "'entender a conversa' deixou de ser diferencial": a conversa nova achou um concorrente real e a frase foi refeita em cima do que sobrou. contribuição é o que resiste a essa busca.
7. **§ 9, auditoria que reprova.** "discordo: o artigo de 2009 é revisado por pares": a auditoria veio na tabela do prompt, com trecho e links abertos, e reprovou um item, como deve fazer uma auditoria que começa de "não passa". o aluno respondeu, sem IA, item por item, e onde discordou deu o motivo. discordar vale tanto quanto corrigir, desde que você saiba dizer por quê.
