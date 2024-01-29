import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controle-password',
  templateUrl: './controle-password.component.html',
  styleUrls: ['./controle-password.component.css']
})
export class ControlePasswordComponent {
 public RegisterFrom : FormGroup
 public data !: string
 constructor(private api : ApiService,private router :Router,private fb : FormBuilder){
  this.RegisterFrom = fb.group({
    password :['',[Validators.required,Validators.minLength(6)]]
  })
 }

 onSubmit(){
  const formValue = this.RegisterFrom.value
  this.api.verif_password(formValue).subscribe(
    (res:any) =>{
    this.data =res.body.message
    console.log(this.data)
    alert(this.data)
    }
  )
 }

 ngOinit(){

 }
}
