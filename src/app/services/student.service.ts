import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl='http://localhost:5182';

  constructor(private httpClient:HttpClient, private router:Router) { }



  getStudents():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"/api/student")
  }
  getStdCount():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"/api/student/count");
  }

}
