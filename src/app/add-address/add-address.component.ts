import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from '@core/interfaces/address.interface';
import { AddressService } from '@core/services/address.service';
import { NotificationService } from '@core/services/notification.service';

// TODO Make a better regex
const RegExpValidator = {
  phone: RegExp(/^[0-9]{9}$/),
  zip: RegExp(/^[0-9]{4}$/),
};

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {
  public addressForm: FormGroup;
  constructor(
    private ns: NotificationService,
    protected addressService: AddressService,
    private formBuilder: FormBuilder
  ) {
    this.addressForm = this.formBuilder.group({
      phone: [
        null,
        [Validators.pattern(RegExpValidator.phone), Validators.required],
      ],
      country: [
        null,
        [
          Validators.minLength(1),
          Validators.maxLength(30),
          Validators.required,
        ],
      ],
      region: [
        null,
        [
          Validators.minLength(1),
          Validators.maxLength(30),
          Validators.required,
        ],
      ],
      zip: [
        null,
        [Validators.pattern(RegExpValidator.zip), Validators.required],
      ],
      city: [
        null,
        [
          Validators.minLength(1),
          Validators.maxLength(30),
          Validators.required,
        ],
      ],
      street: [
        null,
        [
          Validators.minLength(1),
          Validators.maxLength(30),
          Validators.required,
        ],
      ],
      street_number: [
        null,
        [
          Validators.minLength(1),
          Validators.maxLength(30),
          Validators.required,
        ],
      ],
    });
  }

  ngOnInit(): void {}

  submitAddress(form: FormGroup): void {
    if (form.valid) {
      this.addressService.addAddress(form.value as Address);
    } else {
      this.ns.show('ERROR! The data is not valid!');
    }
  }
}
