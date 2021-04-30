const allStates = document.querySelector('#disabledSelect');
const ufs = ['', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const buttonSubmit = document.querySelector('.submit-btn');
const lineContent = document.querySelector('.line-content')
const resetButton = document.querySelector('.reset-btn');

const cpfValidation = document.querySelector('#input-cpf');

// array dos estados
function states() {
  for (let i = 0; i < ufs.length; i += 1) {
    const option = document.createElement('option');
    allStates.appendChild(option);
    option.innerText = ufs[i];
  }
}
states();

//check email
function emailCheck() {
  const email = document.querySelector('#input-email');
  let inputEmail = email.value;
  const formatEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(inputEmail);
  if (!formatEmail && inputEmail.length) {
    email.value = '';
    alert('Email inválido!');
    return false;
  }
  return formatEmail;
}
/*
// Validar data
function validateDate() {
  const date = document.querySelector('#input-name');
  
  
  let day = inputDate[0];
  let month = inputDate[1];
  let year = inputDate[2];

  if(month < 1 || month > 12){
    return false;
  } else if(day < 1 || day > 31){
    return false;
  }else if ((month === 4 || month === 6 || month === 9 || month === 11) && (day === 31)){
    return false;
  } else if (month === 2){
    let leap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
      if(day > 29 || (day === 29 && !leap)){
        return false;
      }
    return true;
  }
} */

// limpando todos os campos
const clearForm = document.querySelector('#form-curriculum');
function clearAll() {
  clearForm.innerText = '';
}
resetButton.addEventListener('click', clearAll);

// verificando o preventDefault
function checkDefault(e) {
  e.preventDefault();
}
buttonSubmit.addEventListener('submit', checkDefault);


