import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorComponent } from './editor.component';
import { ProfileFormUIModel, ProfileActionsMap } from 'src/app/profile-page.config';
import { ActionsContainer } from 'src/app/actions-container';
import { UIModel } from 'src/app/dynamic-content/models';

@Component({
  selector: 'app-editor-container',
  template: `
    <div fxLayout="column" fxFlex="1 1 auto">
      <app-editor-toolbar (action)="OnToolbarAction($event)"></app-editor-toolbar>
      <as-split direction="horizontal">
          <as-split-area size="50" fxLayout fxFlex="1 1 auto">
            <app-editor #editor fxLayout fxFlex="1 1 auto"></app-editor>
          </as-split-area>
          <as-split-area size="50" fxLayout fxFlex="1 1 auto">
            <app-editor-preview [uiModel]="uiModel" [actions]="actions" fxLayout="column" fxFlex="1 1 auto"></app-editor-preview>
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

  @ViewChild('editor')
  editor: EditorComponent;

  uiModel: UIModel;
  actions: ActionsContainer;

  ngOnInit() {
    this.editor.uiModel = JSON.stringify(ProfileFormUIModel, null, 4);
    this.updatePreviewModel();
  }

  OnToolbarAction(evt: string) {
    switch (evt) {
      case 'refresh': this.updatePreviewModel(); break;
    }
  }

  private updatePreviewModel(): void {
    try {
      this.uiModel = JSON.parse(this.editor.uiModel);
      this.actions = new ActionsContainer(ProfileActionsMap, this.uiModel);
    } catch (e) {
      alert('UI Model is incorrect');
    }
  }

}
