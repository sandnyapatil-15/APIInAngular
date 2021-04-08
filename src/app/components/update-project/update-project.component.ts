import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm, FormGroup} from '@angular/forms';
import { ProjinfoModule } from 'src/app/modules/projinfo/projinfo.module';
import{ProjectinfoService} from '../../services/projectinfo.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  model:any=[];
  pid:number;
  projname:string;
  domain:string;
  svc:ProjectinfoService;
  pinfo=new ProjinfoModule();
  constructor(svc:ProjectinfoService) {
    this.svc=svc;
   }

   ngOnInit(): void {
    this.model.pid = localStorage.getItem('PID');
    this.model.projname=localStorage.getItem('PNAME');
    this.model.domain=localStorage.getItem('DOMAIN');
  }
  UpdateData(projForm:NgForm){
    
    this.pinfo.projid=this.model.pid;
    this.pinfo.projname=this.model.projname;
    this.pinfo.domain=this.model.domain;

    this.svc.UpdateProject(this.model.pid,this.pinfo).subscribe((data:boolean)=>{
      if(data==true){
        console.log(""+this.model.pid+" "+this.model.projname+" "+this.model.domain);
        alert("Update Successfull");
      }
      else{
        alert("update Unsuccessfull");
      }
    })
  }
}
