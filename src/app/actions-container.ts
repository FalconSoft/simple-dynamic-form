import { TestActionsMap } from './test-page.config';
import { ActionsContainer, UIModel } from './dynamic-content/models';

export const actions = <ActionsContainer>{
    actions: TestActionsMap,

    hasAction(actionName: string): boolean {
      return this.actions.hasOwnProperty(actionName) && typeof this.actions[actionName] === 'function';
    },

    onRunAction(sender: UIModel, actionName: string, dataModel: any): void {
      if (typeof this.actions[actionName] === 'function') {
          this.actions[actionName](sender, dataModel);
      } else {
          throw new Error('Unkown action name ->' + actionName);
      }
    }
  };
