var express = require('express');
var bodyParser = require("body-parser");
var cadastroPessoas_1 = require('./cadastroPessoas');
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
var app = express();
exports.app = app;
var cadastro = new cadastroPessoas_1.CadastroPessoas();
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.put('/CastrarPessoa', function (req, res) {
    var pessoa = req.body;
    var retornoCadastro = cadastro.criar(pessoa);
    if (retornoCadastro) {
        res.send({ "success": "O aluno foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser atualizado" });
    }
});
var server = app.listen(3000, function () {
    var pessoaAux = {
        nome: "jefferson",
        cpf: "103",
        email: "jrm@cin.ufpe.br",
        login: "jrm",
        senha: "123",
        id: 1,
        tipo: 1
    };
    cadastro.criar(pessoaAux);
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
