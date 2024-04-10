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
}
