//Declaração de variaveis
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maior = 0;
let impares = 0;
let menor = 10000;

//Checagem de itens do array, imprimi-los, soma-los, achar o maior, menor e quantos impares
for (let i = 0; i < numbers.length; i += 1){
    console.log (numbers[i]);
    soma += numbers[i];
    
    if (numbers[i] > maior){
        maior = numbers[i];
    }

    if (numbers[i] % 2 == 1){
        impares += 1;
    }

    if (numbers[i] < menor){
        menor = numbers[i];
    } 
} 

let media = soma / numbers.length; //Calcular media

console.log ('Soma: ' + soma); //Imprimir Soma
console.log ('Média: ' + media); //Imprimir Media

//Checagem se a media é maior ou menor que 20
if (media > 20){
    console.log('Valor maior que 20');
}
else if (media < 20){
    console.log('valor menor que 20');
}

console.log ('O maior valor do array é: ' + maior); //Imprimir maior valor
if (impares == 0){
    console.log ('Nenhum valor impar encontrado');
}
else{
    console.log ('Tem ' + impares + ' numeros impares no array'); //Imprimir quantos impares
}

console.log ('O menor valor do array é: ' + menor); //Imprimir menor valor

let novo = []; //Criacao do novo array

//Preenchimento do array, e impressao dos valores
for (let i=1; i <= 25; i += 1){
    novo[i]=i;
    console.log (novo[i]);
}

//impressao dos valores divididos por 2 do array
for (let i=1; i <= 25; i += 1){
    console.log(novo[i]/2);
}