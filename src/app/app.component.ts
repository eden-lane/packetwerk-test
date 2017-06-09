import { Component, OnInit } from '@angular/core';

import { User } from './classes/user';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: User[];
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService
    .getUsers()
    .then((users) => {
      this.users = users
    })
  }
}
