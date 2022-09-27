let fatorial10= 1;

for (let i = 1; i <= 10; i += 1){
    fatorial10 *= i;
}

console.log(fatorial10);

let word = 'tryber';
let aux = word.split(""); 
let aux_invertido = aux.reverse(); 
let invertido = aux_invertido.join("");

console.log(invertido);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior_palavra = '';

for (let i =0; i<array.length; i+=1){
    if(array[i].length > maior_palavra.length){
        maior_palavra = array[i];
    }
}

console.log (maior_palavra);

let primo = 0;
let bprimo = true;

for (let i = 2; i <= 50; i += 1){

    for(let j = 2 ; j < i; j += 1 ){
        if(i % j == 0){
            bprimo = false;
        }
    }
    
    if (bprimo){
        primo = i;
    }
    
    bprimo = true;
}

console.log(primo);