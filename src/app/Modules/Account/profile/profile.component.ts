import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CustomerService } from '../../../customer.service';
import { HttpClient } from '@angular/common/http';

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
selectedFile: any;
filename: any;

uploadedImage: string | ArrayBuffer | null = null;

AccountForm = new FormGroup({});

// onFileSelected(event: Event): void {
//   const input = event.target as HTMLInputElement;

//   if (input.files && input.files[0]) {
//     const file = input.files[0];
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       this.uploadedImage = reader.result;
//       // Here you would typically send the file to the server
//       // this.uploadImageToServer(file);
//     };
//     reader.readAsDataURL(file);
//   }
// }

  constructor(
    private users: CustomerService,
    private http: HttpClient,
    private route: Router
  ){}
  

  ngOnInit(): void {

    // const userID = 1;
    this.userID = JSON.parse(localStorage.getItem('custid') || '{}')

    this.users.getuser(this.userID).subscribe((result: any)=>{
      this.user = result;
      console.log(this.user);
    })
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.filename = this.selectedFile.name;
  }

  onPost(){
    const fd = new FormData();
    if(this.filename != null){
      console.log(this.selectedFile);
      fd.append('files',this.selectedFile);
      fd.append('uid',this.userID);
      // console.log(fd);
      // console.log(this.bid);
      fd.forEach((value,key)=>{
        console.log(key + " " + JSON.stringify(value))
      });

      this.http.post('http://localhost/customer/saveaccountpic.php', fd, {observe: 'events', reportProgress: true}).subscribe((event: any)=>{
        console.log(event);
        if(event){
          this.users.getuser(this.userID).subscribe((result: any)=>{
            this.user = result;
            console.log(this.user);
          })
        }
      })
    }
  }

}