/* 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

// comparando se os numeros sorteado e escolhido são iguais.
const randomNumbers = (betNumber, numRandom) => betNumber === numRandom;

// HOF -> meu numero escolhido e suando callbac para chamar o resultado 
const loteryRandom = (betNumber, callback) => {
  const numRandom =  Math.floor(Math.random() * 5 + 1);

  return callback(betNumber, numRandom) ? `Número sortedo: ${numRandom} -> Parabéns você ganhou!` : `Número sortedo: ${numRandom} -> Tente novamente!`;
}
// 3 -> meu numero | randomNumbers numeros sorteado.
console.log(loteryRandom(3, randomNumbers));