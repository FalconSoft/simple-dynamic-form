import { Component } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';

@Component({
  selector: 'app-ui-select',
  template: `
    <mat-form-field>
      <mat-select
        [placeholder]="uiModel.itemProperties?.label"
        [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]">
        <mat-option *ngFor="let option of uiModel.itemProperties?.options" [value]="option.value">
          {{option.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `
})

export class SelectUIComponent extends BaseUIComponent {

}
