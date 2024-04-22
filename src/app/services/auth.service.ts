import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtAuth } from '../authentication/jwt-auth.model';
import { RegisterDto } from '../DTOs/register-dto.model';
import { LoginDto } from '../DTOs/login-dto.model';
import { LocalizedString } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl='http://localhost:5182';


  constructor(private httpClient:HttpClient, private router:Router, private toaster:ToastrService) { }

  setToken(token:string){
    localStorage.setItem('token',token);
    }

  setLoginStatus(status:string){
    sessionStorage.setItem('isLoggedIn',status);
  }
  
    getToken(){
      localStorage.getItem('token')
    }
  
    isLoggedIn(){
      return this.getToken()!=null
    }
  
    logout(){
      localStorage.removeItem('token');

      this.toaster.success("Logged Out successfully")
      this.router.navigate(['login']);
    }

  login(loginDto:LoginDto):Observable<JwtAuth>{
    return this.httpClient.post<JwtAuth>(this.baseUrl+"/api/Authentication/Login",loginDto)
  }

  registerUser(registerDto:RegisterDto):Observable<JwtAuth>{
    return this.httpClient.post<JwtAuth>(this.baseUrl+"/api/Authentication/Login",registerDto)
  }



  


  createUser(registerDto:RegisterDto):Observable<JwtAuth>{
    return this.httpClient.post<JwtAuth>(this.baseUrl+"/api/Authentication/Register",registerDto);
  }




}
