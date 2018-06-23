feature: informacoes da matricula
As a: coordenador
I want to: gerar informacoes sobre as matriculas dos alunos e disciplinas
So that: os alunos podem ver essas informacoes

Scenario: Gerar um relatório da situação da matrícula de um aluno quanto a fila de espera
Given:O aluno "x" tem solicitação de matrícula pendente nas disciplinas "a", "b" e "c" cujas notas de corte são "6,0" "7,5" e "8" respectivamente
And: O aluno "x" teve a media "7,5" no semestre anterior
When: Eu solicito o relatório da situacao da sua matrícula do aluno "x"
Then: O sistema gera um relatório com o campo "nome do aluno" contendo "x"
And: O relatório contém o campo "nota de corte do aluno" contendo "7,5"
And: O relatório contém o campo "disciplinas" contendo os valores "a", "b" e "c"
And: O relatório contém o campo "notas de corte" contendo os valores "6,0" "7,5" e "8" 
And: O relatório contém o campo "situação" contendo os valores "matriculado", "matriculado" e "ranking muito baixo"

Scenario: Gerar um relatório sobre uma disciplina
Given: a disciplina "x" tem nota de corte "8,5" número de vagas "10" e número de alunos em fila de espera "100"
When:  Eu solicito o relatório da disciplina "x" quanto a matricula
Then: O sistema gera um relatório com os campos "nome da disciplina" contendo "x"
And:  O relatório contém o campo "vagas" contendo "10"
And:  O relatório contém o campo "nota de corte" contendo "8,5"
And:  O relatório contém o campo "quantidade de alunos em fila de espera" contendo "100"