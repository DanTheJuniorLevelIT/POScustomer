import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomerService } from '../../../customer.service';
import { DaterangefilterPipe } from '../../../daterangefilter.pipe';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ReactiveFormsModule, RouterLink,RouterLinkActive, DaterangefilterPipe, FormsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  constructor (private trans: CustomerService){}
  currentDate: string = '';
  grandTotal: number = 0;
  customer:any;
  total:any;
  tb:any;
  custDetails: any = null;
  // startDate: Date = new Date();
  // endDate: Date = new Date();
  startDate: any;
  endDate: any;

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

  print(){
    const printContent = document.getElementById('print-content');
    if(printContent){
      const printContents = printContent.innerHTML;
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContent;
    }else{
      console.error("ELEMENT ERROR")
    }
  }

}
