import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, selectAuthData } from 'src/app/reducers';
import { LoadAuth } from 'src/app/actions/disqus.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data$;
  userName;
  constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {    
    this.data$ = this.store.select(selectAuthData);
  }

  ngOnInit() {
    this.data$.subscribe(res => {
      this.userName = res;
    })
  }

}
