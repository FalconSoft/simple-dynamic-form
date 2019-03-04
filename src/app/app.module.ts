import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicContentModule } from './dynamic-content/dynamic-content.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';

import { ContentEditorModule } from './content-editor/content-editor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    DynamicContentModule,
    MatCardModule,
    ContentEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
