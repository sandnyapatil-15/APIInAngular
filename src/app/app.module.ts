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
import { SelectProjByIDComponent } from './components/select-proj-by-id/select-proj-by-id.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertemployeeComponent,
    ShowallemployeesComponent,
    ShowemployeebyidComponent,
    LoginComponent,
    SelectProjByIDComponent,
    UpdateProjectComponent,
    UpdateemployeeComponent
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
