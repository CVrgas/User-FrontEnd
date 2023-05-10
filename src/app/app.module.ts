import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './Components/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewUserComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
