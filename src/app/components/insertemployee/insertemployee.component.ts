import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmpinfoModule} from 'src/app/modules/empinfo/empinfo.module';
import{EmployeeinfoService} from '../../services/employeeinfo.service';
import{ProjinfoModule} from '../../modules/projinfo/projinfo.module';
import{ProjectinfoService} from '../../services/projectinfo.service';
@Component({
  selector: 'app-insertemployee',
  templateUrl: './insertemployee.component.html',
  styleUrls: ['./insertemployee.component.css']
})
export class InsertemployeeComponent implements OnInit {
  model:any = [];
  svc:EmployeeinfoService;
  svc1: ProjectinfoService;
  emp=new EmpinfoModule();
  plist: ProjinfoModule[];
  constructor(svc:EmployeeinfoService,svc1:ProjectinfoService) { 
    this.svc=svc;
    this.svc1 = svc1;
  }

  ngOnInit(): void {
    this.svc1.GetProjects().subscribe((data:ProjinfoModule[])=>{
      this.plist=data;
      });
  }
  InsertData(empForm:NgForm):void{
    console.log(empForm.value);
    this.emp.EmpID = empForm.value.eid;
    this.emp.EmpName = empForm.value.name;
    this.emp.Dept = empForm.value.dept;
    this.emp.Desg = empForm.value.desg;
    this.emp.Salary=empForm.value.salary;
    this.emp.projid=empForm.value.projid;
    this.emp.password=empForm.value.pwd;
    this.svc.InsertEmployee(this.emp).subscribe((data:boolean)=>{
      alert(data);
      if(data==true){
        alert("New Employee Registered");
      }
    })
  }
}