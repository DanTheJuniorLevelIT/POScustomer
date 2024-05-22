import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomerService } from '../../../customer.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ReactiveFormsModule, RouterLink,RouterLinkActive],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  constructor (private trans: CustomerService){}
  currentDate: string = '';
  grandTotal: number = 0;
  customer:any;
  total:any;
  tb:any;
  custDetails: any = null;

  ngOnInit(): void {
    this.custDetails = JSON.parse(localStorage.getItem('custdet') || '{}')
    this.trans.getcusttrans(this.custDetails.CustID).subscribe((result:any)=>{
      this.customer = result;
      this.customer = result.data; // Assuming 'data' contains the customer array
      this.total = result.SumPrice;
      this.tb = result.Balances;
      console.log(this.tb);
    })
    this.getCurrentDateTime();
  }

  
  

  getCurrentDateTime(): void {
    const currentDate = new Date();
    this.currentDate = currentDate.toLocaleString();  // Convert date to string
  }
}
