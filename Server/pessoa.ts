export class Pessoa{
    nome:   string;
    idade:  string;
    email:  string;
    login:  string;
    senha : string;
    tipo : string ;

    constructor() {
        this.clean();
      }
    
      clean(): void {
        this.nome = "";
        this.idade = "";
        this.email = "";
        this.login = "";
        this.senha = "";
        this.tipo  = ""
      }
    
      
}