import { Component, OnInit } from '@angular/core';
import { DynamicFormControl, ActionConfig } from '../../interfaces/dynamic-form-control';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-action-control',
  templateUrl: './action-control.component.html',
  styleUrls: ['./action-control.component.scss']
})
export class ActionControlComponent implements OnInit, DynamicFormControl {
  data: ActionConfig;
  control: FormControl;

  private actionHandlers = {
    set() {
      this.control.parent.get('form-block').patchValue(this.data.payload);
    },
    reset() {
      this.control.parent.get('form-block').reset();
    }
  };

  constructor() {
    this.control = new FormControl('');
  }

  onClick() {
    console.log(`action:${this.data.cmd}:executed`);
    try {
      this.actionHandlers[this.data.cmd].call(this);
      this.control.setValue(`action:${this.data.cmd}:done`);
    } catch {
      console.error(`Action ${this.data.cmd} failed`);
    }
  }

  ngOnInit() {
  }
}
