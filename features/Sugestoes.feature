feature: Sugestoes baseadas em estatisticas na hora do cadastro de turmas
As a: coordenador
I want to: ver sugestoes baseadas em estatisticas para a turma que estou cadastrando
So that: eu posso organizar facilmente o próximo semestre de forma adequada

Scenario: sugestoes para uma turma de uma disciplina nova no sistema
Given: eu estou na página “catálogo de cursos”
And: Na página de planilhas eu vejo a planilha “estatísticas das disciplinas” com o campo “probabilidade de alunos que pagaram eletivas relacionadas a IA pagarem novas eletivas relacionadas a IA” contendo “0.9”
And: Na página de planilhas eu vejo a planilha “estatísticas das disciplinas” com o campo “probabilidade de alunos que não pagaram eletivas relacionadas a IA pagarem eletivas relacionadas a IA” contendo “0.2”
And: Na página de planilhas eu vejo a planilha “estatísticas das disciplinas” com o campo “número de alunos que pagaram eletivas relacionadas a IA” contendo “45”
And: Na página de planilhas eu vejo a planilha “estatísticas das disciplinas” com o campo “número total de alunos” contendo “100”
And: adicionei ao catálogo de cursos a disciplina “redes neurais” do tipo “eletiva”, relacionada à área “inteligência artificial” para o curso “Ciência da Computação”
When: eu solicito o cadastro para uma turma da disciplina “redes neurais” do curso “Ciência da Computação” para o semestre “2018.2” para o “6º” período
Then: Eu posso ver o campo “vagas sugeridas” com “52”