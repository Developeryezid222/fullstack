import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { SearchService } from '../service/search.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent {
  searchId: number = 0; 
customers: any;

  constructor(
    private searchService: SearchService,
    
  ) {}

  getIdCustomer() {
   if (this.searchId) {
      this.searchService.sendSearchId(this.searchId);
    }
  }
}

