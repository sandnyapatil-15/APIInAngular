import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import{ProjinfoModule} from '../../modules/projinfo/projinfo.module';
import{ProjectinfoService} from '../../services/projectinfo.service';
@Component({
  selector: 'app-select-proj-by-id',
  templateUrl: './select-proj-by-id.component.html',
  styleUrls: ['./select-proj-by-id.component.css']
})
export class SelectProjByIDComponent implements OnInit {
svc: ProjectinfoService;
model:any=[];
pro= new ProjinfoModule
  constructor(svc:ProjectinfoService) {
    this.svc=svc;
   }
   projid:number;
   projname: string;
   domain: string;
  ngOnInit(): void {
  }
  RegisterData(empForm: NgForm):void
  {
    console.log(empForm.value);
    this.pro.projid=empForm.value.pid;
    
    this.svc.GetProjById(this.pro.projid).subscribe((data:ProjinfoModule)=>
    {
    this.projid = data.projid;
    this.projname= data.projname;
    this.domain=data.domain;
    console.log(data.projid + "," + data.projname + "," + data.domain  );
    alert(data.projid + "," + data.projname + "," + data.domain );
  });
}
    
}
