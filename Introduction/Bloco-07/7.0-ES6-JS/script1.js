/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
- Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
- Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() .*/

// Forma 01
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}
const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);


/* Forma 2*/

const oddsAndEvens1 = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}
const sortedArrayBonus = sortArrayBonus(oddsAndEvens1);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);


/* Forma 3 */
const oddsAndEvens2 = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens2.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);