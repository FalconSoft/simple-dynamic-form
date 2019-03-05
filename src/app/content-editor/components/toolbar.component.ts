import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EditorState, SetPreviewConfig } from '../store';

@Component({
  selector: 'app-editor-toolbar',
  template: `
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <span>Dynamic Content Editor</span>
      <span class="spacer"></span>
      <button mat-flat-button disabled="disabled">Load Config</button>
      <button mat-flat-button disabled="disabled">Save Config</button>
      <button mat-flat-button disabled="disabled">Show in Stackblitz</button>
      <button mat-flat-button (click)="saveInPreview()">Refresh</button>
      <button mat-flat-button disabled="disabled">Help</button>
    </mat-toolbar-row>
  </mat-toolbar>`,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }

    button {
      margin: 0 .25em;
      line-height: 28px;
    }`]
})
export class ToolbarComponent implements OnInit {

  constructor(private store: Store<EditorState>) { }

  ngOnInit() {
  }

  saveInPreview() {
    this.store.dispatch(new SetPreviewConfig());
  }

}
