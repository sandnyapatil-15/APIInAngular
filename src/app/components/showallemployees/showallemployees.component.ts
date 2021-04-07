import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmpinfoModule} from '../../modules/empinfo/empinfo.module';
import {EmployeeinfoService} from '../../services/employeeinfo.service';
@Component({
  selector: 'app-showallemployees',
  templateUrl: './showallemployees.component.html',
  styleUrls: ['./showallemployees.component.css']
})
export class ShowallemployeesComponent implements OnInit {
svc : EmployeeinfoService;
emplist:EmpinfoModule[];
  constructor(svc: EmployeeinfoService) {
    this.svc = svc;
   }

  ngOnInit(): void {
    this.svc.GetEmployees().subscribe((data: EmpinfoModule[]) =>{
      this.emplist = data;
      console.log(this.emplist);
    })
  }

}
