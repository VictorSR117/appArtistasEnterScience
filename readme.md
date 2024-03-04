# Contratação de Artistas

Este é um projeto para gerenciar a contratação de artistas, permitindo aos usuários pesquisar artistas, visualizar detalhes e realizar novas contratações.

## Tecnologias Utilizadas

- HTML
- CSS (Bootstrap)
- JavaScript
- Node.js (Express.js)
- Banco de Dados PostgreSQL
- Axios (para comunicação com a API)

## Funcionalidades

### Pesquisa de Artistas

Os usuários podem pesquisar artistas pelo nome utilizando uma caixa de pesquisa na página inicial. Os resultados da pesquisa são exibidos em uma tabela, onde é possível visualizar detalhes sobre os artistas.

### Cadastro de Contratações

Os usuários podem clicar em um artista na tabela de resultados da pesquisa para abrir um modal e cadastrar uma nova contratação. O modal exibe informações sobre o artista selecionado e solicita detalhes sobre a contratação, como nome do contratante, cachê, data do evento e endereço.

### Listagem de Contratações

Os usuários podem listar todas as contratações existentes no banco de dados clicando em um botão. As contratações são exibidas em uma tabela, onde é possível visualizar detalhes sobre cada contratação, incluindo o nome do artista contratado.

## Estrutura do Projeto

- `index.html`: Página inicial do projeto com a interface de usuário.
- `styles.css`: Arquivo CSS para estilização.
- `listArtists.js`: Script JavaScript para realizar pesquisas de artistas e exibir os resultados.
- `registerNewHiring.js`: Script JavaScript para cadastrar novas contratações.
- `listHirings.js`: Script JavaScript para listar todas as contratações existentes.
- `modal.js`: Script JavaScript para controlar o comportamento do modal de cadastro de contratações.
- `server.js`: Arquivo principal do servidor Node.js com rotas para a API.
- `database.js`: Arquivo para configuração da conexão com o banco de dados PostgreSQL.
- `README.md`: Documentação do projeto.

## Instalação e Uso

## Instalação e Uso

1. Clone este repositório: `git clone https://github.com/seu-usuario/contratacao-de-artistas.git`
2. No terminal, acesse a pasta do backend: `cd backend/src`
3. Instale as dependências do backend: `npm install`
4. Inicie o servidor Node.js: `npm run dev`
5. Em outro terminal, acesse a pasta do frontend: `cd frontend`
6. Instale as dependências do frontend: `npm install`
7. Compile os arquivos Sass: `npm run sass`
8. Abra o navegador e acesse o projeto: `http://localhost:3000`

## Exemplos

### Pesquisa de Artistas

![Pesquisa de Artistas](![alt text](image.png))

### Listagem de Contratações

![Listagem de Contratações](![alt text](image-1.png))

## Contribuindo

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões de melhorias, por favor, entre em contato 😊.

