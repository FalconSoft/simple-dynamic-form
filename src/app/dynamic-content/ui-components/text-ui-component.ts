import { Component, OnInit, Input } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';

@Component({
    selector: 'app-ui-text',
    template: `
    <span>{{uiModel.itemProperties?.text}}</span>
    `
})
export class TextUIComponent extends BaseUIComponent {

}
