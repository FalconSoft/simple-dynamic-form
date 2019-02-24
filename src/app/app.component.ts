import { Component, ViewChild } from '@angular/core';

import { config, personalForm } from './form-config';
import { FormContainerComponent } from './dynamic-form/components/form-container/form-container.component';
import { UIModel } from './dynamic-content/models';
import { TestPageUIModel } from './test-page.config';
import { actions } from './actions-container';

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

  uiModel: UIModel = TestPageUIModel;
  dataModel = {};
  actions = actions;

  constructor() {}

  onSubmit(value) {
    this.submittedData = value;
  }
}
