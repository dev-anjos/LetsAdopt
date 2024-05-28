export class AnimalParaAdocao {
    
    constructor([nome, raca, idade]) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    alterarNome(novoNome) {
        this.nome = novoNome;
    }

}

