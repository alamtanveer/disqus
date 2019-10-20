import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(public http: HttpClient) { }

  public getUser(){    
    return this.http.get("./assets/users.json");
  } 
}
