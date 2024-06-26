import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faContactCard, faDashboard, faInfo, faMailForward, faMessage, faPhone, faPhoneFlip, faSignOut, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-admin-sidenav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-sidenav.component.html',
  styleUrl: './admin-sidenav.component.css'
})
export class AdminSidenavComponent {

  faAdd=faAdd
  faStd=faUserGraduate
  faDashboard=faDashboard

  faContact=faPhone

  faAbout=faInfo

  faLogout=faSignOut;

  constructor(private authService:AuthService){

  }

  ngOnInit(){

  }



}
