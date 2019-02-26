import { Component } from '@angular/core';

import { UIModel, ActionsMap, IActionsContainer } from './dynamic-content/models';
import { ProfilePageUIModel, ProfileActionsMap } from './profile-page.config';
import { EditorUIModel } from './edit-config';
import { ActionsContainer } from './actions-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-dynamic-form';

  uiModel: UIModel = ProfilePageUIModel;
  actions = new ActionsContainer(ProfileActionsMap);
  dataModel = {};

  editorUIModel: UIModel = EditorUIModel;
  editorActions: IActionsContainer;
  editorDataModel = {
    config: JSON.stringify(ProfilePageUIModel, null, 4)
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
