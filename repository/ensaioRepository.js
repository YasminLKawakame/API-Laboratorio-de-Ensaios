import conexao from "../config/conexao.js"

export async function cadastrarEnsaio(ensaio) {
    const sql = "INSERT INTO ensaio (nome, norma, status) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        ensaio.nome,
        ensaio.norma,
        ensaio.status
    ]);

    return resultado.insertId;

}

export async function listarEnsaios() {
    const sql = "SELECT * FROM ensaio";
    const [resultado] = await conexao.execute(sql);

    return resultado;

}

export async function buscarEnsaioPorID(id) {
    const sql = "SELECT * FROM ensaio WHERE id_ensaio = ?";
    const [resultado] = await conexao.execute(sql,[id]);

    return resultado[0];

}

export async function atualizarEnsaio(id, ensaio) {
    const sql = "UPDATE ensaio SET nome = ?, norma = ?, status = ?";
    const [resultado] = await conexao.execute(sql, [
        ensaio.nome,
        ensaio.norma,
        ensaio.status,
        id
    ])

    return resultado.affectedRows;
}

export async function excluirEnsaio(id) {
    const sql = "DELETE FROM ensaio WHERE id_ensaio = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}