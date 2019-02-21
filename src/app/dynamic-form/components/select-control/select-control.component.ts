import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DynamicFormControl, SelectConfig } from '../../interfaces/dynamic-form-control';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss']
})
export class SelectControlComponent implements OnInit, DynamicFormControl {

  @Input()
  data: SelectConfig;

  control: FormControl;

  constructor() {
    this.control = new FormControl('');
  }

  ngOnInit() {
  }
}
