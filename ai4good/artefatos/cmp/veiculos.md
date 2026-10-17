# veículos de excelência

> apoio do artefato [competidores e contribuição](../3-competidores-e-contribuicao.md): onde um
> artigo bom costuma estar publicado, numa lista que você **cola no prompt**.

## a regra

um artigo conta como **veículo de excelência** se é um **artigo completo** publicado em:

- uma **conferência** da lista abaixo (cs-deadlines do CIn, eventos A1–A4 da CAPES nas áreas da disciplina, e FAccT, COMPASS e ICTD, que a CAPES ainda não classificou); ou
- um **periódico** com **Qualis A1, A2, A3 ou A4** em Computação, na escala A1–A8 do ciclo 2025–2028. o estrato ao lado de cada periódico abaixo vem do [QualisComp](https://qualiscomp.com/) (dados de 03/08/2026), que **estima** a classificação pelas regras do Documento de Área da CAPES; para um periódico fora da lista, consulte lá.

**não contam**, mesmo na conferência certa: resumo estendido (*extended abstract*, "CHI EA"), pôster, demo, workshop e *late-breaking work*. **arXiv não é veículo**: é um repositório sem revisão por pares, e vale no máximo 1 artigo de lá. na dúvida, pergunte ao professor antes de entregar.

## a lista para colar no prompt

```text
conferências de excelência (artigo completo):
IA e agentes: AAAI, IJCAI, AAMAS, ECAI, UAI, KR, ICAART, FLAIRS, BRACIS
aprendizado de máquina: NeurIPS, ICML, ICLR, KDD, AISTATS, COLT, ECML-PKDD, ICDM, SDM, PAKDD, ICMLA, ICANN, ESANN
linguagem e fala: ACL, EMNLP, NAACL, EACL, COLING, CoNLL, LREC, IJCNLP, INLG, RANLP, CICLing, TSD, PROPOR, INTERSPEECH, ICASSP
visão e multimídia: CVPR, ICCV, ECCV, WACV, BMVC, ACCV, 3DV, ICPR, ACM MM, ICME, ICMR, VISAPP, SIBGRAPI, CIARP
web, busca e recomendação: WWW, SIGIR, WSDM, CIKM, RecSys, ICWSM, ECIR, CHIIR, WebSci, ISWC, ESWC, HT, WebMedia
IHC e trabalho cooperativo: CHI, CSCW, UIST, DIS, IUI, UbiComp/ISWC, MobileHCI, ASSETS, IDC, CHI PLAY, TEI, GROUP, INTERACT, NordiCHI, OzCHI, W4A, IHC
computação e sociedade: FAccT, AIES, COMPASS, ICTD, HCOMP, SocInfo, ICEGOV
saúde: AMIA, MEDINFO, MIE, EMBC, ISBI, BCB, BIBM, ICHI, PervasiveHealth, HEALTHINF, CBMS, SBCAS
educação: LAK, EDM, L@S, AIED, ITS, SIGCSE, ICER, ITiCSE, EC-TEL, ICALT, CSCL, SBIE, WIE
robótica: ICRA, IROS, RSS, CoRL, HRI, RO-MAN, Humanoids
sistemas e dados: SIGMOD, VLDB, ICDE, PODS, SIGCOMM, NSDI, MobiSys, MobiCom, SenSys, IMC, SIGMETRICS, OSDI, SOSP, EuroSys, FAST, USENIX ATC, ASPLOS, ISCA, MICRO, HPCA, SC, HPDC, ICS, DAC, ICCAD, EMSOFT, RTAS, RTSS
segurança: CCS, IEEE S&P, USENIX Security, NDSS
software e linguagens: ICSE, FSE, ASE, ISSTA, PLDI, POPL, OOPSLA, ICFP
teoria: STOC, FOCS, SODA, CRYPTO, EUROCRYPT, CAV, LICS
gráfica e visualização: SIGGRAPH, SIGGRAPH Asia, Eurographics, IEEE VIS, IEEE VR
bio e economia: ISMB, RECOMB, EC, WINE

periódicos (Qualis 2025–2028 estimado pelo QualisComp):
IA e ML: JMLR A1, JAIR A2, Artificial Intelligence A1, Machine Learning A2, TMLR A3, IEEE TPAMI A1, IJCV A1, IEEE TNNLS A1, Neural Networks A1, Pattern Recognition A1, Nature Machine Intelligence A1, Knowledge-Based Systems A1, Expert Systems with Applications A1, Information Sciences A1, ACM TIST A1, IEEE TKDE A1, ACM TKDD A1, Data Mining and Knowledge Discovery A2
linguagem e fala: Computational Linguistics A1, TACL A1, Language Resources and Evaluation A1, Computer Speech & Language A1, IEEE/ACM TASLP A1
IHC: ACM TOCHI A1, PACM HCI A1 (onde saem os artigos da CSCW), PACM IMWUT A1 (UbiComp), IJHCS A1, Human–Computer Interaction A1, Interacting with Computers A3, Behaviour & Information Technology A1, CSCW Journal A2
sociedade e desenvolvimento: AI & Society A1, Ethics and Information Technology A1, Big Data & Society A1, New Media & Society A1, Information Technology for Development A1, Information Technologies & International Development A3, EJISDC A3, Government Information Quarterly A1
saúde: JAMIA A1, JMIR A1, Journal of Biomedical Informatics A1, IEEE JBHI A1, npj Digital Medicine A1
educação: Computers & Education A1, BJET A1, IEEE TLT A1, IJAIED A1
agricultura e alimentação: Computers and Electronics in Agriculture A1, Agricultural Systems A1
```

## como conferir

1. **ache o veículo do artigo:** na página do artigo (DOI, Google Scholar, Semantic Scholar), veja onde ele saiu. "Proceedings of CHI 2023" é a CHI; "CHI EA" ou "Extended Abstracts" é resumo estendido e não conta.
2. **ACM DL e IEEE Xplore bloqueiam a IA:** ela pode dizer que o link "não abre". abra você, no navegador. a versão gratuita costuma estar na página do autor.
3. **fora da lista:** procure o nome no [QualisComp](https://qualiscomp.com/) (estrato A1–A8 estimado, periódicos e eventos), na [classificação de eventos da CAPES 2017–2020](https://www.gov.br/capes/pt-br/centrais-de-conteudo/documentos/avaliacao/09012022_CLASSIFICACAODEEVENTOSPARA20172020.xlsx/@@download/file) (planilha; Ctrl+F na coluna de siglas) ou no [cs-deadlines](https://cs-deadlines.cin.ufpe.br/).

anote no seu `cmp.md`, ao lado do artigo, o veículo e a classificação que você achou.
