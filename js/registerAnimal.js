
import FormValidator from "./validations.js";

const validator = new FormValidator;

document.getElementById('formDonate').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const mensagemSucesso = document.getElementById('messageSucess');
    const formElements = event.target.elements;
    
    const { nameAnimal, animalSpecies, sexFem, sexMasc, photoAnimal,animalBreed, animalAge } = formElements;
    
    let sex = '';
    if (sexFem.checked) {
        sex = sexFem.value;
    } else if (sexMasc.checked) {
        sex = sexMasc.value;
    }
      
    if (!validator.validateNameAnimal(nameAnimal.value)) {
        alert('Por favor, informe o nome do animal.');
        return;
    }
    if (!validator.validateAnimalSpecies(animalSpecies.value)) {
        alert('Por favor, selecione a espécie do animal.');
        return;
    }
    if (!validator.validateAnimalBreed(animalBreed.value)) {
        alert('Por favor, informe a raça do animal.');
        return;
    }
    if (!validator.validateAnimalAge(animalAge.value)) {
        // Tratar erro de validação para idade do animal
        alert('Por favor, informe uma idade válida para o animal.');
        return;
    }

    const file = photoAnimal.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const animal = {
            nameAnimal: nameAnimal?.value,
            animalSpecies: animalSpecies?.value,   
            animalBreed: animalBreed?.value, 
            sex: sex,
            animalAge: animalAge?.value,
            photoAnimal: e.target.result // URL base64 da imagem
        };

        
        const { fullName, email, phone, address: { road, city, neighborhood, numberAdress, state } = {} } = JSON.parse(localStorage.getItem('tutor')) || {};

        animal.tutor = {
            fullName,
            email,
            phone,
            address: {
                road,
                city,
                neighborhood,
                numberAdress,
                state
            }
        };
        

        let animals = JSON.parse(localStorage.getItem('animals')) || [];
        animals.push(animal);

        try {
            localStorage.setItem('animals', JSON.stringify(animals));
            mensagemSucesso.innerHTML = ` 
                <div class="notification is-success">
                    <strong>Cadastro feito com sucesso!</strong><br>
                </div>
            `;
        } catch (e) {
            mensagemSucesso.textContent = 'Erro ao salvar os dados.';
            mensagemSucesso.style.color = 'red';
            console.error('Erro ao salvar no localStorage:', e);
        }
        
        setTimeout(() => {
            mensagemSucesso.innerHTML = '';
            window.location.href = 'index.html'
        }, 3000); // 3000 ms = 3 segundos
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
