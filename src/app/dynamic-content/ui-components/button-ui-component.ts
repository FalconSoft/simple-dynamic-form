import { Component, OnInit, Input } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';

@Component({
    selector: 'app-ui-button',
    template: `
    <button mat-flat-button color="primary"
        (click)="actions.onRunAction(uiModel, uiModel.itemProperties?.clickActionKey, dataModel)">
    {{uiModel.itemProperties?.label}}
    </button>
    `
})
export class ButtonUIComponent extends BaseUIComponent {
}
