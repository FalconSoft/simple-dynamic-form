import { Component } from '@angular/core';

import { UIModel, ActionsMap, IActionsContainer, AttributesMap } from './dynamic-content/models';
import { ProfilePageUIModel, ProfileActionsMap, ProfileCardUIModel } from './profile-page.config';
import { EditorUIModel, EditorCardUIModel } from './edit-config';
import { ActionsContainer } from './actions-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-dynamic-form';

  // uiModel: UIModel = ProfilePageUIModel;
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
