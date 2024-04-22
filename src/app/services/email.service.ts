import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDto } from '../DTOs/email-dto.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  baseUrl='http://localhost:5182';

  constructor(private httpClient:HttpClient) { }



  sendEmail(emailDto:EmailDto):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+'/api/email/send',emailDto)
  }

}
