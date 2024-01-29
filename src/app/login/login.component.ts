import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup;

  constructor(private fb:FormBuilder,
              private userService:AuthService,
              private api :ApiService,
              private router:Router,
              ) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(4)]]
    })
  }

  onSubmit(){
   const formValue = this.loginForm.value
        this.userService.login(formValue.email , formValue.password).subscribe(
          (res:any) =>{
            if (res != undefined){
              this.userService.setAccessToken(res.token)
              this.userService.setDataInLocalStorage('users_id',res.id_utilisateur)
              
              this.router.navigate(['acceuil'])
            }else {
              alert('vos identifiant ne sont pas juste')
            }
          }
        )
  }


  ngOnInit(): void {

  }


}
