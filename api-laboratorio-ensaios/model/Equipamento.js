export class Equipamento {
    constructor(id_equipamento, nome, patrimonio, situacao) {
        this.id_equipamento = id_equipamento;
        this.nome = nome;
        this.patrimonio = patrimonio;
        this.situacao = situacao;
    }


    validarId(id) {
        if (id === null || id === undefined || id === "") {
            throw new Error("O ID do equipamento não pode ficar vazio.");
        }
        return true
    }

    validarNome(nome) {
        if (!nome || nome.trim().length < 3) {
            throw new Error("O nome deve possuir pelo menos 3 caracteres.");
        }
        return true
    }

    validarPatrimonio(patrimonio) {
        if (!patrimonio || patrimonio.trim() === "") {
            throw new Error("O patrimonio não pode ficar vazio.");
        }
        return true
    }

    validarSituacao(situacao) {
        if (!situacao || situacao.trim() === "") {
            throw new Error("A situação não pode ficar vazia.");
        }
        return true
    }
}