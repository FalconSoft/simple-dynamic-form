import { ActionUnion, ActionTypes } from './actions';

import { ProfileFormUIModel, ProfileActionsMap } from 'src/app/profile-page.config';
import { ActionsContainer } from 'src/app/actions-container';

export interface ComponentConfig {
  uiModel: string;
  actions: ActionsContainer;
}

export interface EditorState {
  config: ComponentConfig;
  preview: {uiModel: string};
}

const initialConfig: ComponentConfig = {
  uiModel: JSON.stringify(ProfileFormUIModel, null, 4),
  actions: new ActionsContainer(ProfileActionsMap)
}

export const initialState: EditorState = {
  config: {...initialConfig},
  preview: {...initialConfig}
};

export function reducer(state = initialState, action: ActionUnion) {
  switch (action.type) {
    case ActionTypes.ApplyConfig: return {
      ...state,
      preview: {
        ...state.preview,
        uiModel: state.config.uiModel
      }
    };

    case ActionTypes.DynamicConfig: return {
      ...state,
      config: {
        uiModel: action.payload
      }
    };

    default: return state;
  }
}

export const selectConfig = (state) => state.editor.config;
export const selectPreview = (state) => state.editor.preview;
