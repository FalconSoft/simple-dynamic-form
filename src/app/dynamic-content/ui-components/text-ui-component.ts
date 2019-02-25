import { Component } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';

@Component({
    selector: 'app-ui-text',
    template: `
    <span [style.width]="uiModel.itemProperties?.width">{{uiModel.itemProperties?.text}}
    </span>
    `,
    styles: [
      `   span {
              border-bottom: 2px solid black;
              display: inline-block;
              margin-bottom: 1.25rem;
              margin-top: 1rem;
              padding: .5rem 0;
          }
      `
    ]
})
export class TextUIComponent extends BaseUIComponent {

}
