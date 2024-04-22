import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl='http://localhost:5182';

  constructor(private httpClient:HttpClient, private router:Router) { }



  addStudent(student:Student):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"/api/student/create",student)
  }

  getStudents():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"/api/student")
  }
  getStdCount():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"/api/student/count");
  }

  getStudentById(id:number):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"/api/student/"+id)
  }

  updateStudent(id:any, student:Student):Observable<any>{
    return this.httpClient.put<any>(this.baseUrl+"/api/student/"+id, student)
  }

  deleteStudent(id:any):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl+"/api/student/"+id)
  }



}
