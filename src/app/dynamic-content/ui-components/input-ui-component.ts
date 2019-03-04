import { Component, OnInit, Input } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';

@Component({
    selector: 'app-ui-input',
    template: `
        <mat-form-field [style.width]="uiModel?.containerProperties?.width || '100%'">
            <input matInput [placeholder]="uiModel?.itemProperties?.placeholder"
                [style.width]="uiModel?.itemProperties?.width"
                [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]"/>
        </mat-form-field>
    `
})
export class InputUIComponent extends BaseUIComponent {

}
