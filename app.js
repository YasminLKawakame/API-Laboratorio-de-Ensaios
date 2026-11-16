import express from "express";
import analistaRoutes from "./routes/analistaRoutes.js"
import ensaioRoutes from "./routes/ensaioRoutes.js"
import equipamentoRoutes from "./routes/equipamentoRoutes.js";
import conexao from './config/conexao.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/analista", analistaRoutes);
app.use("/ensaio", ensaioRoutes);
app.use("/equipamento", equipamentoRoutes);

async function iniciarServidor() {
    try{
        const conexaoTest = await conexao.getConnection();
        // console.log(conexaoTest);

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`)
        })
    }catch(erro){
        console.log("Erro ao conectar o banco de dados");
        console.log(erro);
        process.exit(1);
    }
}

iniciarServidor();