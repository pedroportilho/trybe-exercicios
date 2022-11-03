const texto = document.getElementById('texto');
const bgButton = document.getElementsByClassName('bgOption');
const fcButton = document.getElementsByClassName('fontColor');
const fsButton = document.getElementsByClassName('fontSize');
const eButton = document.getElementsByClassName('lineSpace');
const fButton = document.getElementsByClassName('font')

let config = ['white', 'black', '12pt', 'normal', 'Times New Roman'];


function trocarBg(event) {
  const botao = event.target;
  texto.style.backgroundColor = botao.innerText;
  
  config[0] = botao.innerText;
  console.log(config);
  localStorage.setItem('config', JSON.stringify(config));

  Array.prototype.forEach.call(bgButton, (e) => {
    if (e.disabled){
      e.disabled = false;
    }  
  })

  botao.disabled = true;
}

function trocarFcolor(event) {
  const botao = event.target;
  texto.style.color = botao.innerText;

  config[1] = botao.innerText;
  localStorage.setItem('config', JSON.stringify(config));

  Array.prototype.forEach.call(fcButton, (e) => {
    if (e.disabled){
      e.disabled = false;
    }  
  })

  botao.disabled = true;
}

function trocarFsize(event) {
  const botao = event.target;
  texto.style.fontSize = botao.innerText;
  
  config[2] = botao.innerText;
  localStorage.setItem('config', JSON.stringify(config));

  Array.prototype.forEach.call(fsButton, (e) => {
    if (e.disabled){
      e.disabled = false;
    }  
  })

  botao.disabled = true;
}

function trocarSpace(event) {
  const botao = event.target;
  texto.style.lineHeight = botao.innerText;
  
  config[3] = botao.innerText;
  localStorage.setItem('config', JSON.stringify(config));

  Array.prototype.forEach.call(eButton, (e) => {
    if (e.disabled){
      e.disabled = false;
    }  
  })

  botao.disabled = true;
}

function trocarFonte(event) {
  const botao = event.target;
  texto.style.fontFamily = botao.innerText;
  
  config[4] = botao.innerText;
  localStorage.setItem('config', JSON.stringify(config));

  Array.prototype.forEach.call(fButton, (e) => {
    if (e.disabled){
      e.disabled = false;
    }  
  })
  botao.disabled = true;
}

function configurar() {
  if (localStorage.getItem('config')){
    config = JSON.parse(localStorage.getItem('config'));
    console.log(config);
  } 

  texto.style.backgroundColor = config[0];
  texto.style.color = config[1];
  texto.style.fontSize = config[2];
  texto.style.lineHeight = config[3];
  texto.style.fontFamily = config[4];
};

function start() {
  Array.prototype.forEach.call(bgButton, (e) => {
    e.addEventListener('click', trocarBg);
  });
  
  Array.prototype.forEach.call(fcButton, (e) => {
    e.addEventListener('click', trocarFcolor);
  })
  
  Array.prototype.forEach.call(fsButton, (e) => {
    e.addEventListener('click', trocarFsize);
  })
  
  Array.prototype.forEach.call(eButton, (e) => {
    e.addEventListener('click', trocarSpace);
  })
  
  Array.prototype.forEach.call(fButton, (e) => {
    e.addEventListener('click', trocarFonte);
  })
  
  configurar();
}

window.onload = start;
