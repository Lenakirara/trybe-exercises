test('array and object equality', () => {
  const arr = [1, 2, 3];
  const obj = {a: 1, b: 2, c: 3};

  // toBe -> igualdade estrita
  // toEqual -> usado para testar objetos e arrays
  /* expect(arr).toBe([1, 2, 3]);
  expect(obj).toBe({ a: 1, b: 2, c: 3}); */
  expect(arr).toEqual([1, 2, 3]);
  expect(obj).toEqual({ a: 1, b: 2, c: 3});
});