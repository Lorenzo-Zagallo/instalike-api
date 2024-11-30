// Importa o módulo Express para criar a aplicação web
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma nova instância do Express para a aplicação
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e imprime uma mensagem no console
app.listen(3000, () => {
    console.log('Servidor escutando...');
});
