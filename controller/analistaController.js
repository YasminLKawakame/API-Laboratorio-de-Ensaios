import {
    cadastrarAnalista as cadastrar,
    atualizarAnalista as atualizar,
    listarAnalistas as listar,
    buscarAnalistaPorID as buscar,
    excluirAnalista as excluir
} from "../repository/analistaRepository.js";

export async function cadastrarAnalista(req, res) {
    try {
        const analista = req.body;
        const id = await cadastrar(analista);
        res.status(201).json({ id });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro em cadastrar analista" });
    }
}

export async function atualizarAnalista(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const analista = await atualizar(id, dados)
    if(!analista) {
        return res.status(404).json({ error: "Erro ao encontrar analista"});
    }
    res.status(200).json(analista);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar analista"});
    }
}

export async function listarAnalistas(req, res){
    try {
        const analistas = await listar();
        res.status(200).json(analistas);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar analista"});
    }
}

export async function buscarAnalistaPorID(req, res) {
    try {
        const id = req.params.id;
        const analista = await buscar(id);
        if (!analista) {
            return res.status(404).json({ error: "Analista não encontrado" });
        }
        res.status(200).json(analista);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar analista" });
    }
}

export async function excluirAnalista(req, res) {
    try {
        const id = req.params.id;
        const analista = await excluir(id);
        if (!analista) {
            return res.status(404).json({ error: "Analista não encontrado" });
        }
        res.status(200).json({ message: "Analista excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir analista" });
    }
}