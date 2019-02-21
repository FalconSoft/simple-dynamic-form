import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { config } from './form-config';
import { FormContainerComponent } from './dynamic-form/components/form-container/form-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'simple-dynamic-form';

  @ViewChild('form')
  form: FormContainerComponent;

  formConfig = config;

  submittedData;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  onSubmit(value) {
    this.submittedData = JSON.stringify(value);
  }
}
