import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Issue } from './issue';
import { error } from 'console';
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private baseURL = "http://localhost:8080/api/v1/issues";
  constructor(private http: HttpClient) { }

  getIssueList(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.baseURL}`).pipe(
      catchError(error => {
        console.error('error fetching issues', error);
        return throwError(error);
      })
    )
  }

  getIssueListByProject(projectId: Number): Observable<Issue[]>{
    return this.http.get<Issue[]>(`http://localhost:8080/api/v1/projects/${projectId}/issues`);
  }

  getIssueById(id: Number):Observable<Issue>{
    return this.http.get<Issue>(`${this.baseURL}/${id}`);
  }

  createIssue(issue: Issue):Observable<Object>{
    return this.http.post(`${this.baseURL}`,issue);
  }

  updateIssue(id: Number, issue: Issue):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,issue);
  }
  
  deleteIssue(id:Number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
