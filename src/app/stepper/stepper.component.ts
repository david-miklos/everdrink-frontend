import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '@core/interfaces/address.interface';
import { AddressService } from '@core/services/address.service';
import { FileService } from '@core/services/file.service';

// TODO Make a better regex
const RegExpValidator = {
  phone: RegExp(/^[0-9]{9}$/),
  zip: RegExp(/^[0-9]{4}$/),
};

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  isLinear = true;
  isEditable = false;
  public addressForm: FormGroup;
  public fileForm: FormGroup;
  fileToUpload: File = null;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private fileService: FileService,
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
    this.fileForm = this.formBuilder.group({
      file: [
        null,
        [Validators.required],
      ],
    });
  }

  ngOnInit(): void {}

  addAddress(): void {
    this.addressService.addAddress(this.addressForm.value as Address);
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  addFile(): void {
    this.fileService.uploadFile(this.fileToUpload);
  }

  done(): void {
    this.router.navigate(['']);
  }
}
