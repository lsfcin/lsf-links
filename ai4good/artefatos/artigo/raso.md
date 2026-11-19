# artigo · exemplo quase bom / sem alma

> registro do artefato [artigo](../6-artigo.md), do mesmo projeto do [excelente](excelente.md) e com o
> mesmo piloto de 30 pedidos em vozes sintéticas. parece pronto, mas não convence. as anotações do
> professor estão no fim.

## passo 0 · veículo e modelo

**o veículo alvo:** PROPOR.

**o artigo base:** o artigo do Whisper (Radford et al., 2023), que é a tecnologia que usamos.

## marco 1 · introdução

**o trecho, parágrafos 1 e 4:**

> A alimentação saudável é um dos maiores desafios do Brasil. Se as feiras com reserva ficassem com 5% do que hoje vai para os supermercados, seriam R$ 50 bilhões por ano pagos direto a quem planta. Nesse contexto, a inteligência artificial surge como uma ferramenta promissora para transformar a forma como pequenos produtores vendem.
>
> As principais contribuições deste trabalho são: (i) uma solução inovadora baseada em IA para pedidos de feira; (ii) uma avaliação experimental que demonstra a viabilidade da abordagem.

## marco 2 · trabalhos relacionados

**o trecho:**

> Patel et al. (2010) propuseram o Avaaj Otalo, um fórum de voz para agricultores na Índia.
>
> Prost et al. (2019) estudaram a construção de um hub local de comida com moradores e vendedores.
>
> Radford et al. (2023) apresentaram o Whisper, um modelo de reconhecimento de fala treinado em 680 mil horas de áudio.
>
> De (2024), na CHI, analisou como a Meta molda o WhatsApp Business na Índia.
>
> Diferentemente desses trabalhos, nossa solução combina reconhecimento de fala e organização de pedidos em uma única ferramenta.

## marco 3 · método

**o trecho:**

> O sistema utiliza o Whisper, modelo de reconhecimento de fala estado da arte, para transcrever os áudios recebidos pelo WhatsApp. Em seguida, um módulo de processamento extrai as informações relevantes do pedido. O sistema é leve e pode rodar em dispositivos móveis.

a figura do fluxograma do flx está no artigo, com os 11 passos.

## marco 4 · desenho dos experimentos

**a hipótese:** o sistema atinge acurácia satisfatória na extração de pedidos, com erro sem aviso abaixo de 25%.

**o trecho:**

> Para avaliar o sistema, foram gravados 30 pedidos em quatro vozes diferentes, com ruído de feira. Os pedidos foram processados pelo sistema e comparados com o resultado esperado.

## marco 5 · resultados e discussão

**o trecho:**

> O sistema obteve 60% de acurácia na extração de pedidos completos e F1 de 0,86, o que demonstra a viabilidade da abordagem. O erro sem aviso ficou em 20%, abaixo do limite de 25% estabelecido, confirmando a hipótese. Os resultados indicam que a solução é promissora para uso real em feiras.

## marco 6 · pronto para submissão

**título:** Rastro da Banca: Uma Solução Baseada em Inteligência Artificial para Feiras Livres

**o trecho, o resumo:**

> Este artigo apresenta o Rastro da Banca, uma solução inovadora baseada em IA para auxiliar feirantes na organização de pedidos. O sistema utiliza reconhecimento de fala e processamento de linguagem natural. Os resultados experimentais demonstram a viabilidade da abordagem e seu potencial para impactar positivamente a agricultura familiar.

**referências:** o bibtex foi gerado pela IA e revisado.

## auditoria cega

**o veredito da conversa nova:** todos os itens passam, com sugestões de melhoria na redação.

**a minha resposta:** "agradecemos as sugestões. o texto foi revisado para maior clareza e as referências foram padronizadas."

---

## anotações do professor

cada anotação cita uma frase do exemplo, marca o item (◼ passa, ◻ não passa) e explica por quê.

1. **passo 0, o artigo base errado.** "o artigo do Whisper, que é a tecnologia que usamos": o artigo base é um molde do mesmo tipo do seu, e o do Whisper apresenta um modelo treinado em 680 mil horas. o molde certo testa uma lista como contexto e mede com ablação, como no [excelente](excelente.md).
2. **marco 1, a projeção no lugar do problema ◻.** "seriam R$ 50 bilhões por ano": é a aposta do brw, "se todo mundo usasse", e ocupa o lugar do número do problema, que não aparece. o condicional não basta: o leitor sai com o número da aposta na cabeça. o óbvio abandonado não aparece, e "uma solução inovadora" não aponta experimento nenhum.
3. **marco 2, a lista ◻.** "Patel et al. (2010) propuseram": um parágrafo por artigo, 4 dos 10, nenhuma comparação e nenhuma concessão. e "De (2024), na CHI" é um resumo estendido: o cmp do próprio projeto já dizia que ele não conta como artigo completo. o Patel de 2009, que contraria a ideia, sumiu.
4. **marco 3, o método que ninguém repete ◻.** "um módulo de processamento extrai as informações relevantes": não diz que são regras, nem o que entra e o que sai. "o sistema é leve e pode rodar em dispositivos móveis" esconde o número medido: no celular, o whisper leva 2,89 vezes o áudio, e a hipótese de tempo cai ali. a figura está lá, e conta, mas não há repositório, versão nem comando.
5. **marco 4, o limiar que mudou ◻.** "erro sem aviso abaixo de 25%": o pré-registro dizia 10%, commitado antes do piloto. subir para 25% depois de ver 20% é reescrever a hipótese para caber no resultado, e nenhuma emenda diz quando nem por quê. as "quatro vozes diferentes" são sintéticas, e o trecho não diz.
6. **marco 5, o número escolhido ◻.** "60% de acurácia": é o áudio limpo; a 10 dB, que é a feira, o pedido exato cai para 47%. não tem intervalo, nem a linha de base, nem a comparação com a nuvem, e "promissora para uso real em feiras" conclui sobre gente a partir de vozes de máquina.
7. **marco 6, o resumo sem resultado ◻.** "demonstram a viabilidade da abordagem": nenhum número, e o título não diz a abordagem. "o bibtex foi gerado pela IA e revisado" é o caminho para a referência que não existe: o bibtex vem do DOI.
8. **a auditoria ◻.** "todos os itens passam": uma auditoria que começa de "não passa" não aprova um artigo com o limiar trocado. e a resposta é da IA, em tom de carta a revisor: não diz o que mudou, pendência a pendência.
