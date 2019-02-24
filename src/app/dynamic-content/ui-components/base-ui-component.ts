import { OnInit, Input, OnDestroy } from '@angular/core';
import { UIModel, ActionsContainer } from '../models';

export class BaseUIComponent implements OnInit, OnDestroy {
    @Input() dataModel: any;
    @Input() uiModel: UIModel;
    @Input() actions: ActionsContainer;

    ngOnInit(): void {
        const actionKey = this.uiModel.key + '_OnInit';
        if (this.actions && this.uiModel.key && this.actions.hasAction(actionKey)) {
            this.actions.onRunAction(this.uiModel, this.uiModel.key + '_OnInit', this.dataModel);
        }
    }

    ngOnDestroy(): void {
        const actionKey = this.uiModel.key + '_OnDestroy';
        if (this.actions && this.uiModel.key && this.actions.hasAction(actionKey)) {
            this.actions.onRunAction(this.uiModel, actionKey, this.dataModel);
        }
    }


}
