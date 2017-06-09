import { Component, Input } from '@angular/core';

import { User } from '../../../classes/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  @Input()
  users: User[];

  constructor(
    private userService: UserService
  ) { }
}
