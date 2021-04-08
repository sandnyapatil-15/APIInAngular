import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Router} from '@angular/router';
import{ProjinfoModule} from '../../modules/projinfo/projinfo.module';
import{ProjectinfoService} from '../../services/projectinfo.service';
@Component({
  selector: 'app-select-proj-by-id',
  templateUrl: './select-proj-by-id.component.html',
  styleUrls: ['./select-proj-by-id.component.css']
})
export class SelectProjByIDComponent implements OnInit {
  svc: ProjectinfoService;
  prj=new ProjinfoModule();
  ngzone : NgZone;
  //ngzone will inject any service which is external or internal to Angular
  //router class is used to redirect from one angular component to another
  router : Router;
  model:any = [];
  constructor(svc:ProjectinfoService, ngzone : NgZone, router : Router) {//injecting ngzone and router 
    this.svc=svc;
    this.ngzone = ngzone;
    this.router = router;
  }

  projid: number;
  projname: string;
  domain: string;
  ngOnInit(): void {
  }
  RegisterData(empForm: NgForm):void
  {
    console.log(empForm.value);
    this.prj.projid=empForm.value.pid;
    this.svc.GetProjById(this.prj.projid).subscribe((data:ProjinfoModule) => 
    {
      this.projid= data.projid;
      this.projname=data.projname;
      this.domain=data.domain;

      console.log(data.projid + "," + data.projname + "," + data.domain );
      //to store in local storage
      //to carry data cross multiple angular components
      localStorage.setItem('PID',this.prj.projid.toString());
      localStorage.setItem('PNAME',this.projname);
      localStorage.setItem('DOMAIN',this.domain);
      //this will store data in local storage
      //to redirect
      this.ngzone.run( () => this.router.navigateByUrl("/UpdateProject"));
    });
  }

}