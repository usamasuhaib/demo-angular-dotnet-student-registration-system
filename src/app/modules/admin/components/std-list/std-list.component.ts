import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../../../../services/student.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../../../models/student.model';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-std-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './std-list.component.html',
  styleUrl: './std-list.component.css'
})
export class StdListComponent {

  stdList: Student[] = [];


  constructor(private stdService: StudentService, private httpClient: HttpClient,
    private router: Router, private toaster: ToastrService) {

  }

  ngOnInit() {
    this.loadStudents()
  }


  onEdit(id: any) {
    this.router.navigate(['admin/edit-std/' + id]);

  }

  onDelete(id: any) {

    this.stdService.deleteStudent(id).subscribe((result) => {

      this.toaster.success("Record deleted successfully");
      this.loadStudents();



    },
      (err: Error) => {
        console.log(err.message)
        this.toaster.error("Failed to delete record")

      }
    )

  }


  private loadStudents(){

    this.stdService.getStudents().subscribe((result) => {
      console.log(result);
      this.stdList = result;

    },
      (err: Error) => {
        console.log(err.message);
      }
    )

  }

}
