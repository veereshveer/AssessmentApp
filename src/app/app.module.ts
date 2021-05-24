import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import AdminService from './admin-login/admin.service';
import { AuthInterCeptor } from './interceptor/auth.interceptor';
import { AuthenticationGuardGuard } from './guard/authentication-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HeaderComponent,
    FooterComponent,
    AdminHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [AdminService, AuthenticationGuardGuard,
              { provide: HTTP_INTERCEPTORS, useClass: AuthInterCeptor, multi: true }
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
