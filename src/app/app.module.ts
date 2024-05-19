import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FourOfFourComponent } from './four-of-four/four-of-four.component';
import { AuthService } from './service/auth.service';
import { ApiService } from './service/api.service';
import { Authguard } from './guard/auth.guard';
import { AuthInterceptor } from './service/auth-interceptor.service';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ListeLogsComponent } from './liste-logs/liste-logs.component';
import { VerifPasswordComponent } from './verif-password/verif-password.component';
import { ControlePasswordComponent } from './controle-password/controle-password.component';
import { NmapScanComponent } from './nmap-scan/nmap-scan.component';
import { PaginationComponent } from './pagination/pagination.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderHttpComponent } from './header-http/header-http.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    AcceuilComponent,
    FourOfFourComponent,
    ListeUsersComponent,
    ListeLogsComponent,
    VerifPasswordComponent,
    ControlePasswordComponent,
    NmapScanComponent,
    PaginationComponent,
    HeaderHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [
    AuthService,
    ApiService,
    Authguard,
    // { provide: LOCALE_ID, useValue: 'fr-FR'},
  //  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  //  { provide: HTTP_INTERCEPTORS, useClass: ErrorCatchingInterceptor, multi: true}],
  ],
  bootstrap:[AppComponent],
})
export class AppModule { }
