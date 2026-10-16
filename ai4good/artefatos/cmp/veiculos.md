# veículos de excelência

> apoio do artefato [competidores e contribuição](../3-competidores-e-contribuicao.md): onde um
> artigo bom costuma estar publicado, numa lista que você **cola no prompt**.

## a regra

um artigo conta como **veículo de excelência** se é um **artigo completo** publicado em:

- uma **conferência** da lista abaixo (cs-deadlines do CIn, eventos A1–A4 da CAPES nas áreas da disciplina, e FAccT, COMPASS e ICTD, que a CAPES ainda não classificou); ou
- um **periódico** com **Qualis A1, A2, A3 ou A4** em Ciência da Computação. a lista abaixo é um ponto de partida: confira a classificação no [Sucupira](https://sucupira-legado.capes.gov.br/sucupira/public/consultas/coleta/veiculoPublicacaoQualis/listaConsultaGeralPeriodicos.jsf).

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

periódicos (confira o Qualis de cada um):
IA e ML: JMLR, JAIR, Artificial Intelligence, Machine Learning, TMLR, IEEE TPAMI, IJCV, IEEE TNNLS, Neural Networks, Pattern Recognition, Nature Machine Intelligence, Knowledge-Based Systems, Expert Systems with Applications, Information Sciences, ACM TIST, IEEE TKDE, ACM TKDD, Data Mining and Knowledge Discovery
linguagem e fala: Computational Linguistics, TACL, Language Resources and Evaluation, Computer Speech & Language, IEEE/ACM TASLP
IHC: ACM TOCHI, PACM HCI (onde saem os artigos da CSCW), PACM IMWUT (UbiComp), IJHCS, Human–Computer Interaction, Interacting with Computers, Behaviour & Information Technology, CSCW Journal
sociedade e desenvolvimento: AI & Society, Ethics and Information Technology, Big Data & Society, New Media & Society, Information Technology for Development, Information Technologies & International Development, EJISDC, Government Information Quarterly
saúde: JAMIA, JMIR, Journal of Biomedical Informatics, IEEE JBHI, npj Digital Medicine
educação: Computers & Education, BJET, IEEE TLT, IJAIED, RBIE
agricultura e alimentação: Computers and Electronics in Agriculture, Agricultural Systems
brasileiros: JBCS (Journal of the Brazilian Computer Society), RBIE, iSys
```

## como conferir

1. **ache o veículo do artigo:** na página do artigo (DOI, Google Scholar, Semantic Scholar), veja onde ele saiu. "Proceedings of CHI 2023" é a CHI; "CHI EA" ou "Extended Abstracts" é resumo estendido e não conta.
2. **ACM DL e IEEE Xplore bloqueiam a IA:** ela pode dizer que o link "não abre". abra você, no navegador. a versão gratuita costuma estar na página do autor.
3. **fora da lista:** procure a sigla na [classificação de eventos da CAPES 2017–2020](https://www.gov.br/capes/pt-br/centrais-de-conteudo/documentos/avaliacao/09012022_CLASSIFICACAODEEVENTOSPARA20172020.xlsx/@@download/file) (planilha; Ctrl+F na coluna de siglas) ou no [cs-deadlines](https://cs-deadlines.cin.ufpe.br/).

anote no seu `cmp.md`, ao lado do artigo, o veículo e a classificação que você achou.
