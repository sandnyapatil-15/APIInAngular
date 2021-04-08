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
model:any=[];
emp=new EmpinfoModule;
  constructor(svc: EmployeeinfoService) { 
this.svc=svc;
  }



  ngOnInit(): void {
  }
 Login(loginForm:NgForm):void{
    this.emp.EmpName = loginForm.value.name;
    this.emp.password = loginForm.value.pwd;
    this.svc.Login(this.emp.EmpName,this.emp.password).subscribe((data:string)=>{
      alert(data);
    })
  }
}