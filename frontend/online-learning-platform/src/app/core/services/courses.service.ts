import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiUrl = 'http://localhost:3000/api/users/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
