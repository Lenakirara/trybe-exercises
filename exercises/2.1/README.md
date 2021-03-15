Estudando Git na prática - Atividade proposta:

1. Navegue até a raiz do projeto com o arquivo .txt,
2. Crie uma nova branch `git branch trybe-skills-changes`,
3. Fazer checkout `git checkout trybe-skills-changes`,
4. No arquivo .txt , ao final da lista de habilidades, adicionar mais duas habilidades que serão desenvolvidas ao longo do curso;
`cat >> trybe-skills.txt`

Exemplo do texto usado:

![img-texto](https://github.com/Lenakirara/trybe-exercises/blob/master/img-texto.png)

5. Adicionar arquivo `git add trybe-skills.txt`,
6. Fazer commit `git commit -m "mensagem"`,
7. Enviar para o remoto `git push -u origin trybe-skills-changes`,
9. Abrir Pull Request com uma descrição detalhada:
    <p>Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho 
      feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... 
      E para resolver o problema fizemos... E o resultado foi..."</p>
      
:rotating_light: OBS. não faça o MERGE ainda.

10. Retorne para a branch principal, `master` , com o comando: `git checkout master`;
11. Verifique se está na branch master, `git branch` (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
12. Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;
`git branch trybe-skills-updates`  `git checkout trybe-skills-updates`
13. No arquivo .txt adicione mais um aprendizado que será aprendido nos próximos blocos (passo 4);

:warning: Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch

- Faça um `git add trybe-skills.txt`
- Agora um `git commit -m "Mensagem"`
- e por último um `git push -u origin trybe-skills-updates`
- Após o primeiro "push" da branch, usar apenas o comando `git push`
- Abra um Pull Request 

:rotating_light: Não faça o MERGE

14. No Slack , procure pelo canal "code-review-*" relativo à sua turma, e avise que você chegou a este ponto. O próximo passo será realizar o Code Review (CR) do projeto de outras pessoas estudantes. Entre em pelo menos um Pull Request e deixe alguns comentários para seus colegas;

15. Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master , através do Pull Request :

