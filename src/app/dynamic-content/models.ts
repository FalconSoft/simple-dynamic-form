import { EventEmitter } from 'events';

type UIAction = (sender: UIModel, dataModel: any) => void;

export interface AttributesMap {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    label?: string;
    [key: string]: any;
}

export interface ActionsMap {
    [key: string]: UIAction;
}


export interface UIModel {
    key?: string;
    type: string;
    itemProperties: AttributesMap;
    containerProperties: AttributesMap;
    children: UIModel[];
}

export interface IActionsContainer {
    actions: ActionsMap;
    hasAction(actionName: string): boolean;
    onRunAction(sender: UIModel, actionName: string, dataModel: any): void;
}
