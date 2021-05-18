const multiplyByTwo = (number) => {
  if(!number){
    throw Error('numero é indefinido');
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('test se é lançado um erro quando numero é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrowError();
});
test('testa se a mensagem de erro é "number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrowError(Error('numero é indefinido'));
});