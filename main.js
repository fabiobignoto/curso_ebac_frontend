console.log("Script Conectado")

const form = document.querySelector('#numbers-form');

const numberA = document.querySelector('#numberA');
const numberB = document.querySelector('#numberB');

const message = document.querySelector('#response-message');

const successMessage = 'Valores inseridos corretamente!';
const errorMessage = 'Valores inseridos de forma incorreta. O segundo número deve ser superior.';

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(numberA.value < numberB.value){
        message.innerHTML = successMessage;
        message.classList.remove('input-error');
        message.classList.add('input-success')
    }

    else{
        message.innerHTML = errorMessage;
        message.classList.remove('input-success');
        message.classList.add('input-error')
    }

})

form.addEventListener('reset', function(e){
    numberA.value = '';
    numberB.value = '';

    message.innerHTML = '';
    message.classList.remove('input-error');
    message.classList.remove('input-success');
})