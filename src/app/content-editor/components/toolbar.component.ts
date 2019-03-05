import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
      <button mat-flat-button (click)="action.emit('refresh')">Refresh</button>
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

  constructor() { }

  @Output()
  action = new EventEmitter<string>();

  ngOnInit() {
  }
}
