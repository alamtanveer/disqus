import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadAuth } from 'src/app/actions/disqus.actions';
import { AppState } from 'src/app/reducers';
import { Service } from '../service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logUsers:any;

  constructor(public _router: Router, private store: Store<AppState>, private service: Service) { 
    this.service.getUser().subscribe(res=>{
      this.logUsers = res;
    })
   

  }

  ngOnInit() {
    this.form.controls['username'].patchValue("Tanveer");
    this.form.controls['password'].patchValue("Tanveer123");
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  Login(){
    let username = this.form.controls['username'].value;
    let password = this.form.controls['password'].value;    
    for (var i = 0; i < this.logUsers.length; i++){
      if (this.logUsers[i].username == username && this.logUsers[i].password == password){
        var obj = {
          username: username,
          imagePath: this.logUsers[i].imagePath,
          userId: this.logUsers[i].id
    }
        this.store.dispatch(new LoadAuth({ authData: obj }));
        this._router.navigate(['/dashboard']);
        break;
      }
    }

    

    // if (this.form.controls['username'].value == "Tanveer" && this.form.controls['password'].value == "Tanveer123"){
    //   this._router.navigate(['/dashboard']);
    // }

  }
  // submit() {
  //   if (this.form.valid) {
  //     this.submitEM.emit(this.form.value);
  //   }
  // }
  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();

}
