
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatButtonModule } from '@angular/material';

import { EditorComponent } from './editor.component';
import { InputUIComponent } from './ui-components/input-ui-component';
import { TextUIComponent } from './ui-components/text-ui-component';
import { ButtonUIComponent } from './ui-components/button-ui-component';
import { FlexContainerUIComponent } from './ui-components/flex-container-ui-component';
import { UISelectorComponent } from './ui-components/ui-selector-component';
import { SelectUIComponent } from './ui-components/select-ui-component';
import { CheckboxUIComponent } from './ui-components/checkbox-ui-component';

@NgModule({
    declarations: [
        EditorComponent,
        InputUIComponent,
        TextUIComponent,
        ButtonUIComponent,
        FlexContainerUIComponent,
        UISelectorComponent,
        CheckboxUIComponent,
        SelectUIComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
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
        InputUIComponent,
        TextUIComponent,
        ButtonUIComponent,
        FlexContainerUIComponent,
        UISelectorComponent,
        EditorComponent
    ],
    entryComponents: [
      InputUIComponent,
      TextUIComponent,
      ButtonUIComponent,
      FlexContainerUIComponent,
      CheckboxUIComponent,
      SelectUIComponent
    ],
})
export class DynamicContentModule { }
