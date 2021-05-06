import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '@core/interfaces/login.user.interface';
import { AuthService } from '@core/services/auth.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private ns: NotificationService,
    private router: Router
  ) {
    this.signinForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  signin(form: FormGroup): void {
    if (form.valid) {
      this.authService.signin(form.value as LoginUser);
      this.router.navigate(['']);
    } else {
      this.ns.show('HIBA! Adatok nem megfelelőek!');
    }
  }
}
