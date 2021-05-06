import { Component, Input, OnInit } from '@angular/core';
import { User } from '@core/interfaces/user.interface';
import { FileService } from '@core/services/file.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User = null;

  constructor(private userService: UserService, private fileService: FileService) {}

  ngOnInit(): void {}

  approve(): void {
    this.userService.approveUser(this.user.id);
  }

  onClick(): void {
    this.fileService.getFile(this.user.id);
  }
}
