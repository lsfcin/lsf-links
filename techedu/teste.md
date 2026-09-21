# teste de painel de missões · visualização direta no site

este é o renderizador real do site da disciplina (o mesmo publicado no Cloudflare Pages).

---

## opção a: até 4 linhas de 3 letras (quebra silábica alinhada ao fundo)
- cada bloco tem largura de 3 caixinhas (`■■■`).
- cada linha acima tem até 3 letras (sílabas / trigramas).
- alinhamento no fundo (bottom-aligned).
- removemos números e pontuação extra.

```text
                      tec con     req arq
                  pro nol cor ben uis uit pro     met val
          kan set ble ogi ren ch  ito etu tot tes ric ida dep art pit
          ban up  mas as  tes mrk s   ra  ipo tes as  cao loy igo ch   par
albatroz  ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■  ■■■■  49 pts
beta      ■■■ ■■□ ■■■ □□□ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■  ■■■□  43 pts
gamma     ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■  ■■■■  49 pts
```

---

## opção b: 1 linha só de 3 letras (com legenda)
- altura mínima absoluta (1 linha de cabeçalho).
- trigramas horizontais diretos (`kan`, `set`, `pro`, etc.).
- legenda de consulta rápida logo abaixo.

```text
          kan set pro tec con ben req arq pro tes met val dep art pit  par
albatroz  ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■  ■■■■  49 pts
beta      ■■■ ■■□ ■■■ □□□ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■  ■■■□  43 pts
gamma     ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■ ■■■  ■■■■  49 pts
```

> **legenda:** `kan: kanban` · `set: setup` · `pro: problemas` · `tec: tecnologias` · `con: concorrentes` · `ben: benchmark` · `req: requisitos` · `arq: arquitetura` · `pro: protótipo` · `tes: testes` · `met: métricas` · `val: validação` · `dep: deploy` · `art: artigo` · `pit: pitch` · `par: avaliação entre pares`
