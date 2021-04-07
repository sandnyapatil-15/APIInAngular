import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmpinfoModule} from '../../modules/empinfo/empinfo.module';
import {EmployeeinfoService} from '../../services/employeeinfo.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
svc : EmployeeinfoService;
name:string;
pwd:string;
model:any=[];
emp=new EmpinfoModule;
  constructor(svc: EmployeeinfoService) { 
this.svc=svc;
  }



  ngOnInit(): void {
  }
Login(empForm:NgForm):void {

  console.log(empForm.value);
this.name=empForm.value.name;
this.pwd=empForm.value.pwd;

this.svc.Login(this.name,this.pwd).subscribe((data:String)=>{
console.log(data);
if (data="Login Successful")
{
  alert('Login Successful')
}
else
{
  alert('Invalid Creds')
}
});

}
}
