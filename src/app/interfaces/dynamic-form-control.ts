import { FormControl } from '@angular/forms';

export interface FormControlData {
  name: string;
  label: string;
  width?: string;
  height?: string;
  type?: DynamicFormControl;
}

export interface FormConfig {
  title: string;
  controls: FormControlData[];
}

export interface ContainerConfig extends FormConfig {
  layout?: string;
}

export interface TextareaConfig extends FormControlData {
  rows?: number;
}

export interface DynamicFormControl {
  data: FormControlData;
  control: FormControl;
}
