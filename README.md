# 💻 Imersão Back-end Alura: API de Posts com MongoDB e Gemini

## ✨ Sobre o Projeto

Este projeto é a implementação de uma API Back-end desenvolvida durante a **Imersão Back-end da Alura**. O objetivo principal é construir uma API robusta para gerenciamento de posts, com um diferencial de utilizar a Inteligência Artificial do Google (Gemini) para gerar descrições automáticas de imagens.

A API é capaz de lidar com a conexão a um banco de dados **MongoDB local** e gerenciar todas as operações CRUD (Criar, Ler, Atualizar, Deletar) para a coleção de posts.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework web para construção da API.
* **MongoDB**: Banco de dados NoSQL utilizado para persistência de dados.
* **Mongoose/Driver MongoDB**: Biblioteca para interagir com o MongoDB.
* **Multer**: Middleware para tratamento de upload de arquivos (imagens).
* **dotenv**: Para gerenciamento de variáveis de ambiente.
* **CORS**: Para lidar com políticas de segurança e permitir acesso do frontend.
* **Google Gemini API**: Serviço de IA usado para gerar descrições textuais das imagens.

---

## ⚙️ Configuração e Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

1.  **Node.js e npm** instalados.
2.  **MongoDB Server** instalado e rodando localmente (na porta padrão `27017`).
3.  Uma **API Key do Google Gemini** (para a funcionalidade de descrição de imagem).

### 1. Clonar o Repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd Imersao-Backend-ALura
````

### 2\. Instalar Dependências

```bash
npm install
```

### 3\. Configurar Variáveis de Ambiente

Crie um arquivo chamado **`.env`** na raiz do projeto e adicione as seguintes variáveis:

```env
# URL de conexão para o MongoDB Local (porta e nome do DB)
STRING_CONEXAO="mongodb://localhost:27017/server_imersao_alura"

# Sua chave API do Google Gemini
GEMINI_API_KEY="SUA_CHAVE_AQUI"

# Porta de execução do servidor Express (Ex: 3000)
PORT=3000
```

### 4\. Iniciar o Servidor

```bash
npm start
# ou
node seu_arquivo_principal.js
```

O servidor estará rodando em `http://localhost:3000` (ou na porta definida em `PORT`).

-----

## 🚀 Endpoints da API

Você pode testar os endpoints usando ferramentas como Thunder Client (VS Code) ou Postman.

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **`GET`** | `/posts` | Lista todos os posts cadastrados no banco de dados. |
| **`POST`**| `/posts` | Cria um novo post com dados JSON (útil para posts sem imagem). |
| **`POST`**| `/upload` | Recebe uma imagem (`multipart/form-data`) e cria um post inicial. |
| **`PUT`** | `/upload/:id` | Atualiza um post existente. Este é o endpoint que aciona o **Gemini** para ler a imagem e gerar a descrição. |

### Exemplo de Requisição

Para **criar o banco de dados e o primeiro post** (e verificar sua conexão local):

```
POST http://localhost:3000/posts
Content-Type: application/json

{
    "descricao": "Post de teste inicial",
    "imgUrl": "[https://via.placeholder.com/150](https://via.placeholder.com/150)",
    "alt": "placeholder"
}
```

-----

## 🔗 Estrutura do Projeto

A estrutura segue o padrão MVC (Model-View-Controller) adaptado:

```
.
├── src/
│   ├── config/
│   │   └── dbconfig.js       # Gerencia a conexão com o MongoDB.
│   ├── controllers/
│   │   └── postsController.js  # Lógica de negócio e manipulação de requisições.
│   ├── models/
│   │   └── postsModel.js     # Interação direta com o banco de dados (funções CRUD).
│   ├── routes/
│   │   └── postsRoutes.js    # Definição das rotas e middlewares (Multer, CORS).
│   ├── services/
│   │   └── geminiService.js  # Lógica para comunicação com a API Gemini.
│   └── app.js / server.js    # Arquivo principal que inicializa o Express.
├── uploads/              # Diretório para armazenamento temporário e final das imagens.
├── .env                  # Variáveis de ambiente (ignorado pelo git).
├── package.json
└── README.md
```