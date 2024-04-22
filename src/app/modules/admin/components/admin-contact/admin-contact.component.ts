import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-contact',
  standalone: true,
  imports: [],
  templateUrl: './admin-contact.component.html',
  styleUrl: './admin-contact.component.css'
})
export class AdminContactComponent {

  constructor(private title:Title){
    this.title.setTitle("Contact-Us | School Management")

  }

}
