/* Compare dois objetos (JSON) para verificar se são idênticos ou não */

const { obj1, obj2, obj3 } = require('./exercicio5')

describe('Testar função object', () => {
  test('testa se obj1 igual a obj2', () =>{
    expect.assertions(1);
    expect(obj1).toEqual(obj2);
  });

  test('testa se objeto 1 é igual objeto 3', () => {
    expect.assertions(1);
    expect(obj1).not.toEqual(obj3);
  });

  test('testa se obj2 é igual obj 3', ()=> {
    expect.assertions(1);
    expect(obj2).not.toEqual(obj3);
  });
});