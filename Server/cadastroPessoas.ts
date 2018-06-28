import { Pessoa } from '../gui/src/app/pessoa';

export class CadastroPessoas {
  Pessoas: Pessoa[] = [];
  constructor() {
      
  }
    
  criar(Pessoa: Pessoa): Boolean {
      this.Pessoas.push(Pessoa);
    return true;
  }
  //retorna uma tupla com id e acesso
  logar(login :string,senha:string) : [number,number]{
    var pessoaEncontrada  = new Pessoa()
    let infoPessoa : [number,number]
    this.Pessoas.forEach(function(item){
        if (item.login == login  && item.senha == senha)
        {
          pessoaEncontrada =  item;
        }
    });
    if (pessoaEncontrada) {
      infoPessoa["0"] = pessoaEncontrada.id;
      infoPessoa["1"] = pessoaEncontrada.tipo;
    }
    else{
      return [-1,-1]
    }
   
  }
 
}
