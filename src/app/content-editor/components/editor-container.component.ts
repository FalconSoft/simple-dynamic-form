import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-container',
  template: `
    <div fxLayout="column" fxFlex="1 1 auto">
      <app-editor-toolbar></app-editor-toolbar>
      <as-split direction="horizontal">
          <as-split-area size="50" fxLayout fxFlex="1 1 auto">
            <app-editor fxLayout fxFlex="1 1 auto"></app-editor>
          </as-split-area>
          <as-split-area size="50" fxLayout fxFlex="1 1 auto">
            <app-editor-preview fxLayout="column" fxFlex="1 1 auto"></app-editor-preview>
          </as-split-area>
      </as-split>
    </div>`,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    app-editor-preview {
      overflow: hidden;
    }
    app-editor {
      max-width: 100%;
    }
  `]
})
export class EditorContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
