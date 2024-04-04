import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
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

  createProject(project: Project):Observable<Object>{
    return this.http.post(`${this.baseURL}`,project);
  }

  getProjectById(id: Number):Observable<Project>{
    return this.http.get<Project>(`${this.baseURL}/${id}`);
  }

  updateProject(id: Number, project: Project):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,project);
  }

  deleteProject(id:Number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
