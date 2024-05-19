import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-http',
  templateUrl: './header-http.component.html',
  styleUrls: ['./header-http.component.css']
})
export class HeaderHttpComponent {
 public registerForm !: FormGroup
 public data : any 
 
 constructor(private api : ApiService , private router:Router, private fb : FormBuilder){
   this.registerForm = fb.group({
      url : ['',[Validators.required, Validators.minLength(6)]]
    })
    
   }
 
onSubmit(){
   const formValue = this.registerForm.value
    this.api.get_headers_http_scan(formValue.url).subscribe((res)=>{
      this.data = res
      console.log(this.data)      
    })
}

 ngOnInit(){
 
}

}
