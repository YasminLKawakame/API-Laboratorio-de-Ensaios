
export class Analista {
    constructor(id_analista, nome, registro, especialidade) {
        this.id_analista = id_analista;
        this.nome = nome;
        this.registro = registro;
        this.especialidade = especialidade;
    }

    validarId(id) {
        if (id === null || id === undefined || id === "") {
            throw new Error("O ID do analista não pode ficar vazio.");
        }
        return true;
    }

    validarNome(nome) {
        if (!nome || nome.trim().length < 3) {
            throw new Error("O nome deve possuir pelo menos 3 caracteres.");
        }
        return true;
    }

    validarRegistro(registro) {
        if (!registro || registro.trim() === "") {
            throw new Error("O registro não pode ficar vazio.");
        }
        return true;
    }

    validarEspecialidade(especialidade) {
        if (!especialidade || especialidade.trim() === "") {
            throw new Error("A especialidade não pode ficar vazia.");
        }
        return true;
    }
}