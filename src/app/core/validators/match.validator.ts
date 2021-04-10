import {AbstractControl} from '@angular/forms';

export class MatchValidation {

  static MatchEmail(abstractControl: AbstractControl): any {
    const field = abstractControl.get('email').value;
    const fieldConfirm = abstractControl.get('emailConfirm').value;
    if (field !== fieldConfirm) {
      abstractControl.get('emailConfirm').setErrors({MatchEmail: true});
    } else {
      abstractControl.get('emailConfirm').setErrors(null);
      return null;
    }
  }

  static MatchPassword(abstractControl: AbstractControl): any {
    const field = abstractControl.get('password').value;
    const fieldConfirm = abstractControl.get('passwordConfirm').value;
    if (field !== fieldConfirm) {
      abstractControl.get('passwordConfirm').setErrors({MatchPassword: true});
    } else {
      abstractControl.get('passwordConfirm').setErrors(null);
      return null;
    }
  }

}
