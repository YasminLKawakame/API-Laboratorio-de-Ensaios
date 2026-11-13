
export class Ensaio {
    constructor(id_ensaio, nome, norma, status) {
        this.id_ensaio = id_ensaio;
        this.nome = nome;
        this.norma = norma;
        this.status = status;
    }

    validarId(id) {
        if (id === null || id === undefined || id === "") {
            throw new Error("O ID do ensaio não pode ficar vazio.");
        }
        return true;
    }

    validarNome(nome) {
        if (!nome || nome.trim().length < 3) {
            throw new Error("O nome deve possuir pelo menos 3 caracteres.");
        }
        return true;
    }

    validarNorma(norma) {
        if (!norma || norma.trim() === "") {
            throw new Error("A norma não pode ficar vazia.");
        }
        return true;
    }

    validarStatus(status) {
        if (!status || status.trim() === "") {
            throw new Error("O status não pode ficar vazio.");
        }
        return true;
    }
}
