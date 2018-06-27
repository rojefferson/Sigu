var pessoa_1 = require('../gui/src/app/pessoa');
var CadastroPessoas = (function () {
    function CadastroPessoas() {
        this.Pessoas = [];
    }
    CadastroPessoas.prototype.criar = function (Pessoa) {
        this.Pessoas.push(Pessoa);
        return true;
    };
    //retorna uma tupla com id e acesso
    CadastroPessoas.prototype.logar = function (login, senha) {
        var pessoaEncontrada = new pessoa_1.Pessoa();
        var infoPessoa;
        this.Pessoas.forEach(function (item) {
            if (item.login == login && item.senha == senha) {
                pessoaEncontrada = item;
            }
        });
        if (pessoaEncontrada) {
            infoPessoa["0"] = pessoaEncontrada.id;
            infoPessoa["1"] = pessoaEncontrada.tipo;
        }
        else {
            return [-1, -1];
        }
    };
    return CadastroPessoas;
})();
exports.CadastroPessoas = CadastroPessoas;
