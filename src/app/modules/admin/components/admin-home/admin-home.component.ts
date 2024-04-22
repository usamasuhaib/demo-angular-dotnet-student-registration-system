import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../../../../services/student.service';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  stdCount=0;

  constructor(private stdService:StudentService){

  }

  ngOnInit(){
    this.stdService.getStdCount().subscribe(result=>{
      this.stdCount=result;
    })
  }




  faUser=faUserGraduate

}
