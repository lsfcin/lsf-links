# cmp · exemplo quase bom / sem alma

> folha do artefato [competidores e contribuição](../3-competidores-e-contribuicao.md), preenchida a
> partir do [brw quase bom](../brw/raso.md). tudo está preenchido; as anotações dizem por que não basta.

## 0 · a minha ideia completa

**feira conectada.** uma plataforma que reúne produtores familiares e consumidores interessados em alimentação saudável, com cadastro de produtos e compras. o modelo local analisa os dados para apresentar recomendações personalizadas; o sistema terá chatbot, dashboard, integração com WhatsApp e pagamento por Pix.

## 1 · a ficha da ideia

- **cenário:** feiras e alimentação saudável.
- **usuário:** produtores e consumidores.
- **problema do usuário:** falta de conexão entre quem produz e quem consome.
- **tecnologia:** inteligência artificial.

## 2 · catálogo de ferramentas

ficha: **C**enário · **U**suário · **P**roblema · **T**ecnologia, cada um **=** igual, **≈** parecido ou **≠** diferente.

| ferramenta | o que faz | no que é bom | onde falha | C U P T |
|:--|:--|:--|:--|:-:|
| **[Raízs](https://www.raizs.com.br/)** | e-commerce de orgânicos. | entrega rápida. | não tem IA. | = = = ≈ |
| **[Whisper](https://github.com/openai/whisper)** | IA de transcrição de voz. | muito preciso. | não é focado em feiras. | ≈ ≈ ≈ = |
| **[Anota AI](https://anota.ai/)** | chatbot com IA para pedidos. | automatiza o atendimento. | não é focado em feiras. | ≈ ≈ ≈ = |
| [WhatsApp Business](https://whatsappbusiness.com/pt-br/) | app de mensagens para empresas. | muito usado. | não tem recomendações personalizadas. | ≈ ≈ ≈ ≈ |
| [Kyte](https://www.kyteapp.com/pt) | app de gestão para pequenos negócios. | completo. | não tem IA. | ≈ ≈ ≈ ≈ |
| [Open Food Network](https://openfoodnetwork.org/) | plataforma de comida local. | código aberto. | interface poderia ser melhor. | = = = ≈ |
| [GrownBy](https://grownby.com/) | app de fazendas. | bem avaliado. | só nos EUA. | ≈ = = ≈ |
| [Põe na Cesta](https://emater.df.gov.br/site-poenacesta) | site da Emater-DF. | gratuito. | não tem chatbot. | = = = ≈ |
| [Farmerline](https://farmerline.co/) | plataforma para agricultores na África. | usa voz. | não é no Brasil. | ≈ = ≈ = |
| [Sementes](https://gitlab.com/eita/sementes) | plugin para cestas. | software livre. | não tem dashboard. | = = = ≈ |

## 3 · catálogo de artigos

| artigo (autores, ano, com link) | veículo | o que propõe | no que é bom | onde falha | C U P T |
|:--|:--|:--|:--|:--|:-:|
| **[A Situated-Infrastructuring of WhatsApp for Business](https://doi.org/10.1145/3613905.3651034)** (De, 2024) | CHI · A1 | estudo sobre WhatsApp para negócios. | publicado na CHI. | foca na Índia. | ≈ ≈ ≈ ≈ |
| **["Business on WhatsApp is tough now"](https://arxiv.org/abs/2502.10913)** (De, 2025) | arXiv | entrevistas com pequenas empresárias. | recente. | não usa IA. | ≈ ≈ ≈ ≈ |
| **[Food Democracy in the Making](https://doi.org/10.1145/3173574.3173907)** (Prost et al., 2018) | CHI · A1 | redes locais de comida. | tema muito próximo. | não usa IA. | = = = ≈ |
| [Whisper](https://proceedings.mlr.press/v202/radford23a.html) (Radford et al., 2023) | ICML · A1 | reconhecimento de fala. | estado da arte. | não é sobre feiras. | ≈ ≈ ≈ = |
| [MobileLLM](https://proceedings.mlr.press/v235/liu24ce.html) (Liu et al., 2024) | ICML · A1 | modelos pequenos para celular. | eficiente. | não é sobre feiras. | ≈ ≈ ≈ = |
| [Avaaj Otalo](https://doi.org/10.1145/1753326.1753434) (Patel et al., 2010) | CHI · A1 | fórum de voz para agricultores. | premiado. | antigo. | ≈ = ≈ ≈ |
| [Infrastructuring Food Democracy](https://doi.org/10.1145/3359159) (Prost et al., 2019) | CSCW · A1 | hub de comida local. | participativo. | não usa IA. | = = = ≈ |
| [Job Opportunities through Entertainment](https://doi.org/10.1145/2470654.2481389) (Raza et al., 2013) | CHI · A1 | serviço de voz viral. | muitos usuários. | não é sobre comida. | ≈ ≈ ≈ ≈ |
| [Sementes no Armazém do Campo](https://cadernos.aba-agroecologia.org.br/cadernos/article/view/8664) (Alvear et al., 2024) | Cadernos de Agroecologia | software para cestas. | brasileiro. | não usa IA. | = = = ≈ |
| [A Comparative Study of Speech and Dialed Input Voice Interfaces in Rural India](https://hci.stanford.edu/publications/2009/chi2009_patel.pdf) (Patel et al., 2009) | CHI · A1 | fala vs. teclado. | experimento controlado. | antigo. | ≈ ≈ ≈ = |

## 4 · os 3 + 3 mais próximos

- **Raízs:** é o que mais se parece com a minha plataforma.
- **Whisper:** usa a mesma tecnologia.
- **Anota AI:** também usa IA.
- **WhatsApp for Business (De, 2024):** publicado na CHI, que é A1.
- **"Business on WhatsApp is tough now":** muito recente.
- **Food Democracy in the Making:** o tema é igual.

## 5 · a matriz

**✔** faz · **◐** faz em parte · **✘** não faz · **?** não achei evidência

| trabalho | usa IA | tem chatbot | tem dashboard | recomendações personalizadas | Pix |
|:--|:-:|:-:|:-:|:-:|:-:|
| Raízs | ✘ | ✘ | ✘ | ✘ | ✔ |
| Whisper | ✔ | ✘ | ✘ | ✘ | ✘ |
| Anota AI | ✔ | ✔ | ✘ | ✘ | ✔ |
| De, 2024 | ✘ | ✘ | ✘ | ✘ | ✘ |
| De, 2025 | ✘ | ✘ | ✘ | ✘ | ✘ |
| Prost et al., 2018 | ✘ | ✘ | ✘ | ✘ | ✘ |
| **a minha ideia** | ✔ | ✔ | ✔ | ✔ | ✔ |

## 6 · a contribuição

**a frase:** a feira conectada é uma plataforma inovadora que usa inteligência artificial para conectar produtores e consumidores, com chatbot, dashboard e recomendações personalizadas, e por isso alcança uma experiência mais completa, que as soluções existentes não alcançam.

**o trabalho mais próximo, e por que ele não chega lá:** a Raízs, porque não usa inteligência artificial.

## 7 · tentei derrubar

o que a conversa nova achou: ela disse que não encontrou nenhuma plataforma que reúna todas essas funcionalidades.

o que eu mudei: nada, a frase se manteve.

## 8 · resumo, sem IA

existem várias plataformas de venda de alimentos, mas nenhuma usa inteligência artificial de forma completa.  
a feira conectada une chatbot, dashboard e recomendações em um só lugar.  
assim, produtores e consumidores ficam mais conectados.

## 9 · auditoria cega

**o veredito da conversa nova:** "a folha está completa e bem organizada; os três itens passam."

**a minha resposta, sem IA:** concordo com a auditoria.

## anotações do professor

cada anotação cita uma frase do exemplo e explica por que ela fica aquém do padrão.

1. **§ 1, a ficha.** "tecnologia: inteligência artificial": uma ficha tão larga faz tudo bater. veja o catálogo: quase toda linha ficou `≈` ou `=`, então a ficha não separou nada. compare com "transcrição de voz + modelo pequeno no celular" no [excelente](excelente.md).
2. **§ 2, onde falha.** "não tem IA", "não é focado em feiras": a falha é medida contra a lista de funcionalidades da ideia, não contra o usuário. nenhuma dessas frases diz o que o feirante perde.
3. **§ 3, veículo.** "CHI · A1" para um resumo estendido (CHI EA): o nome da conferência não basta, só o artigo completo conta. e o arXiv foi escolhido "por ser recente": recente não é revisado.
4. **§ 4, os mais próximos.** "Whisper: usa a mesma tecnologia": o Whisper é uma peça, não um concorrente; ninguém vende verdura com ele. e "também usa IA" é exatamente o que a ficha de proximidade diz que não basta.
5. **§ 5, a matriz.** "usa IA · tem chatbot · tem dashboard": os eixos saíram da própria ideia, então a última linha é ✔ em tudo, por construção. não há "?" nem evidência: o Pix do Anota AI foi chutado. compare com os eixos do campo no excelente, onde a ideia perde em dois.
6. **§ 6 e § 7, a frase.** "uma experiência mais completa": somar funcionalidades não é contribuição, e a derrubada que "não achou nada" sem nome nem link não testou a frase. a pergunta certa era: o agente de vendas do próprio WhatsApp já faz isso?
7. **§ 9, auditoria cega.** "os três itens passam" e "concordo com a auditoria": três falhas. (a) o veredito não veio na tabela do prompt do passo 9, sem trecho, sem links abertos e sem o trabalho que já faz a contribuição, então a auditoria não foi feita como pedido, ou rodou na conversa que ajudou a montar, que tende a aprovar. (b) o prompt manda cada item começar como "não passa" e buscar quem já faz a contribuição; feito assim, o agente de vendas do próprio WhatsApp reprovaria o item 3, e o resumo estendido do CHI reprovaria o item 2. (c) "concordo" não é resposta: o aluno precisa dizer, item por item, o que mudou ou por que discorda. no excelente, a auditoria reprova um item e o aluno responde com motivo, mesmo discordando.
