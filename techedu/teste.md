# teste de painel de missões · 2 letras vs 3 letras

comparativo direto entre o modelo com caixas contínuas (sem espaço) e o modelo separado por artefato:

---

## teste 1: 2 letras por artefato (caixas contínuas, sem espaço)
- cada artefato tem 2 letras + 1 espaço no cabeçalho (3 caracteres).
- as caixas formam uma barra contínua de 45 quadradinhos médios.
- largura total super compacta: apenas 69 caracteres.

```text
          ka se pr tc cn bk rq ar pt tt mt vd dp tg pc   par    total
albatroz  ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼  ◼◼◼◼  49 pts
beta      ◼◼◼◼◻◼◼◼◼◼◼◻◻◻◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼  ◼◼◼◻  43 pts
gamma     ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼  ◼◼◼◼  49 pts
```

> **legenda:** `ka: kanban` · `se: setup` · `pr: problemas` · `tc: tecnologia` · `cn: concorrentes` · `bk: benchmark` · `rq: requisitos` · `ar: arquitetura` · `pt: protótipo` · `tt: testes` · `mt: métricas` · `vd: validação` · `dp: deploy` · `tg: artigo` · `pc: pitch` · `par: avaliação entre pares`

---

## teste 2: 3 letras por artefato (caixas separadas por espaço)
- cada artefato tem 3 letras no cabeçalho e 3 caixinhas agrupadas (`◼◼◼`).
- espaço visual de 1 caractere entre cada artefato.
- largura total: 83 caracteres.

```text
          kan set pro tec con ben req arq pro tes met val dep art pit  par    total
albatroz  ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◼  49 pts
beta      ◼◼◼ ◼◼◻ ◼◼◼ ◻◻◻ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◻  43 pts
gamma     ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼ ◼◼◼  ◼◼◼◼  49 pts
```

> **legenda:** `kan: kanban` · `set: setup` · `pro: problemas` · `tec: tecnologias` · `con: concorrentes` · `ben: benchmark` · `req: requisitos` · `arq: arquitetura` · `pro: protótipo` · `tes: testes` · `met: métricas` · `val: validação` · `dep: deploy` · `art: artigo` · `pit: pitch` · `par: avaliação entre pares`
