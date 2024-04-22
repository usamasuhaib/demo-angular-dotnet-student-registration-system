import { Component } from '@angular/core';
import { StudentService } from '../../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../../../../models/student.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-std-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ToastrModule],
  templateUrl: './std-form.component.html',
  styleUrl: './std-form.component.css'
})
export class StdFormComponent {
  constructor(private formBuilder: FormBuilder, private stdService: StudentService,
    private router: Router, private httpClient: HttpClient, private toasterService: ToastrService,
    private activeRoute: ActivatedRoute,) {

  }

  stdForm = this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['']
  })

  stdId?: number;
  isEdit = false;

  ngOnInit() {
    this.stdId = this.activeRoute.snapshot.params['id'];

    if (this.stdId) {
      this.isEdit = true;

      this.stdService.getStudentById(this.stdId).subscribe(result => {
        console.log(result);
        this.stdForm.patchValue(result);
      })
    }

  }

  onSave() {
    console.log(this.stdForm.value);
    const student: Student = {
      name: this.stdForm.value.name!,
      email: this.stdForm.value.email!,
      phone: this.stdForm.value.phone!,
    }
    if (this.isEdit) {
      student.id = this.stdForm.value.id!;
    }

    if (this.isEdit) {
      this.stdService.updateStudent(this.stdId, student).subscribe((result) => {
        console.log(result);
        this.router.navigate(['admin/std-list']);
        this.toasterService.success("Record Updated Successfully");
      },
        (err: Error) => {
          console.log(err.message);
        }
      )
    }
    else{

      this.stdService.addStudent(student).subscribe((result)=>{
        console.log(result);
        this.router.navigate(['admin/std-list']);
        this.toasterService.success("Record Added Successfully");
      },
      (err:Error)=>{
        console.log(err.message);
      }
    )




    }

  }
}