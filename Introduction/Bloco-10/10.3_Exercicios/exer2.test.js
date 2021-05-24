/* Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários. */

const results = require('./exer2');

describe('testa função numbers', () => {
  it('testa o retorno da divisão de dois parametros', () => {
    results.numbers = jest.fn().mockImplementation((a, b) => a / b);

    expect(results.numbers(10, 5)).toBe(2);
    expect(results.numbers).toHaveBeenCalled();
    expect(results.numbers).toHaveBeenCalledTimes(1);
    expect(results.numbers).toHaveBeenCalledWith(10, 5);
  })
})