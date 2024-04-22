import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../../../../services/student.service';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  stdCount=0;
  faUser=faUserGraduate


  constructor(
    private stdService:StudentService,
    private router:Router,
    private title:Title,


  ){ 
    this.title.setTitle("Home | School Management")
    }

  ngOnInit(){
    this.stdService.getStdCount().subscribe(result=>{
      this.stdCount=result;
    })
  }


  onStdList(){
this.router.navigate(['/admin/std-list'])
  }


}
