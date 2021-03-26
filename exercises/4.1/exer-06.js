let chessPiece = 'Rainha';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Avança uma casa para todos os lados');
    break;

  case 'rainha':
    console.log('Todos os lados');
    break;

  case 'bispo':
    console.log('Diagonal');
    break;

  case 'cavalo':
    console.log('L');
    break;

  case 'torre':
    console.log('Reta - horizontal e vertical');
    break;

  case 'peao':
    console.log('Avança um casa a frente');
    break;

    default:
      console.log('Peça inválida!');

}