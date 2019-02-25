import { Component } from '@angular/core';

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

  config: string;

  uiModel: UIModel = TestPageUIModel;
  dataModel = {};
  actions = actions;
}
