document.getElementById('formDonate').addEventListener('submit', (event) =>{

event.preventDefault();
const mensagemSucesso = document.getElementById('messageSucess');
const formElements = event.target.elements;

const {fullName, email, phone, zipCode, road, city, neighborhood, numberAdress, state } = formElements;

const tutor = {
    fullName: fullName.value,
    email: email.value,    
    phone: phone.value,
    address:{
        road: road.value,
        city: city.value,
        neighborhood: neighborhood.value,
        numberAdress: numberAdress.value,
        state: state.value,
        zipcode: zipCode.value,
    } 
};
    try {
        localStorage.setItem('tutor', JSON.stringify(tutor));
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
        window.location.href = 'registrationAnimal.html'
    }, 3000); 
})