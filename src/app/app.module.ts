import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { ElHostDirective } from './directives/el-host.directive';
import { InputControlComponent } from './components/input-control/input-control.component';

import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { TextareaControlComponent } from './components/textarea-control/textarea-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    ElHostDirective,
    InputControlComponent,
    TextareaControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  entryComponents: [InputControlComponent, TextareaControlComponent, FormContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
