/* Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar. */

const results = require('./exer5');

jest.mock('./exer5.js');

describe('testa função word1', () => {
  it('testa se a função retorna a string em caixa baixa', () => {
    results.word1.mockImplementation(str1 => str1.toLowerCase());
    expect(results.word1('STRING')).toBe('string');
    expect(results.word1).toHaveBeenCalled();
    expect(results.word1).toHaveBeenCalledTimes(1);
    expect(results.word1).toHaveBeenCalledWith('STRING');
  });

  it('testa a função restaurada', () => {
    results.word1.mockReset();
    results.word1.mockImplementation((str1) => str1.toUpperCase());

    expect(results.word1('word')).toBe('WORD');
    expect(results.word1).toHaveBeenCalled();
    expect(results.word1).toHaveBeenCalledTimes(1);
    expect(results.word1).toHaveBeenCalledWith('word');
  })
});
