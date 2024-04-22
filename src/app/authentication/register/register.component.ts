import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../../services/student.service';
import { AuthService } from '../../services/auth.service';
import { RegisterDto } from '../../DTOs/register-dto.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  faUser=faUserFriends;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router){

  }

  registrationForm = this.formBuilder.group({
    userName:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  });

  onRegister(){
    console.log(this.registrationForm.value);

    if(this.registrationForm.valid){
      const data:RegisterDto={
        userName:this.registrationForm.value.userName!,
        email:this.registrationForm.value.email!,
        password:this.registrationForm.value.password!,
      }
      this.authService.createUser(data).subscribe((result)=>{

        if (result.success && result.token) {
          // Save token to localStorage

          localStorage.setItem('token',result.token);

          console.log(result.token);

          // Redirect to dashboard or desired route
          this.router.navigate(['admin']);
        } else {
          console.error('Register failed'); // Handle invalid response
          localStorage.removeItem('token');
          this.authService.logout();


        }

      },
      (err:Error)=>{
        console.log(err.message);
        alert(err.message)
      }
    )
    }

    else{
      alert("invalid data, try again please")
    }
  }

}
