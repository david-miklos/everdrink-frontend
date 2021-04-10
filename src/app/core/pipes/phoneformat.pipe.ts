import {Pipe, PipeTransform} from '@angular/core';

import {format} from 'libphonenumber-js';

@Pipe({name: 'PhoneFormat'})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string | null, args: string[]): any {
    if (value === null) {
      return null;
    }
    if (value.charAt(0) !== '+') {
      value = '+' + value;
    }
    return format(value, 'International');
  }
}
