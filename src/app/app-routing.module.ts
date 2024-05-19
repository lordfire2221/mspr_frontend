import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FourOfFourComponent } from './four-of-four/four-of-four.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ListeLogsComponent } from './liste-logs/liste-logs.component';
import { ControlePasswordComponent } from './controle-password/controle-password.component';
import { VerifPasswordComponent } from './verif-password/verif-password.component';
import { NmapScanComponent } from './nmap-scan/nmap-scan.component';
import { HeaderHttpComponent } from './header-http/header-http.component';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'acceuil',component:AcceuilComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'ListeUsers',component:ListeUsersComponent},
  {path:'404',component:FourOfFourComponent},
  {path:'logs',component:ListeLogsComponent},
  {path:'controlle-password',component:ControlePasswordComponent},
  {path:'verif_port',component:VerifPasswordComponent},
  {path:'nmap_scan',component:NmapScanComponent},
  {path:'headers_http',component:HeaderHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
