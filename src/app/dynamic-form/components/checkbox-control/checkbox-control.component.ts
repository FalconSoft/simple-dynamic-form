import { Component, OnInit } from '@angular/core';
import { DynamicFormControl, FormControlData } from '../../interfaces/dynamic-form-control';
import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

function ValidateTruthy(control: AbstractControl) {
  if (!control.value) {
    return { validTruthy: true };
  }
  return null;
}

@Component({
  selector: 'app-checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['./checkbox-control.component.scss']
})
export class CheckboxControlComponent implements OnInit, DynamicFormControl {

  data: FormControlData;
  control: FormControl;
  constructor() {
    this.control = new FormControl();
  }

  ngOnInit() {
    if (this.data.required) {
      this.control.setValidators([ValidateTruthy]);
    }
  }

}
