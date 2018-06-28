import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class HomeService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    constructor(private http: Http) { }
    logar(Login : String,  senha :String): Promise<[number,number]> {
        return this.http.post(this.taURL + "/logar",{"login" : Login, "senha" : senha }, {headers: this.headers})
        .toPromise()
        .then(res => {
           return res.json() as [number,number];}
        );      
    }
}