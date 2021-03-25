let chessPiece = 'Cavalo'.toLowerCase();

if (chessPiece == 'rei'){
    console.log('Avança uma casa para todos os lados');
}
else if(chessPiece == 'rainha'){
    console.log('Todos os lados');
}
else if(chessPiece == 'bispo'){
    console.log('Diagonal');
}
else if(chessPiece == 'cavalo'){
    console.log('L');
}
else if(chessPiece == 'torre'){
    console.log('Reta - horizontal e vertical');
}
else if(chessPiece == 'peao'){
    console.log('Avança um casa a frente');
}
else{
    console.log('Peça inválida!');
}