import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HeaderComponent,
    FooterComponent,
    AdminHomeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
