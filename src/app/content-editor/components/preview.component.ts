import { Component, OnInit, Input } from '@angular/core';
import { ActionsContainer } from 'src/app/actions-container';
import { UIModel } from 'src/app/dynamic-content/models';

@Component({
  selector: 'app-editor-preview',
  template: `
    <as-split direction="vertical">
      <as-split-area size="60" fxLayout fxFlex="1 1 auto">
        <app-ui-flex-container fxFlex="1 1 auto"
        [uiModel]='uiModel' [dataModel]='dataModel' [actions]='actions'
        (changedDataModel)="OnDataModelChange()"></app-ui-flex-container>
      </as-split-area>
      <as-split-area size="40" fxLayout fxFlex="1 1 auto">
        <ngx-monaco-editor [options]="editorOptions" fxLayout fxFlex="1 1 auto"
        (input)="OnCodeChange()" [(ngModel)]="dataModelStr"></ngx-monaco-editor>
      </as-split-area>
    </as-split>
  `,
  styles: [`
    :host {
      padding: .5em;
      background: white;
    }
    ngx-monaco-editor {
      height: 100%;
    }
  `]
})
export class PreviewComponent implements OnInit {

  constructor() { }

  @Input()
  uiModel: UIModel;

  @Input()
  actions: ActionsContainer;

  editorOptions = {language: 'json', automaticLayout: true};

  dataModel = {};

  dataModelStr = '';

  OnDataModelChange() {
    this.dataModelStr = JSON.stringify(this.dataModel, null, 4);
  }

  OnCodeChange() {
    try {
      this.dataModel = JSON.parse(this.dataModelStr);
    } catch (e) {
      return false;
    }
  }

  ngOnInit() {
  }
}
