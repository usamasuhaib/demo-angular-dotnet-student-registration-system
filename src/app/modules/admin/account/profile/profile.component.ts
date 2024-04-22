import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userProfile: any = {}; // Initialize userProfile as an empty object
  getImageUrl(ImagePath: string): string {
    // Construct the full URL to fetch the image from the backend
    return `http://localhost:5182/Uploads/Images/${ImagePath}`;
  }


  constructor(private userService:UserService, private formBuilder:FormBuilder, private httpClient:HttpClient, private router:Router){

  }

  ngOnInit(){
    this.loadUserProfile();

  }

  loadUserProfile() {
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error) => {
        console.error('Failed to load user profile:', error);
      }
    );
  }


}
