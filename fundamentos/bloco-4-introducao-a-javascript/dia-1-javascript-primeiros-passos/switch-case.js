let aprovacao = '';

switch (aprovacao) {
    case('aprovada'):
        console.log('Parabéns, voce foi aprovado');
        break;    
    case('lista'):
        console.log ('Você está na nossa lista de espera');
        break;
    case('reprovada'):
        console.log ('Você foi reprovado')
        break;
    default:
        console.log('não se aplica')
}