import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EditorState, selectPreview } from '../store';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-editor-preview',
  template: `
    <app-ui-flex-container *ngIf="$uiConfig | async as config" fxFlex="1 1 auto"
    [uiModel]='config.uiModel' [dataModel]='{}' [actions]='config.actions'></app-ui-flex-container>
  `,
  styles: [`
    :host {
      padding: .5em;
      background: white;
    }
  `]
})
export class PreviewComponent implements OnInit {

  constructor(private store: Store<EditorState>) { }

  $uiConfig: Observable<any>;

  ngOnInit() {
    this.$uiConfig = this.store.pipe(
      select(selectPreview),
      filter(config => Boolean(config.uiModel)),
      map(({uiModel, actions}) => ({
        uiModel: JSON.parse(uiModel),
        actions
      })));
  }
}
