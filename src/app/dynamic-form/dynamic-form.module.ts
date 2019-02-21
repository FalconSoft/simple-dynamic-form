import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatButtonModule } from '@angular/material';

import { ElHostDirective } from './directives/el-host.directive';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { InputControlComponent } from './components/input-control/input-control.component';
import { TextareaControlComponent } from './components/textarea-control/textarea-control.component';
import { SelectControlComponent } from './components/select-control/select-control.component';
import { CheckboxControlComponent } from './components/checkbox-control/checkbox-control.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';

@NgModule({
  declarations: [
    FormContainerComponent,
    ElHostDirective,
    InputControlComponent,
    TextareaControlComponent,
    SelectControlComponent,
    CheckboxControlComponent,
    FlexContainerComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    FormContainerComponent
  ],
  entryComponents: [
    InputControlComponent,
    TextareaControlComponent,
    FlexContainerComponent,
    SelectControlComponent,
    CheckboxControlComponent
  ],
})
export class DynamicFormModule { }

export * from './constants';
