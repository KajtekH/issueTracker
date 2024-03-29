import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users";
  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  createUser(user: User): Observable<Object>{
    return this.http.post(`${this.baseURL}`, user);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, user:User): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
