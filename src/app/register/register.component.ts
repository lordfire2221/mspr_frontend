import { Component } from '@angular/core';
import { Router,  } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
public RegisterForm :FormGroup;
public ProfilForm : FormGroup
public users_id !: string

  constructor(private router:Router,
              private userService:AuthService,
              private api:ApiService,
              private fb:FormBuilder){
                this.RegisterForm = fb.group({
                  email:['',[Validators.required,Validators.email]],
                  password:['',[Validators.required,Validators.minLength(6)]],
                }),
                this.ProfilForm = fb.group({
                  nom:['',[Validators.required,Validators.minLength(4)]],
                  prenom:['',[Validators.required,Validators.minLength(4)]],
                  valide:['',[Validators.required]],
                  level:['',[Validators.required]],
                  users_id:[''],
                })

  }

  onSubmit(){
   const formValue = this.RegisterForm.value
   const formValue2 = this.ProfilForm.value
   this.userService.signup(formValue.email,formValue.password).subscribe(
    (res:any) =>{
     if(res != undefined){
      const uid = res.users_id
       formValue2.users_id = uid
       this.api.createProfil(formValue2).subscribe(
        (res:any) =>{
          if(res != undefined){
            if(res.status == 200){
              this.router.navigate(['ListeUsers'])
            }
          }else {
            alert('Erreur dans l\'enregistrement')
          }
        }
       )
     }
    }
   )
  }


  ngOnInit(){

  }
}
