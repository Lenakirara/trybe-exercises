/* Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário. */

const results = require('./exer6');

describe('testa função fetchApiDog', () => {
  results.fetchApiDog = jest.fn();
  afterEach(results.fetchApiDog.mockReset);
  
  it('testa se a requisição teve sucesso', async () => {
    results.fetchApiDog.mockResolvedValue('request sucess');

    results.fetchApiDog();
    expect(results.fetchApiDog).toHaveBeenCalled();
    expect(results.fetchApiDog).toHaveBeenCalledTimes(1);
    expect(results.fetchApiDog()).resolves.toBe("request sucess");
    expect(results.fetchApiDog).toHaveBeenCalledTimes(2);
  });

  it('testa se a requisição teve falha', async () => {
    results.fetchApiDog.mockResolvedValue('request failed');

    expect(results.fetchApiDog).toHaveBeenCalledTimes(0);
    expect(results.fetchApiDog()).rejects.toMatch("request failed");
    expect(results.fetchApiDog).toHaveBeenCalledTimes(1);
  });
});