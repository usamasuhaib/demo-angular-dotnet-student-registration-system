import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private userService:UserService, private formBuilder:FormBuilder,
    private toaster:ToastrService,
    private httpClient:HttpClient, private router:Router){

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



  onFileSelected(event: any) {
    const file: File = event.target.files[0];
  
    if (file) {
      const userId = this.userProfile?.userId; // Use optional chaining to handle potential undefined userProfile
  
      if (!userId) {
        console.error('User ID not available.');
        return; // Abort upload if user ID is not available
      }
  
      this.userService.uploadProfileImage(file, userId).subscribe(
        () => {
          
          this.toaster.success("Profile image uploaded successfully'")
          this.loadUserProfile(); // Refresh user profile data after successful upload
          console.log('Profile image uploaded successfully');
        },
        (error) => {
          console.error('Error uploading profile image:', error);
          // Optionally show an error message to the user or handle the error appropriately
        }
      );
    }
  }






}
