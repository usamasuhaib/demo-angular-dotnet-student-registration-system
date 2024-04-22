import { Component } from '@angular/core';
import { EmailService } from '../../../../services/email.service';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailDto } from '../../../../DTOs/email-dto.model';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  constructor(
    private emailService:EmailService,
    private router:Router,
    private toaster:ToastrService,
    private formBuilder:FormBuilder,
    private title:Title,
  ){

  }

  emailForm=this.formBuilder.group({

    from: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    body: ['',[Validators.required]]

  });

  ngOnInit(){
    this.title.setTitle("Contact Us | School Management System")

  }

  sendEmail(){

    console.log(this.emailForm.value);

    if(this.emailForm.valid){

      const emailDto:EmailDto={
        from:this.emailForm.value.from!,
        subject:this.emailForm.value.subject!,
        body:this.emailForm.value.body!,
      }

      this.emailService.sendEmail(emailDto).subscribe((result)=>{

        console.log("email send successffully")
        this.toaster.success("Query Send Successfylly")
        this.router.navigate(['/admin/home'])

      },
      (err:Error)=>{
        console.log(err.message);
      }
    )

    }
    
  }
}
