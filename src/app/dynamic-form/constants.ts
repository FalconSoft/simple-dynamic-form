import { InputControlComponent } from './components/input-control/input-control.component';
import { TextareaControlComponent } from './components/textarea-control/textarea-control.component';
import { SelectControlComponent } from './components/select-control/select-control.component';
import { CheckboxControlComponent } from './components/checkbox-control/checkbox-control.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { ActionControlComponent } from './components/action-control/action-control.component';

export const CONTROLS = {
  INPUT: 'input',
  SELECT: 'select',
  TEXT: 'text',
  CONTAINER: 'container',
  CHECKBOX: 'checkbox',
  ACTION: 'action'
};

export const CONTROL_MAP = {
  [CONTROLS.INPUT]: InputControlComponent,
  [CONTROLS.SELECT]: SelectControlComponent,
  [CONTROLS.CONTAINER]: FlexContainerComponent,
  [CONTROLS.TEXT]: TextareaControlComponent,
  [CONTROLS.CHECKBOX]: CheckboxControlComponent,
  [CONTROLS.ACTION]: ActionControlComponent
};
