/*Ciente que o exercicio pediu para fazer arquivos diferentes para cada processo, 
mas é mais comodo fazer tudo junto, em prol do tempo */

let a = 5;
let b = 8;

//as cinco operações básicas

console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a / b);
console.log( a % b );

//a analise de 2 numeros funciona mesmo se 'a' e 'b' forem iguais

if ( a > b ){
    console.log( a + ' é maior que ' + b );
}
else if ( b > a ){
    console.log( b + ' é maior que ' + a )
}
else{
    console.log(a + ' é igual a ' + b)
}

//a analise de 3 numeros só funciona se os 3 numeros forem diferentes

let c = 20;

if (a > b && a > c){
    console.log(a + ' é o maior numero');
}else if ( b > a && b > c ){
    console.log(b + ' é o maior numero');
}else if ( c > a && c > b){
    console.log(c + ' é o maior numero');
}

//analise de numero negativo

if ( a > 0 ){
    console.log('positive');
}
else if ( 0 > a ){
    console.log('negative')
}
else{
    console.log('zero')
}

//validade dos angulos de um triangulo

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

if ( angulo1 > 0 && angulo2 > 0 && angulo3 > 0 ){
    if (angulo1 + angulo2 + angulo3 == 180){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
else{
    console.log ('Algum dos angulos não tem valor positivo');
}

//Movimentos de peças de xadrez

let piece = 'Rainha';

switch (piece.toLowerCase()){
    case ('rei'):
        console.log('Diagonais e lineares, mas apenas uma casa');
        break;
    case ('rainha'):
        console.log('Diagonais e lineares'); 
        break;
    case ('bispo'):
        console.log('Diagonais'); 
        break;
    case ('torre'):
        console.log('Lineares'); 
        break;
    case ('cavalo'):
        console.log('Em formato de L'); 
        break;
    case ('peao'):
        console.log('Para frente, apenas uma casa'); 
        break;
    default:
        console.log('Peça não identificada')
}

//Analise de nota para letras

let nota = 87;
let nota_letra;

if (nota >= 90){
    nota_letra = 'A';
}
else if (nota >= 80){
    nota_letra = 'B';
}
else if (nota >= 70){
    nota_letra = 'C';
}
else if (nota >= 60){
    nota_letra = 'D';
}
else if (nota >= 50){
    nota_letra = 'E';
}
else if (nota < 50){
    nota_letra = 'F';
}
else{
    nota_letra = 'Erro, valor invalido';
}

console.log (nota_letra);

//Analisar numero par

let num1 = 39;
let num2 = 16;
let num3 = 13;

if (num1%2 == 0 || num2%2 == 0 || num3%2 == 0){
    console.log("true");
}
else{
    console.log("false");
}

//Analisar numero impar

if (num1%2 == 1 || num2%2 == 1 || num3%2 == 1){
    console.log("true");
}
else{
    console.log("false");
}

//calculador de lucro

let custo = 1000;
let valor = 2000;
let lucro;

if (valor < 0 || custo < 0){
    console.log('Erro, algum valor é negativo')
}
else{
    custo = custo * 1.2;
    lucro = valor - custo;
    console.log('O valor do lucro foi: ' + lucro);
}

//Impostos Brasileiros

let bruto = 3000;
let liquido;

if (bruto >= 0){
    if (bruto <= 1556.94){
        liquido = bruto * 0.92;
    }
    else if (bruto <= 2594.92){
        liquido = bruto * 0.91;
    }
    else if (bruto <= 5189.82){
        liquido = bruto * 0.89;
    }
    else if (bruto > 5189.82){
        liquido = bruto - 570,88;
    }

    if (liquido > 1903.98 && liquido <= 2826.65){
        liquido = (liquido * 0.925) + 142.80;
    }
    else if (liquido <= 3751.05){
        liquido = (liquido * 0.85) + 354.80;
    }
    else if (liquido <= 4664.68){
        liquido = (liquido * 0.775) + 636.13;
    }
    else if (liquido > 4664.68){
        liquido = (liquido * 0.725) + 869.36;
    }

    console.log (liquido);
}



