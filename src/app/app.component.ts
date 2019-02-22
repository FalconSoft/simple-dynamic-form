import { Component, ViewChild } from '@angular/core';

import { config, personalForm } from './form-config';
import { FormContainerComponent } from './dynamic-form/components/form-container/form-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-dynamic-form';

  @ViewChild('form')
  form: FormContainerComponent;

  formConfig: any = config;

  submittedData;

  constructor() {}

  onSubmit(value) {
    this.submittedData = value;
  }
}
