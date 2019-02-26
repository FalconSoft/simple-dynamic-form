import { Component } from '@angular/core';

import { UIModel, ActionsMap, IActionsContainer } from './dynamic-content/models';
import { TestPageUIModel, TestActionsMap } from './test-page.config';
import { EditorUIModel } from './edit-config';
import { ActionsContainer } from './actions-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-dynamic-form';

  uiModel: UIModel = TestPageUIModel;
  actions = new ActionsContainer(TestActionsMap);
  dataModel = {};

  editorUIModel: UIModel = EditorUIModel;
  editorActions: IActionsContainer;
  editorDataModel = {
    config: JSON.stringify(TestPageUIModel, null, 4)
  };

  constructor() {
    this.editorActions = new ActionsContainer(<ActionsMap>{
      getDataModel: (uiModel, dm) => {
        try {
          this.uiModel = JSON.parse(dm.config);
        } catch (e) {
          console.error(e);
          alert(e.message);
        }
      }
    });
  }
}
