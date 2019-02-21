import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DynamicFormControl, InputConfig } from '../../interfaces/dynamic-form-control';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputControlComponent implements OnInit, DynamicFormControl {

  @Input()
  data: InputConfig;

  control: FormControl;

  style: any = {};

  constructor() {
    this.control = new FormControl('');
  }

  ngOnInit() {
    this.style.width = this.data.width;
    this.style.height = this.data.height;
    if (this.data.required) {
      this.control.setValidators([Validators.required]);
    }
  }
}
