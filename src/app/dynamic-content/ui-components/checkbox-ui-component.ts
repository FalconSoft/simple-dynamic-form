import { Component } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';

@Component({
  selector: 'app-ui-checkbox',
  template: `<mat-checkbox
      [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]">{{uiModel.itemProperties?.label}}
    </mat-checkbox>`,
})
export class CheckboxUIComponent extends BaseUIComponent {

}
