import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faContactCard, faDashboard, faInfo, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

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

  faContact=faContactCard
  faAbout=faInfo

}
