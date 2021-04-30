function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercicio 01.

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function dezCalendar(){
  // puxando a id #days
  const listDezDays = document.querySelector('#days');

  for(let i = 0; i < dezDaysList.length; i += 1){
    const dayList = dezDaysList[i];
    const dayElement = document.createElement('li');
    dayElement.className = 'day';
  
    if(dayList === 24 && dayList === 31){
      dayElement.innerHTML = dayList;
      dayElement.className = 'holiday';     
      listDezDays.appendChild(dayElement);
    } else if (dayList === 4 && dayList === 11 && dayList === 18){
      dayElement.innerHTML = dayList;
      dayElement.className = 'friday'; 
      listDezDays.appendChild(dayElement);
    } else if (dayList === 25){
      dayElement.innerHTML = dayList;
      dayElement.className = 'holiday friday'; 
      listDezDays.appendChild(dayElement);
    }else{
      dayElement.innerHTML = dayList;
      listDezDays.appendChild(dayElement);
    }    
  }
}
dezCalendar();

// Exercício 02
function holidayButtonCreate(){
  const buttonContaine = document.querySelector('.buttons-container');
  
  const buttonCreate = document.createElement('button');
  buttonCreate.innerText = 'Feriados';
  const buttonId = 'btn-holiday';

  buttonCreate.id = buttonId;
  buttonContaine.appendChild(buttonCreate);
}
holidayButtonCreate();

// Exercício 03
function holidayButtonEvent(){
  const buttonEvent = document.querySelector('#btn-holiday');
  const allHolidays = document.querySelector('.holiday');
//percorrer os feriados
  for(let i = 0; i < allHolidays.length; i += 1){
    
  }

  buttonEvent.addEventListener('click', function(event){

  })


  
}