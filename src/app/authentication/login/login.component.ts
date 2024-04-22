import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginDto } from '../../DTOs/login-dto.model';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
isLoggedIn=sessionStorage.getItem('isLoggedIn');

  falock = faLock;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private toaster:ToastrService) {

  }
  ngOnInit(){
    if(this.isLoggedIn==='true'){
      this.router.navigate(['admin'])
    }

  }


  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  });


  onLogin() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const data: LoginDto = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!,
      }

      this.authService.login(data).subscribe((result) => {
        if (result.success && result.token) {
          // Save token to localStorage

          localStorage.setItem('token',result.token);

          console.log(result.token);

          // Redirect to dashboard or desired route

          this.toaster.success("Welcome back")
          this.router.navigate(['admin']);
        } else {
          console.error('Login failed'); // Handle invalid response
          localStorage.removeItem('token');
          this.toaster.error("Login Failed")

          this.authService.logout();


        }

      },
        (err: Error) => {
          alert(err.message);
        }
      );

    }

  }

}
