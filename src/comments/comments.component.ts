import { DashboardComponent } from '../dashboard/dashboard.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Store, select } from '@ngrx/store';
import { AppState, selectAllUsers } from 'src/app/reducers';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  allUsers;
  userComments =[];
  toggle = [];
  constructor(private store: Store<AppState>) {
    
  }
  @Input() currentUser;
  
  ngOnInit() {        
  }

  comments: FormGroup = new FormGroup({
    textarea: new FormControl(''),
  });

  addComments(){
    let value = this.comments.controls['textarea'].value; 
    if(value.length>0){
      let d = new Date();
      let date = d.getDate() + "/" + (d.getMonth() < 10 ? 0 + d.getMonth() : d.getMonth()) + "/" + d.getFullYear();
        var comments = {
          userId: this.currentUser.userId,
          authorName: this.currentUser.username,
          authorImage: this.currentUser.imagePath,
          comments: value,
          replies :[
  
          ],
          time: date 
        };
      this.userComments.push(comments);
      //this.store.dispatch(new LoadUserInfo({ usersInfo: comments }));
      this.comments.controls['textarea'].reset();    
    }
  }

  addReply(selectedUser, i){
    if (this.currentUser.userId == selectedUser.userId){
      let d = new Date();
      let date = d.getDate() + "/" + (d.getMonth() < 10 ? 0 + d.getMonth() : d.getMonth()) + "/" + d.getFullYear();
      var comments = {
        userId: this.currentUser.userId,
        authorName: this.currentUser.username,
        authorImage: this.currentUser.imagePath,
        comments: this.comments.controls['textarea'].value,
        replies: [

        ],
        time: date
      };
      selectedUser.replies.push(comments);
      this.comments.controls['textarea'].reset();
      this.toggle[i] = !this.toggle[i];
    }
  }

  toggleReply(i){
    this.toggle[i] = !this.toggle[i];
  }
}