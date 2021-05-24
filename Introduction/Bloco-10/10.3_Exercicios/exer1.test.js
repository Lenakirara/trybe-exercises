/* Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
 */

const result = require('./exer1');

describe('Testa a função numbers' , () => {
  it('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    result.numbers = jest.fn().mockReturnValue(10);

    expect(result.numbers()).toBe(10);
    expect(result.numbers).toHaveBeenCalled();
    expect(result.numbers).toHaveBeenCalledTimes(1);
  });;
});
