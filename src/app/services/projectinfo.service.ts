import { Injectable } from '@angular/core';
import {ProjinfoModule } from '../modules/projinfo/projinfo.module';
import {Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectinfoService {
  emp:ProjinfoModule;
http:HttpClient;
url:string = 'http://localhost:57846/api/ProjectInfo';
httpOptions={headers : new HttpHeaders({
  'Content-Type':'application/json'
})
}
  constructor(http: HttpClient) { 
    this.http=http;
  }
  GetProjects():Observable<ProjinfoModule[]>{
    return this.http.get<ProjinfoModule[]>(this.url + "/"+"GetProjects");
  }
  UpdateProject(pid: number, pinfo:ProjinfoModule):Observable<boolean>{
    return this.http.put<boolean>(this.url + '/UpdateProject/' + pid, pinfo, this.httpOptions);

  }

  GetProjById(id:number): Observable<ProjinfoModule>{
    return this.http.get<ProjinfoModule>(this.url+ '/SelectProjByID/' +id);
  }
}
