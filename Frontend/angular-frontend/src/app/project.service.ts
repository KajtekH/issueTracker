import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL = "http://localhost:8080/api/v1/projects";
  constructor(private http: HttpClient) { }

  getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseURL}`);
  }
}
