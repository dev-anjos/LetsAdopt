import { CadastrarAnimal } from "./CadastrarAnimal.js";

// função sendo chamada sozinha pois a fuNÇÃO que criar o animal está sendo salvo no arquivo animalCadastrado.js
let AnimalCadastrado = CadastrarAnimal();

let continuar = true; // quando for digitado não essa variavel será atribuida com false

while (continuar) {

    let removerNome = prompt(`Gostaria de alterar o nome do animal? Ele está cadastrado como ${AnimalCadastrado?.nome}`)
    let removerNomeLowerCase = removerNome.toLowerCase();

    if (removerNomeLowerCase === 'sim') {
        let novoNome = prompt('Digite o nome correto');
        AnimalCadastrado.alterarNome(novoNome);
        alert(`Nome alterado com sucesso, agora o animalzinho está cadastrado como ${AnimalCadastrado?.nome}, obrigado.`);
        continuar = false // o loop while será parado
    }
    else if (removerNomeLowerCase == 'nao' || removerNomeLowerCase == 'não') {
        alert(
        `   
            Animal cadastrado como:
            Nome: ${AnimalCadastrado?.nome}  
            raça: ${AnimalCadastrado?.raca}
            Idade: ${AnimalCadastrado?.idade} 

            Obrigado por Cadastrar seu animal :)
        `
    );
        continuar = false // o loop while será parado
    } else {
        alert('Dado inserido incorretamente, Digite "Sim" ou "não".');
    };
};



