# Indicadores Geográficos

Página web desenvolvida para apresentar os resultados de um trabalho em grupo da disciplina de Business Intelligence do curso de Sistemas de Informação da PUC Betim.

## Sobre o projeto

O projeto apresenta os dados de uma concessionária de motos em Minas Gerais em dois formatos complementares:

- um mapa interativo criado no ArcGIS;
- um painel criado no Power BI com seis gráficos;

O objetivo é facilitar a visualização da distribuição geográfica dos dados e comparar os resultados entre as cidades.

## Integrantes

- Carlos Magno Ferreira Silva
- Letícia Rodrigues Batista
- Pedro Oliveira Coelho
- Sara de Almeida Pasolini
- Walisson Ribeiro da Silva

## Estrutura do projeto

```text
TrabalhoBI/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        ├── config.js
        └── main.js
```

- `index.html`: estrutura semântica e conteúdo principal da página.
- `assets/css/styles.css`: estilos visuais, tema claro/escuro e responsividade.
- `assets/js/config.js`: tema, descrição, objetivo, integrantes e links externos.
- `assets/js/main.js`: preenchimento automático dos elementos da página e configuração dos links.

## Executando localmente

Abra o arquivo `index.html` diretamente no navegador ou use a extensão Live Server no Visual Studio Code.

Com o Live Server, execute a página pela opção **Open with Live Server**.

## Personalização

As informações editáveis da página ficam em `assets/js/config.js`.

- Para alterar textos, edite `tema`, `descricao` e `objetivo`.
- Para alterar os integrantes, atualize a lista `integrantes`.
- Para adicionar o painel do Power BI, informe a URL em `linkPowerBI`.
- Para alterar o mapa, atualize `linkMapa`.

Campos ou links vazios são exibidos na página com uma indicação de conteúdo pendente.

