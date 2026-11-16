import conexao from "../config/conexao.js"

export async function cadastrarEquipamento(equipamento) {
    const sql = "INSERT INTO equipamento (nome, patrimonio, situacao) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        equipamento.nome,
        equipamento.patrimonio,
        equipamento.situacao
    ]);

    return resultado.insertId;

}

export async function listarEquipamentos() {
    const sql = "SELECT * FROM equipamento";
    const [resultado] = await conexao.execute(sql);

    return resultado;

}

export async function buscarEquipamentoPorID(id) {
    const sql = "SELECT * FROM equipamento WHERE id_equipamento = ?";
    const [resultado] = await conexao.execute(sql,[id]);

    return resultado[0];

}

export async function atualizarEquipamento(id, equipamento) {
    const sql = "UPDATE equipamento SET nome = ?, patrimonio = ?, situacao = ?";
    const [resultado] = await conexao.execute(sql, [
        equipamento.nome,
        equipamento.patrimonio,
        equipamento.situacao,
        id
    ])

    return resultado.affectedRows;
}

export async function excluirEquipamento(id) {
    const sql = "DELETE FROM equipamento WHERE id_equipamento = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}