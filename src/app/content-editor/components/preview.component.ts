import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EditorState, selectPreview } from '../store';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ActionsContainer } from 'src/app/actions-container';

@Component({
  selector: 'app-editor-preview',
  template: `
    <as-split direction="vertical">
      <as-split-area size="60" fxLayout fxFlex="1 1 auto">
        <app-ui-flex-container *ngIf="uiConfig$ | async as config" fxFlex="1 1 auto"
        [uiModel]='config.uiModel' [(dataModel)]='dataModel' [actions]='config.actions'
        (input)="OnDataModelChange($event)"></app-ui-flex-container>
      </as-split-area>
      <as-split-area size="40" fxLayout fxFlex="1 1 auto">
        <ngx-monaco-editor [options]="editorOptions" fxLayout fxFlex="1 1 auto"
        (input)="OnCodeChange($event)" [(ngModel)]="dataModelStr"></ngx-monaco-editor>
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

  constructor(private store: Store<EditorState>) { }

  uiConfig$: Observable<any>;

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
    this.uiConfig$ = this.store.pipe(
      select(selectPreview),
      filter(config => Boolean(config.uiModel)),
      map(({uiModel, actionsMap}) => {
        const model = JSON.parse(uiModel);
        return {
          uiModel: model,
          actions: new ActionsContainer(actionsMap, model),
        };
      }));
  }
}
