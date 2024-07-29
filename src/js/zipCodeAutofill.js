async function addressSearch(zipCode){
    // 'tentar'
    const mensangemErro = document.getElementById('messageBox')
    const inputZipCode = document.getElementById('zipCode')

    mensangemErro.innerHTML ='';
    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
        let consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('Cep não existente!')
        }
        
        let stateCollected = document.getElementById('state');
        let cityCollected = document.getElementById('city');
        let roadCollected = document.getElementById('road');
        
        stateCollected.value = consultaCEPConvertida.uf
        cityCollected.value = consultaCEPConvertida.localidade;
        roadCollected.value = consultaCEPConvertida.logradouro;

        neighborhood.value = consultaCEPConvertida.bairro

        return consultaCEPConvertida;
        
    } catch(erro){

        inputZipCode.classList.add('is-danger');
        inputZipCode.classList.add('is-focused');
        mensangemErro.innerHTML = `
      
            <div class="notification is-danger is-light">
                
                <strong>O CEP informado é inválido.</strong><br> Por favor, insira um CEP válido.
            </div>
        `
        setTimeout(() => { 
        
            mensangemErro.querySelector('.errorMessage').classList.add('fade-out');
        } , 2000);
        
        setTimeout(() => {
        inputZipCode.classList.remove('is-danger');
        inputZipCode.classList.remove('is-focused');
            mensangemErro.innerHTML = ''
        } , 3000);
        
    }
}

const ZipCodeCollected = document.getElementById('zipCode');
ZipCodeCollected.addEventListener('focusout', () => addressSearch(ZipCodeCollected.value));