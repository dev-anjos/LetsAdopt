document.addEventListener('DOMContentLoaded', () => {
    const animalDataDiv = document.getElementById('ulCardAnimal');
    const animals = JSON.parse(localStorage.getItem('animals')) || [];
    const tutor = JSON.parse(localStorage.getItem('tutor'));
    const searchBar = document.getElementById('searchBar');

    function displayAnimals (animals) {
        if (animals.length > 0) {
            animalDataDiv.innerHTML = animals.map(animal => `
               <li class="lista">
                    <img src="${animal.photoAnimal}" class="img__pets" alt="" srcset=""> 
                        <div class="conteudo__pets">
                            <p class="pet__nome">${animal.nameAnimal}</p>
                            <div class="dadosAnimal">
                                <p class="pet__descricacao">${animal.animalSpecies}</p>
                                <p class="pet__descricacao">${animal.animalBreed}</p>
                                <p class="pet__descricacao">${animal.sex}</p>
                                <p class="pet__descricacao">${animal.animalAge}</p>
                            </div>
                        </div>
                        
                        <hr>
    
                        <div class="  responsavel">
                            <h4 class="tittle_responsavel">Dados do responsável</h4>
                            <div class="containerDadosResponsavel">
                                <p class="dadosResposanvel"><strong>Nome completo</strong>${animal.tutor.fullName}</p>
                                <p class="dadosResposanvel"><strong>E-mail</strong>${animal.tutor.email}</p>
                                <p class="dadosResposanvel"><strong>Telefone</strong> ${animal.tutor.phone}</p>
                                <div>
                                    <h4 class="tittle_responsavel">Endereço do animal</h4>
                                    <div>
                                        <p class="dadosResposanvel"><strong>Cidade</strong>${animal.tutor.address.city}</p>
                                        <p class="dadosResposanvel"><strong>Rua</strong>${animal.tutor.address.road}</p>
                                        <p class="dadosResposanvel"><strong>Bairro</strong>${animal.tutor.address.neighborhood}</p>
                                        <p class="dadosResposanvel"><strong>Numero</strong>${animal.tutor.address.numberAdress}</p>
                                        <p class="dadosResposanvel"><strong>Estado</strong>${animal.tutor.address.state}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <a href="https://wa.me/${animal.tutor.phone}" target="_blank" class="btn__saiba">Entre em contato <span class="fab fa-whatsapp" style="color: #038c1e";></span></a>
                    </div>
                </li>
            `).join('');
        } else {
            animalDataDiv.textContent = 'Nenhum dado encontrado.';
        }
    }

    function searchAnimals (){
        const searchInput = searchBar.value.toLowerCase();
        const filteredAnimals = animals.filter(animal => 
            animal.nameAnimal.toLowerCase().includes(searchInput) ||
            animal.animalSpecies.toLowerCase().includes(searchInput) ||
            animal.animalBreed.toLowerCase().includes(searchInput) ||
            animal.sex.toLowerCase().includes(searchInput) ||
            animal.animalAge.toLowerCase().includes(searchInput)
        );
        displayAnimals(filteredAnimals);
    }


    searchBar.addEventListener('input', searchAnimals);

    displayAnimals(animals);
    
});
