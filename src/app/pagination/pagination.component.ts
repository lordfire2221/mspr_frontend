import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  listItems !: any[]; // Remplacez any par le type de vos données
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor (){

  }

  
}
