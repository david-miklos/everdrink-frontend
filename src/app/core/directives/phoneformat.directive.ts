import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

import { format } from 'libphonenumber-js';

@Directive({
	selector: '[appPhoneFormat]'
})
export class PhoneFormatDirective {

	constructor(
		private control: NgControl
	) { }

	@HostListener('input',['$event']) onEvent() {
		let str: string = this.control.value;
		if (str = format(str, 'International'))
			this.control.control.setValue(str);
	}

}
