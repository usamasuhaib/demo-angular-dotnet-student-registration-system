import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../../services/auth.service';


@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule, MatMenuModule, FontAwesomeModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  faLogout=faSignOut;
  faAccount=faUserGear

constructor(private router:Router,private userService:UserService, private authService:AuthService){

}



userProfile: any;
ngOnInit(): void {
  this.loadUserProfile();
}

onAccount(){
  this.router.navigate(['admin/profile'])

}


loadUserProfile(): void {
  this.userService.getUserProfile().subscribe(
    (data) => {
      this.userProfile = data;
    },
    (error) => {
      console.error('Failed to load user profile:', error);
    }
  );
}
  


logout(){

  this.authService.logout();
}

}
