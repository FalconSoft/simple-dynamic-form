import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { MatToolbarModule, MatButtonModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { EditorContainerComponent } from './components/editor-container.component';
import { ToolbarComponent } from './components/toolbar.component';
import { PreviewComponent } from './components/preview.component';
import { EditorComponent } from './components/editor.component';

import { DynamicContentModule } from '../dynamic-content/dynamic-content.module';

@NgModule({
  declarations: [EditorContainerComponent, ToolbarComponent, PreviewComponent, EditorComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    FlexLayoutModule,
    DynamicContentModule,
    AngularSplitModule.forRoot(),
    MonacoEditorModule.forRoot()
  ],
  exports: [ EditorContainerComponent ]
})
export class ContentEditorModule { }
