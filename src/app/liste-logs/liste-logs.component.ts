import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-liste-logs',
  templateUrl: './liste-logs.component.html',
  styleUrls: ['./liste-logs.component.css']
})
export class ListeLogsComponent {
  public dataSource : any [] = [];
  public cpu !: number
  public memoire !: number
  public memory !: number

  //
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  public p: number = 1; // Declare the 'p' property

  // Utilisez MatTableDataSource pour activer la pagination avec MatPaginator
 // public dataSource = new MatTableDataSource([]);

  // Récupérez une référence au MatPaginator
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private api:ApiService,
              private router:Router) {}


ngOnInit(){
  this.api.getLogs().subscribe(
    (res:any) =>{
      this.dataSource=res.logs
      console.log(res.logs)
    }
  )

  this.api.getRessources().subscribe(
    (res:any) =>{
      console.log(res)
      this.cpu =res.cpu_percent
      this.memoire = res.disk_percent
      this.memory = res.memory_percent

    }
   )
}

// ngAfterViewInit() {
//   // Attachez le paginatore à votre source de données après l'initialisation de la vue
//   this.dataSource.paginator = this.paginator;
// }

// Fonction pour mettre à jour la source de données en fonction de la pagination
// updateDataSource() {
//   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//   const endIndex = startIndex + this.itemsPerPage;
//   this.dataSource.data = this.processes.slice(startIndex, endIndex);

//   if (this.paginator) {
//     this.paginator.length = 100;
//   }
//}
}
