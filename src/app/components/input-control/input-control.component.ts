import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DynamicFormControl, FormControlData } from 'src/app/interfaces/dynamic-form-control';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputControlComponent implements OnInit, DynamicFormControl {

  @Input()
  data: FormControlData;

  control: FormControl;

  style: any = {};

  constructor() {
    this.control = new FormControl('');
  }

  ngOnInit() {
    this.style.width = this.data.width;
    this.style.height = this.data.height;
  }
}
