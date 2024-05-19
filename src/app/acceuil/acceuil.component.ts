import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Processus } from '../models/processus';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  public processes: Processus[] = [];
  public cpu!: number;
  public memoire!: number;
  public memory!: number;

  // Propriétés pour la pagination
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  public p: number = 1; // Declare the 'p' property

  // Utilisez MatTableDataSource pour activer la pagination avec MatPaginator
  public dataSource = new MatTableDataSource<Processus>([]);

  // Récupérez une référence au MatPaginator
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProccessus().subscribe(
      (res: any) => {
        if (res !== undefined) {
          this.processes = res.processes;
          this.updateDataSource();
        }
      }
    );

    this.api.getRessources().subscribe(
      (res: any) => {
        this.cpu = res.cpu_percent;
        this.memoire = res.disk_percent;
        this.memory = res.memory_percent;
      }
    );
  }

  ngAfterViewInit() {
    // Attachez le paginatore à votre source de données après l'initialisation de la vue
    this.dataSource.paginator = this.paginator;
  }

  // Fonction pour mettre à jour la source de données en fonction de la pagination
  updateDataSource() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.dataSource.data = this.processes.slice(startIndex, endIndex);

    if (this.paginator) {
      this.paginator.length = 100;
    }
  }
}
