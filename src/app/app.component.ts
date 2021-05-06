import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
}
