import { AbstractControl } from '@angular/forms';

export class MatchValidation {

	static MatchEmail(abstractControl: AbstractControl) {
		let field = abstractControl.get('email').value;
		let fieldConfirm = abstractControl.get('emailConfirm').value;
		if (field != fieldConfirm) {
			abstractControl.get('emailConfirm').setErrors({MatchEmail: true});
		} else {
			abstractControl.get('emailConfirm').setErrors(null);
			return null;
		}
	}

	static MatchPassword(abstractControl: AbstractControl) {
		let field = abstractControl.get('password').value;
		let fieldConfirm = abstractControl.get('passwordConfirm').value;
		if (field != fieldConfirm) {
			abstractControl.get('passwordConfirm').setErrors({MatchPassword: true});
		} else {
			abstractControl.get('passwordConfirm').setErrors(null);
			return null;
		}
	}

}
