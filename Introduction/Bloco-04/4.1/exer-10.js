let custoProduto = 3;
let valorVenda = 5;

if (custoProduto >= 0 && valorVenda >=0){
    let custoTotalProduto = custoProduto * 1.2;
    let lucroTotal = (valorVenda - custoTotalProduto) * 1000;
    console.log(lucroTotal);
}
else{
    console.log('Valores só podem ser positivos!');
}
