import { AnimalParaAdocao } from "./classAnimalAdocao.js";

function cadastrarAnimal (){
    let nome = prompt('Seja bem-vindo ao cadastro do seu animal. Digite o nome dele:');
    console.log(nome)
    let raca = prompt('Digite a raça do animal');
    console.log(raca)
    let idade = prompt('Digite a idade do animal');
    console.log(idade)

    let animal = [nome,raca,idade];

    //Passa o Array para class construir o novo animal
    let novoAnimal = new AnimalParaAdocao(animal);
    console.log(novoAnimal)
    
    return novoAnimal;
    
};

//Pegando o retorno da função
let animalCadastrado = cadastrarAnimal();

let continuar = true; // quando for digitado não essa variavel será atribuida com false

while (continuar) {

    // let animalCadastrado = new AnimalParaAdocao('Apolo', 'SRD', 7);
    // console.log(animalCadastrado);

    let removerNome = prompt(`Gostaria de alterar o nome do animal? Ele está cadastrado como ${animalCadastrado.nome}`)
    let removerNomeLowerCase = removerNome.toLowerCase();
    console.log(removerNomeLowerCase);

    if (removerNomeLowerCase == 'sim') {
        let novoNome = prompt('Digite o nome correto');
        animalCadastrado.alterarNome(novoNome);
        alert(`Nome alterado com sucesso, agora o animalzinho está cadastrado como ${animalCadastrado.nome}, obrigado.`);
        continuar = false // o loop while será parado
    }
    else if (removerNomeLowerCase == 'nao' || removerNomeLowerCase == 'não') {
        alert('Obrigado por cadastrar o seu animalzinho')
        continuar = false // o loop while será parado
    } else {
        alert('Dado inserido incorretamente, Digite "Sim" ou "não".')
    };
}