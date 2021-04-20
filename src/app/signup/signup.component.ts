import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@core/services/notification.service';
import { FormBuilder } from '@angular/forms';
import { MatchValidation } from '@core/validators/match.validator';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/interfaces/user.interface';

const RegExpValidator = {
  lowerCase: RegExp(/^(?=.*?[a-z])/),
  upperCase: RegExp(/^(?=.*?[A-Z])/),
  digit: RegExp(/^(?=.*?[0-9])/),
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(
    private ns: NotificationService,
    protected authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group(
      {
        email: [null, [Validators.email, Validators.required]],
        password: [
          null,
          [
            Validators.pattern(RegExpValidator.lowerCase),
            Validators.pattern(RegExpValidator.upperCase),
            Validators.pattern(RegExpValidator.digit),
            Validators.minLength(8),
            Validators.maxLength(30),
            Validators.required,
          ],
        ],
        passwordConfirm: [null, Validators.required],
      },
      {
        validator: MatchValidation.MatchPassword,
      }
    );
  }

  ngOnInit(): void {}

  signup(form: FormGroup): void {
    if (form.valid) {
      delete form.value.passwordConfirm;
      this.authService.signup(form.value as User);
      console.log(form.value);
      this.signupForm.reset();
    } else {
      this.ns.show('HIBA! Adatok nem megfelelőek!');
    }
  }
}
