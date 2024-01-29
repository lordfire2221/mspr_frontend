import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public id : any
  constructor(private auth:AuthService,private router :Router){}

 ngOnInit(){
   this.id = this.auth.getData('users_id')
   console.log(this.id)
 }
  logout(){
   this.auth.logout()
   this.router.navigate([`login`])
  }
}
