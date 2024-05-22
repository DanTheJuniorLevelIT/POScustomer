import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomerService } from '../../../customer.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ReactiveFormsModule, RouterLink,RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
user:any;
customer:any;
userID: any;


  constructor(
    private users: CustomerService
  ){}
  

  ngOnInit(): void {

    // const userID = 1;
    this.userID = JSON.parse(localStorage.getItem('custid') || '{}')

    this.users.getuser(this.userID).subscribe((result: any)=>{
      this.user = result;
      console.log(this.user);
    })
  }

}
