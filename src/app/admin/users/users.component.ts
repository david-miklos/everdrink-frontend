import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  errorMsg = 'No users to approve.';
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers();
  }
}
