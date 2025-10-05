import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    if (!stringConexao || stringConexao.trim() === "") {
        console.error('ERRO CRÍTICO: A string de conexão do banco de dados (STRING_CONEXAO) não foi fornecida ou está vazia.');
        console.error('Verifique se o arquivo .env foi carregado corretamente e se a variável existe.');
        process.exit(1);
    }
    
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch(erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit(1);
    }
}