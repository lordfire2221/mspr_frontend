import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verif-password',
  templateUrl: './verif-password.component.html',
  styleUrls: ['./verif-password.component.css']
})
export class VerifPasswordComponent {
public registerForm !: FormGroup
public data : any[] = []
public information : any [] = []
public ip : any
public netmask : any

public cpu!: number;
  public memoire!: number;
  public memory!: number;
  
constructor(private api:ApiService,private router :Router,private fb :FormBuilder){
  this.registerForm =fb.group({
    interface:['',[Validators.required,Validators.minLength(4)]]
  })
}

onSubmit(){
  const formvalue = this.registerForm.value
  this.api.get_informations_network(formvalue.interface).subscribe(
    (res:any) =>{
      this.data =res.informations
      this.ip =res.informations.ip_add
      this.netmask = res.informations.network_host
      alert('l\'ip :'+this.ip +' ' +' le netmask :'+ this.netmask)
    }
  )
}
ngOnInit(){
  this.api.getNetwork().subscribe(
    (res:any) =>{
      this.data = res
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
}
