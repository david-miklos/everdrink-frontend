import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  done(): void {
    this.router.navigate(['']);
  }
}
