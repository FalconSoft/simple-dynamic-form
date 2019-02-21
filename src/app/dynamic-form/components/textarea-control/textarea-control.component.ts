import { Component, OnInit, Input } from '@angular/core';

import { DynamicFormControl, TextareaConfig } from '../../interfaces/dynamic-form-control';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea-control',
  templateUrl: './textarea-control.component.html',
  styleUrls: ['./textarea-control.component.scss']
})
export class TextareaControlComponent implements OnInit, DynamicFormControl {

  @Input()
  data: TextareaConfig;

  control: FormControl;

  style: any = {};

  constructor() {
    this.control = new FormControl('');
  }

  ngOnInit() {
    this.style.width = this.data.width || '50%';
  }

}
