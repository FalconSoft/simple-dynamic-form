import { IActionsContainer, UIModel, ActionsMap } from './dynamic-content/models';

export class ActionsContainer implements IActionsContainer {
    constructor(am: ActionsMap) {
      this.actions = am;
    }
    actions: ActionsMap;

    hasAction(actionName: string): boolean {
      return this.actions.hasOwnProperty(actionName) && typeof this.actions[actionName] === 'function';
    }

    onRunAction(sender: UIModel, actionName: string, dataModel: any): void {
      if (typeof this.actions[actionName] === 'function') {
          this.actions[actionName](sender, dataModel);
      } else {
          throw new Error('Unkown action name ->' + actionName);
      }
    }
}
