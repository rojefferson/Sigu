feature: Cadastro de Formulários
As a: coordenador
I want to: cadastrar formulários no sistema
So that: os alunos podem responder aos formulários e eu posso acessar as respostas

Scenario: cadastro de formulário com respostas postas em planilha
Given: Eu estou na página requerimentos e formulários
When: Eu adiciono o formulário “x” como associado à uma planilha
And: Eu vou para a página “planilhas”
Then: Eu posso ver a planilha “x”