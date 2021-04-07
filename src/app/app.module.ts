import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { InsertemployeeComponent } from './components/insertemployee/insertemployee.component';
import { ShowallemployeesComponent } from './components/showallemployees/showallemployees.component';
import { ShowemployeebyidComponent } from './components/showemployeebyid/showemployeebyid.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertemployeeComponent,
    ShowallemployeesComponent,
    ShowemployeebyidComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
