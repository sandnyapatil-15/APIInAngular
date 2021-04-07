import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmpinfoModule} from '../../modules/empinfo/empinfo.module';
import {EmployeeinfoService} from '../../services/employeeinfo.service';

@Component({
  selector: 'app-showemployeebyid',
  templateUrl: './showemployeebyid.component.html',
  styleUrls: ['./showemployeebyid.component.css']
})
export class ShowemployeebyidComponent implements OnInit {
  svc: EmployeeinfoService;
  model:any = [];
  emp=new EmpinfoModule;
  constructor(svc: EmployeeinfoService) {
    this.svc = svc;
    
  }
  EmpID:number;
  EmpName:string;
  Dept:string;
  Desg:string;
  Salary:number;
   password:string;
   projid:number;
  ngOnInit(): void {
  }
  RegisterData(empForm: NgForm):void
  {
    console.log(empForm.value);
    this.emp.EmpID=empForm.value.eid;
    
    this.svc.GetEmployeeByID(this.emp.EmpID).subscribe((data:EmpinfoModule)=>
    {
    this.EmpID = data.EmpID;
    this.EmpName= data.EmpName;
    this.Dept=data.Dept;
    this.Desg=data.Desg;
    this.Salary=data.Salary;
    this.password=data.password;
    this.projid=data.projid;
   
    

      console.log(data.EmpID + "," + data.EmpName + "," + data.Dept + "," + data.Desg + "," + data.Salary + "," + data.password+ "," + data.projid );
      alert(data.EmpID + "," + data.EmpName + "," + data.Dept + "," + data.Desg + "," + data.Salary  + "," + data.password+ "," + data.projid );
    });
  }

}
  
