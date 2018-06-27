import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pessoa } from '../pessoa';

@Injectable()
export class HomeService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    constructor(private http: Http) { }
    logar(Login : String,  senha :String): Promise<[number,number]> {
        //  this.http.post(this.taURL + "/aluno",JSON.stringify(aluno), {headers: this.headers})
        //        .toPromise()
        //        .then(res => {
        //           if (res.json().success) {return aluno;} else {return null;}
        //        })
        //        .catch(this.tratarErro);
        let tuple : [number,number]
        return tuple
      }

}