import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmpinfoModule} from 'src/app/modules/empinfo/empinfo.module'
import{EmployeeinfoService} from '../../services/employeeinfo.service';
@Component({
  selector: 'app-insertemployee',
  templateUrl: './insertemployee.component.html',
  styleUrls: ['./insertemployee.component.css']
})
export class InsertemployeeComponent implements OnInit {
  model:any = [];
  svc:EmployeeinfoService;
  emp=new EmpinfoModule();
  constructor(svc:EmployeeinfoService) { 
    this.svc=svc;
  }

  ngOnInit(): void {
  }
  InsertData(empForm:NgForm):void{
    console.log(empForm.value);
    this.emp.EmpID = empForm.value.eid;
    this.emp.EmpName = empForm.value.name;
    this.emp.Dept = empForm.value.dept;
    this.emp.Desg = empForm.value.desg;
    this.emp.Salary=empForm.value.salary;
    this.emp.projid=empForm.value.pid;
    this.emp.password=empForm.value.pwd;
    this.svc.InsertEmployee(this.emp).subscribe((data:boolean)=>{
      alert(data);
      if(data==true){
        alert("New Employee Registered");
      }
    })
  }
}
