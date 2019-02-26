import { Component, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';

// TODO: Use <app-ui-flex-container> and configuration to create editor component.
/**
 * @deprecated
 */
@Component({
  selector: 'app-editor',
  template: `
      <textarea rows="20" matInput #editor [value]="configValue"></textarea>
      <button (click)="changeConfig()">Apply config</button>
  `,
  styles: [`
    textarea: {
      height: 300px;
    }
  `]
})
export class EditorComponent {
  @ViewChild('editor')
  editor: ElementRef;

  configValue: string;

  @Input('config')
  get config() {
    return JSON.parse(this.configValue);
  }

  set config(val) {
    this.configValue = JSON.stringify(val, undefined, 4);
  }

  @Output()
  configChange = new EventEmitter<any>();

  changeConfig() {
    this.configChange.emit(JSON.parse(this.editor.nativeElement.value));
  }
}
