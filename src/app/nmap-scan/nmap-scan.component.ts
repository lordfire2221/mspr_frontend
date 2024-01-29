import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nmap-scan',
  templateUrl: './nmap-scan.component.html',
  styleUrls: ['./nmap-scan.component.css']
})
export class NmapScanComponent {

public dataSource :any
public registerform !: FormGroup
public reponse :any[]=[]
constructor(private api :ApiService,private router:Router,private fb :FormBuilder,private auth :AuthService){
  this.registerform = fb.group({
    ip:['',[Validators.required,Validators.minLength(2)]],
    port:['',[Validators.required,Validators.minLength(2)]]
  })
}

onSubmit(){
  const formValue = this.registerform.value
  this.api.scan_nmap(formValue).subscribe(
    (res:any)=>{
     this.auth.setDataInLocalStorage('nmap_scan',res)
     console.log(res.body)
     this.dataSource =res.body
    }
  )
}

ngOnInit(){
 //this.dataSource =this.auth.getData('nmap_scan')
 //console.log(this.dataSource)

}
}
