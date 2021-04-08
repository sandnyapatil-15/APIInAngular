import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertemployeeComponent } from './components/insertemployee/insertemployee.component';
import { ShowallemployeesComponent } from './components/showallemployees/showallemployees.component';
import { ShowemployeebyidComponent } from './components/showemployeebyid/showemployeebyid.component';
import{LoginComponent} from './components/login/login.component';
import {SelectProjByIDComponent} from './components/select-proj-by-id/select-proj-by-id.component';
import {UpdateProjectComponent} from './components/update-project/update-project.component';
const routes: Routes = [
  {path:'InsertEmployee',component:InsertemployeeComponent},
  {path:'ShowAllEmployees',component:ShowallemployeesComponent},
  {path:'ShowEmployeeByID',component:ShowemployeebyidComponent},
  {path:'Login', component:LoginComponent},
  {path:'SelectProjByID', component:SelectProjByIDComponent},
  {path:'UpdateProject', component:UpdateProjectComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
