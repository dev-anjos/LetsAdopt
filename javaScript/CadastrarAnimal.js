import { AnimalParaAdocao } from "./classAnimalAdocao.js";

export const CadastrarAnimal = () => {
    let nome = '';
    let raca = '';
    let idade = '';
    let valido = false;

    while (!valido) {
        nome = prompt('Seja bem-vindo ao cadastro do seu animal. Digite o nome dele:');
        raca = prompt('Digite a raça do animal:');
        idade = prompt('Digite a idade do animal( para meses, use o formato 0.5):');
        
        // Validação dos campos
        if (nome === null || nome.trim() === '') {
            alert('Nome não pode estar vazio. Por favor, digite um nome válido.');
        } else if (raca === null || raca.trim() === '') {
            alert('Raça não pode estar vazia. Por favor, digite uma raça válida.');
        } else if (idade === null || isNaN(idade) || idade == 0) {
            alert('Parece que você digitou algo difente de Numero. Por favor, digite uma idade válida.');
        } else {
            valido = true;
        }
    }
    
    // Passa os valores para a classe construir o novo animal
    let novoAnimal = new AnimalParaAdocao(nome, raca, idade);
    
    return novoAnimal;
};