import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent {
public dataSource : any[] =[]
public cpu !: number
public memoire !: number
public memory !: number

constructor(private api :ApiService,
            private router :Router){}

ngOnInit(){
   this.api.getAll_Users().subscribe(
    (res:any) =>{
        this.dataSource=res.users
        console.log(res.users)
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
}
