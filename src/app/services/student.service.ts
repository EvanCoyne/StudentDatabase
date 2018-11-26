import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from '../student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/students");
  }

addPost(firstName: string, lastName: string, Address:string, dateOfBirth:string): Observable<any> {
  const student: student = {firstName:firstName, lastName: lastName, Address:Address, dateOfBirth:dateOfBirth};
  return this.http.post("http://localhost:8081/api/students", student);
}

deletePost(id: String): Observable<any> {
  return this.http.delete("http://localhost:8081/api/students/"+id);
}
getPost(id:String):Observable<any>{
  return this.http.get("http://localhost:8081/api/students/"+id);
}
updatePost(id:string, firstName: string, lastName: string, Address:string, dateOfBirth:string): Observable<any>{
  const student: student = { firstName: firstName, lastName: lastName, Address: Address, dateOfBirth: dateOfBirth};
  return this.http.put("http://localhost:8081/api/students/"+id, student);
}
}

