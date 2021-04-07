import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import {EmpinfoModule} from '../modules/empinfo/empinfo.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeinfoService {
emp:EmpinfoModule;
http:HttpClient;
url:string = 'http://localhost:57846/api/EmployeeAPI';
httpOptions={headers : new HttpHeaders({
  'Content-Type':'application/json'
})
}
  constructor(http: HttpClient) {
    this.http = http;
   }
   GetEmployees():Observable<EmpinfoModule[]>{
    return this.http.get<EmpinfoModule[]>(this.url + "/"+"GetAllEmployees");
  }
  GetEmployeeByID(id:number):Observable<EmpinfoModule>{
    return this.http.get<EmpinfoModule>(this.url+'/'+'GetEmployeeByID' + '/' + id);
  }
  Login(name:string,pwd:string):Observable<string>{
    return this.http.get<string>(this.url+"/"+"Login"+"/"+name+"/"+pwd);
  }
  InsertEmployee(emp:EmpinfoModule):Observable<boolean>{
    return this.http.post<boolean>(this.url+"/"+"InsertEmployee",emp,this.httpOptions);
  }
  UpdateEmployee(id:number,emp:EmpinfoModule):Observable<boolean>{
    return this.http.put<boolean>(this.url+"/"+"UpdateEmployee"+"/"+ id,emp,this.httpOptions);
  }
  DeleteEmployee(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.url+"/"+"DeleteEmployee"+"/"+id);
  }
}

