import {
    cadastrarEnsaio as cadastrar,
    listarEnsaios as listar,
    buscarEnsaioPorID as buscar,
    atualizarEnsaio as atualizar,
    excluirEnsaio as excluir
} from "../repository/ensaioRepository.js";

export async function cadastrarEnsaio(req, res) {
    try {
        const ensaio = req.body;
        const id = await cadastrar(ensaio);
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar ensaio" });
    }
}

export async function listarEnsaios(req, res) {
    try {
        const ensaios = await listar();
        res.status(200).json(ensaios);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar ensaios" });
    }
}

export async function buscarEnsaioPorID(req, res) {
    try {
        const id = req.params.id;
        const ensaio = await buscar(id);
        if (!ensaio) {
            return res.status(404).json({ error: "Ensaio não encontrado" });
        }
        res.status(200).json(ensaio);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar ensaio" });
    }
}

export async function atualizarEnsaio(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const ensaio = await atualizar(id, dados);
        if (!ensaio) {
            return res.status(404).json({ error: "Ensaio não encontrado" });
        }
        res.status(200).json(ensaio);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar ensaio" });
    }
}

export async function excluirEnsaio(req, res) {
    try {
        const id = req.params.id;
        const ensaio = await excluir(id);
        if (!ensaio) {
            return res.status(404).json({ error: "Ensaio não encontrado" });
        }
        res.status(200).json({ message: "Ensaio excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir ensaio" });
    }
}