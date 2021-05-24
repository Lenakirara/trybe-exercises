/* Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a útlima letra de uma string. A terceira deve receber três strings e concatená-las. */

const results = require('./exer4');
jest.mock('./exer4.js');

describe('testa função word1', () => {
  // fazendo uma nova implementação para primeira fuunção
  it('testa se a função retorna a string em caixa baixa', () => {
    results.word1.mockImplementation(str1 => str1.toLowerCase());
    expect(results.word1('STRING')).toEqual('string');
    expect(results.word1).toHaveBeenCalled();
    expect(results.word1).toHaveBeenCalledTimes(1);
    expect(results.word1).toHaveBeenCalledWith('STRING');
  });
});

describe('testa a função word2', () => {
  it('testa se a função retorna a ultima string', () => {
    results.word2.mockImplementation((str2) => str2[str2.length -1]);
    expect(results.word2('word')).toEqual('d');
    expect(results.word2).toHaveBeenCalled();
    expect(results.word2).toHaveBeenCalledTimes(1);
    expect(results.word2).toHaveBeenCalledWith('word');
  });
});

describe('testa função word3', () => {
  it('testa se a função recebe tres strings e concatene-as', () => {
    results.word3.mockImplementation((str3, str4, str5) => `${str3}${str4}${str5}`);

    expect(results.word3('deve','lo', 'per')).toEqual('developer');
    expect(results.word3).toHaveBeenCalled();
    expect(results.word3).toHaveBeenCalledTimes(1);
    expect(results.word3).toHaveBeenCalledWith('deve','lo', 'per');
  })
})