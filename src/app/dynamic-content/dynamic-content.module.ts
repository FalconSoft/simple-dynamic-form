
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatCardModule } from '@angular/material';

import { InputUIComponent } from './ui-components/input-ui-component';
import { TextUIComponent } from './ui-components/text-ui-component';
import { ButtonUIComponent } from './ui-components/button-ui-component';
import { FlexContainerUIComponent } from './ui-components/flex-container-ui-component';
import { UISelectorComponent } from './ui-components/ui-selector-component';
import { SelectUIComponent } from './ui-components/select-ui-component';
import { CheckboxUIComponent } from './ui-components/checkbox-ui-component';
import { TextareaUIComponent } from './ui-components/textarea-ui-component';
import { CardUIComponent } from './ui-components/card-ui-component';

@NgModule({
    declarations: [
        InputUIComponent,
        TextUIComponent,
        ButtonUIComponent,
        FlexContainerUIComponent,
        UISelectorComponent,
        CheckboxUIComponent,
        SelectUIComponent,
        TextareaUIComponent,
        CardUIComponent
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
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        InputUIComponent,
        TextUIComponent,
        ButtonUIComponent,
        FlexContainerUIComponent,
        UISelectorComponent,
        CardUIComponent
    ],
    entryComponents: [
      InputUIComponent,
      TextUIComponent,
      ButtonUIComponent,
      FlexContainerUIComponent,
      CheckboxUIComponent,
      SelectUIComponent,
      TextareaUIComponent,
      CardUIComponent
    ],
})
export class DynamicContentModule { }
