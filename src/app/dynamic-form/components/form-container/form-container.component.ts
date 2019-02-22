import { Component, Input, OnInit, ViewChild, EventEmitter, Output, ChangeDetectorRef, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormContainerData, DynamicFormControl } from '../../interfaces/dynamic-form-control';
import { CONTROL_MAP } from '../../constants';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  @Input()
  data;

  config: FormContainerData;

  @Output()
  submitted = new EventEmitter<any>();

  // For test purposes
  formState: Observable<string>;

  @ViewChild('formContent')
  formContent: DynamicFormControl;

  get formData() {
    return this.formContent.control;
  }

  constructor() { }
  ngOnInit() {
    this.config = this.getFormConfiguration(this.data);
    this.formState = this.formData.valueChanges.pipe(map(c => JSON.stringify(c)));
  }

  onSubmit() {
    if (this.formData.valid) {
      this.submitted.emit(this.formData.value);
    }
  }

  /**
   * Gets configuration form configuration based on JSON format data.
   * @param data Control JSON config.
   * @returns FormContainerData.
   */
  private getFormConfiguration(data: any): FormContainerData {
    if (!CONTROL_MAP.hasOwnProperty(data.control)) {
      throw new Error(`Bad control type ${data.control}. Use one from the list: ${Object.keys(CONTROL_MAP).join(', ')}`);
    }
    data.control = CONTROL_MAP[data.control];
    if (data.controls) {
      data.controls = [...data.controls.map(item => this.getFormConfiguration(item))];
    }

    return {...data};
  }
}
