import { Action } from '@ngrx/store';

export enum ActionTypes {
  ApplyConfig = '[Editor] Apply config',
  DynamicConfig = '[Editor] Dynamic config'
}

export class ApplyConfig implements Action {
  readonly type = ActionTypes.ApplyConfig;
}

export class DynamicConfig implements Action {
  readonly type = ActionTypes.DynamicConfig;

  constructor(public payload: string) {}
}


export type ActionUnion = ApplyConfig | DynamicConfig;
