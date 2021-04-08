import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm, FormGroup} from '@angular/forms';
import{EmpinfoModule} from '../../modules/empinfo/empinfo.module';
import{EmployeeinfoService} from '../../services/employeeinfo.service';
import{ProjectinfoService} from '../../services/projectinfo.service';
import{ProjinfoModule} from '../../modules/projinfo/projinfo.module';
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
model:any=[];
EmpID:number;
  /*EmpName:string;
  Dept:string;
  Desg:string;
  Salary:number;
   password:string;
   projid:number;*/
   svc:EmployeeinfoService;
   emp=new EmpinfoModule;
   svc1: ProjectinfoService;
   plist: ProjinfoModule[];
  constructor(svc:EmployeeinfoService,svc1:ProjectinfoService) {
    this.svc=svc;
    this.svc1=svc1;
   }
  ngOnInit(): void {
    this.svc1.GetProjects().subscribe((data:ProjinfoModule[])=>{
      this.plist=data;
    });
  }
  UpdateEmp(empForm: NgForm):void{
    console.log(empForm.value);
     this.emp.EmpID =this.model.eid;
    this.emp.EmpName= this.model.name;
    this.emp.Dept=this.model.dept;
    this.emp.Desg=this.model.desg;
    this.emp.Salary=this.model.salary;
    this.emp.password=this.model.pwd;
    this.emp.projid=this.model.projid;
    this.svc.UpdateEmployee(this.emp.EmpID,this.emp).subscribe((data:boolean)=>{
      console.log(data);
      if(data==true){
        alert("New Employee Updated");
      }
    })
  }
}