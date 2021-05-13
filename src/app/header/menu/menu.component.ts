import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  role: string;
  constructor(public authService: AuthService) {
    this.authService.auth$.subscribe(
      (data) => {
        this.role = data.payload.role;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}

  signout(): void {
    this.authService.signout();
  }
}
