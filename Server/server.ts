import express = require('express');
import bodyParser = require("body-parser");

import { Pessoa } from '../gui/src/app/pessoa';
import { CadastroPessoas } from './cadastroPessoas';

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
var app = express();
var cadastro: CadastroPessoas = new CadastroPessoas();
app.use(allowCrossDomain);

app.use(bodyParser.json());



app.put('/CastrarPessoa', function (req: express.Request, res: express.Response) {
  var pessoa: Pessoa = <Pessoa> req.body;
  var retornoCadastro = cadastro.criar(pessoa);
  if (retornoCadastro) {
    res.send({"success": "O aluno foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser atualizado"});
  }
})


var server = app.listen(3000, function () {
    var pessoaAux :   Pessoa = { 
                                  nome:   "jefferson",
                                  cpf: "103",
                                  email: "jrm@cin.ufpe.br",
                                  login: "jrm",
                                  senha: "123",
                                  id : 1,
                                  tipo : 1,
                                    }

   cadastro.criar(pessoaAux);
   console.log('Example app listening on port 3000!');
  })
  
  function closeServer(): void {
     server.close();
  }
  
  export { app, server, closeServer }
  