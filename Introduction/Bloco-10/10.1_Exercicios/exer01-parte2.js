let stringEncode = 'hi there!'

function encode(encodeString) {
  for (let index = 0; index < encodeString.length; index += 1) {
    encodeString = encodeString.replace('a', 1);
    encodeString = encodeString.replace('e', 2);
    encodeString = encodeString.replace('i', 3);
    encodeString = encodeString.replace('o', 4);
    encodeString = encodeString.replace('u', 5);
  }
  return encodeString;
}


let stringDecode = 'h3 th2r2!'

function decode(decodeString) {
  for (let index = 0; index < decodeString.length; index += 1) {
    decodeString = decodeString.replace(1, 'a');
    decodeString = decodeString.replace(2, 'e');
    decodeString = decodeString.replace(3, 'i');
    decodeString = decodeString.replace(4, 'o');
    decodeString = decodeString.replace(5, 'u');
  }
  return decodeString;
}

const techList = (arrayTech, name) => {
  let arrayTechName = [];
  let resultArray; 
  if (arrayTech.length != 0) {
    arrayTech.sort();
    for (let index = 0; index < arrayTech.length; index += 1) {
      arrayTechName[index] = {
        tech: arrayTech[index],
        name: name,
      }
    } resultArray = arrayTechName;
  } else{
    resultArray = 'Vazio!';
  }
return resultArray;
}

const hydrate = (drinkIt) => {
  let drinkReg = drinkIt.replace(/[^0-9]/g, '').split('');
  let resultCupWater = 0;

  for (let index = 0; index < drinkReg.length; index += 1) {
    resultCupWater += parseInt(drinkReg[index]);
  }
  if (resultCupWater === 1) {
    return '1 copo de água';
  }
  return `${resultCupWater} copos de água`;
}

module.exports = { encode, decode, techList, hydrate }