/* Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova que receba um parâmetro e retorne seu dobro. Faça os testes necessários. */

const results = require('./exer3');

describe('testa função numbers com 3 parametros', () => {
  it('testa o retorno de uma multiplicação', () => {
    results.numbers = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(results.numbers(2, 4, 3)).toBe(24);
    expect(results.numbers).toHaveBeenCalled();
    expect(results.numbers).toHaveBeenCalledTimes(1);
    expect(results.numbers).toHaveBeenCalledWith(2, 4, 3);
  });
});

describe('testa função numbers - mockar função', () => {
  it('testa se a função recebe um parâmetro e retorne seu dobro', () => {
    results.numbers.mockReset();

    expect(results.numbers).toHaveBeenCalledTimes(0);
// recebe um parametro (a) e recebe o dobro
    results.numbers.mockImplementation((a) => a * 2);

    expect(results.numbers(4)).toBe(8);
    expect(results.numbers).toHaveBeenCalled();
    expect(results.numbers).toHaveBeenCalledTimes(1);
    expect(results.numbers).toHaveBeenCalledWith(4);
  });
});