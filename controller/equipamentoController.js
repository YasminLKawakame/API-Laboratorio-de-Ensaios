import {
    cadastrarEquipamento as cadastrar,
    atualizarEquipamento as atualizar,
    buscarEquipamentoPorID as buscar,
    listarEquipamentos as listar,
    excluirEquipamento as excluir

} from "../repository/equipamentoRepository.js";

export async function cadastrarEquipamento(req, res) {
    try {
        const equipamento = req.body;
        const id = await cadastrar(equipamento);
        res.status(200).json({ id });
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastar equipamento" });
    }
}

export async function atualizarEquipamento(req, res) {
    try {
        const id = req.params.id;
        const dados = req.body;
        const equipamento = await atualizar(id, dados);
        if (!equipamento) {
            return res.status(404).json({ error: "Equipamento não encontrado" });
        }
        res.status(200).json(equipamento);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar equipamento" });
    }
}

export async function buscarEquipamentoPorID(req, res) {
    try {
        const id = req.params.id;
        const equipamento = await buscar(id);
        if (!equipamento) {
            return res.status(404).json({ error: "Equipamento não encontrado" });
        }
        res.status(200).json(equipamento);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar equipamento" });
    }
}

export async function listarEquipamentos(req, res) {
    try {
        const equipamentos = await listar();
        res.status(200).json(equipamentos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar equipamentos" });
    }
}


export async function excluirEquipamento(req, res) {
    try {
        const id = req.params.id;
        const equipamento = await excluir(id);
        if (!equipamento) {
            return res.status(404).json({ error: "Equipamento não encontrado" });
        }
        res.status(200).json({ message: "Equipamento excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir equipamento" });
    }
}