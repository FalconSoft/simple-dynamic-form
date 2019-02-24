import { Component, OnInit, Input } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';

@Component({
    selector: 'app-ui-selector',
    template: `
    <ng-container [ngSwitch]="uiModel.type">
        <app-ui-text *ngSwitchCase="'text'"
            [uiModel]='uiModel'
            [dataModel]='dataModel'
            [actions]='actions'
        ></app-ui-text>

        <app-ui-input *ngSwitchCase="'text-input'"
            [uiModel]='uiModel'
            [dataModel]='dataModel'
            [actions]='actions'
        ></app-ui-input>

        <app-ui-button *ngSwitchCase="'button'"
            [uiModel]='uiModel'
            [dataModel]='dataModel'
            [actions]='actions'
        ></app-ui-button>

        <app-ui-flex-container *ngSwitchCase="'flex-container'"
            [uiModel]='uiModel'
            [dataModel]='dataModel'
            [actions]='actions'
        ></app-ui-flex-container>
    </ng-container>
    `
})
export class UISelectorComponent extends BaseUIComponent {

}
