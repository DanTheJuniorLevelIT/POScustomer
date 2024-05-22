import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ReactiveFormsModule, RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  log: any;
  loginForm = new FormGroup({
    use : new FormControl(null),
    pas : new FormControl(null)
  })

  ngOnInit(): void {
    
  }

  constructor(
    private conn: CustomerService, private route:Router
  ){ }

  loginFunct(){
    // console.log(this.loginForm.value);
    this.conn.login(this.loginForm.value).subscribe((result:any)=>{
      this.log = result;
      console.log(this.log);
      if(this.log != 0){
        console.log(this.log);
        localStorage.setItem('name', result.Firstname);
        localStorage.setItem('custdet', JSON.stringify(this.log));
        localStorage.setItem('custid', JSON.stringify(this.log.CustID));
        this.route.navigate(['custo']);
      }
    })
  }
}
