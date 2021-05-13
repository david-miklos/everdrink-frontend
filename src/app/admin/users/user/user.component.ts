import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
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
  imagePath: string = null;

  constructor(
    private userService: UserService,
    public fileService: FileService
  ) {}

  ngOnInit(): void {
    this.imagePath = this.constructUrl(this.user.id);
  }

  approve(): void {
    this.userService.approveUser(this.user.id);
  }

  constructUrl(id: string): string {
    const baseUrl = 'http://localhost:3000';
    const imagePath = `${baseUrl}/user/${id}.png/getfile`;
    return imagePath;
  }
}
