import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { teacher } from '../teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getTeacherData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/teachers");
  }

  addTeacher(firstName: string, lastName: string, Address: string, dateOfBirth: string): Observable<any> {
    const teacher: teacher = { firstName: firstName, lastName: lastName, Address: Address, dateOfBirth: dateOfBirth };
    return this.http.post("http://localhost:8081/api/teachers", teacher);
  }

  deleteTeacher(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/teachers/" + id);
  }
  getTeacher(id: String): Observable<any> {
    return this.http.get("http://localhost:8081/api/teachers/" + id);
  }
  updateTeacher(id: string, firstName: string, lastName: string, Address: string, dateOfBirth: string): Observable<any> {
    const teacher: teacher = { firstName: firstName, lastName: lastName, Address: Address, dateOfBirth: dateOfBirth };
    return this.http.put("http://localhost:8081/api/teachers/" + id, teacher);
  }
}