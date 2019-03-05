import { Action } from '@ngrx/store';

export enum ActionTypes {
  SetPreviewConfig = '[Editor] Apply config',
  SetDynamicConfig = '[Editor] Set Dynamic config'
}

export class SetPreviewConfig implements Action {
  readonly type = ActionTypes.SetPreviewConfig;
}

export class SetDynamicConfig implements Action {
  readonly type = ActionTypes.SetDynamicConfig;

  constructor(public payload: string) {}
}


export type ActionUnion = SetPreviewConfig | SetDynamicConfig;
