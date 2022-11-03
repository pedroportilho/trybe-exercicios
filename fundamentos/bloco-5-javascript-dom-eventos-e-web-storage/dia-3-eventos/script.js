const lista = document.getElementById('days');
const weekDaysList = document.getElementsByClassName('week-days')[0];
const buttonDiv = document.getElementsByClassName('buttons-container')[0];
const tasks = document.getElementById('my-tasks');
const adicionar = document.getElementById('btn-add');
const myTasks = document.getElementsByClassName('my-tasks')[0];

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

function events(day) {
  day.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = "26px"
  });

  day.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = "20px"
  });

  day.addEventListener('click', (event) => {
    const selected = document.getElementsByClassName('selected');

    if (selected.length > 0) {
      if (event.target.style.color === selected[0].style.backgroundColor) {
        event.target.style.color = "rgb(119,119,119)";
      } else {
        event.target.style.color = selected[0].style.backgroundColor;
      }
    }
  });
}

function createDaysOfTheMonth() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const days = decemberDaysList[index];
    const day = document.createElement('li');
    day.innerHTML = days;

    events(day);
    if (index % 7 === 5) {
      day.classList.add('friday');
    }

    if (days === 24 || days === 25 || days === 31) {
      day.classList.add('holiday')
    }

    lista.appendChild(day);
  };

}

function feriados() {
  const feris = document.getElementsByClassName('holiday');

  for (let i = 0; i < feris.length; i += 1 ) {
    if (feris[i].style.backgroundColor === "green") {
      feris[i].style.backgroundColor = "rgb(238,238,238)"
      feris[i].style.color = "#666"
    } else {
      feris[i].style.backgroundColor = "green"
      feris[i].style.color = 'white'
    }
  }
}

function createFeriadosButton(nome) {
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = nome;

  button.addEventListener('click', feriados);

  buttonDiv.appendChild(button);
}

function sexta() {
  const feris = document.getElementsByClassName('friday');
  let dia = 4;

  for (let i = 0; i < feris.length; i += 1 ) {
    if (feris[i].innerText === "Sextou!") {
      feris[i].innerText = `${dia}`
      dia += 7;
    } else {
      feris[i].innerText = "Sextou!"
      
    }
  }
}

function createSextaButton(nome) {
  const button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerHTML = nome;

  button.addEventListener('click', sexta);

  buttonDiv.appendChild(button);
}

function createTarefa() {
  const span = document.createElement('span');
  span.innerHTML = 'cozinhar';
  
  const cor = document.createElement('div');
  cor.classList.add('task');
  cor.style.backgroundColor = 'green';

  cor.addEventListener('click', (event) => {
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  });
  
  myTasks.appendChild(span);
  myTasks.appendChild(cor);  
}

createDaysOfTheWeek();
createDaysOfTheMonth();
createFeriadosButton('Feriados');
createSextaButton('Sexta-feira');
createTarefa();
