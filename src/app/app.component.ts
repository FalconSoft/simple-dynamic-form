import { Component } from '@angular/core';

import { UIModel, ActionsMap, IActionsContainer } from './dynamic-content/models';
import { ProfileActionsMap, ProfileCardUIModel } from './profile-page.config';
import { EditorCardUIModel } from './edit-config';
import { ActionsContainer } from './actions-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-dynamic-form';

  cardUIModel = ProfileCardUIModel;
  actions = new ActionsContainer(ProfileActionsMap);
  dataModel = {};

  editorUIModel: UIModel = EditorCardUIModel;
  editorActions: IActionsContainer;
  editorDataModel = {
    config: JSON.stringify(ProfileCardUIModel, null, 4)
  };

  constructor() {
    this.editorActions = new ActionsContainer(<ActionsMap>{
      getDataModel: (uiModel, dm) => {
        try {
          this.cardUIModel = JSON.parse(dm.config);
        } catch (e) {
          console.error(e);
          alert(e.message);
        }
      }
    });
  }
}
