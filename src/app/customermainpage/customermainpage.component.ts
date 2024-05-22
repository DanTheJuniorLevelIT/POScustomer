import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-customermainpage',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ReactiveFormsModule, RouterLink,RouterLinkActive],
  templateUrl: './customermainpage.component.html',
  styleUrl: './customermainpage.component.css'
})
export class CustomermainpageComponent implements OnInit{
  name: any;
  ngOnInit(): void {
    this.name = localStorage.getItem('name');
  }

}
