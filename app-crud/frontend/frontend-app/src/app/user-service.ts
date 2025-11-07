import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user-interface";

@Injectable({
  providedIn: 'root' // Torna o serviço um 'singleton' em toda a aplicação
})
export class UserService  {
    // private apiUri = 'http://172.0.17.2/api/users';

    constructor(private http: HttpClient) {}

    // A função faz a requisição e retorna um Observable
    getUsers(): Observable<any[]> {
        return this.http.get<User[]>('http://host.docker.internal:8000/api/users');
    }

    // getUser(): Observable<any[]> {
    //     return this.http.get<User[]>(this.apiUri);
    // }
}