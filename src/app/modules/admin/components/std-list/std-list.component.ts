import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../../../../services/student.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../../../models/student.model';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-std-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './std-list.component.html',
  styleUrl: './std-list.component.css'
})
export class StdListComponent {

  stdList:Student[]=[];


constructor(private stdService:StudentService, private httpClient:HttpClient, private router:Router){

}

ngOnInit(){
  this.stdService.getStudents().subscribe((result)=>{
    console.log(result);
    this.stdList=result;

  },
  (err:Error)=>{
    console.log(err.message);
  }
)
}


  onEdit(id:any){
    this.router.navigate(['admin/edit-std/'+id]);

  }

  onDelete(id:any){

  }
}
