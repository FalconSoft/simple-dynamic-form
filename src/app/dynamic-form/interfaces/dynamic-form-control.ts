import { FormControl, FormGroup } from '@angular/forms';

export interface FormControlData {
  name: string;
  label: string;
  width?: string;
  height?: string;
  required?: boolean;
}

export interface FormControlConfig extends FormControlData {
  control: DynamicFormControl;
}

export interface FormConfig {
  label: string;
  controls: FormControlConfig[];
}

export interface FormContainerData extends FormControlData {
  name: string;
  controls: FormControlConfig[];
  layout?: string;
  align?: string;
  gap?: string;
}

export interface InputConfig extends FormControlData {
  type?: string;
}

export interface TextareaConfig extends FormControlData {
  rows?: number;
}

export interface SelectConfig extends FormControlData {
  options: {value: string, label: string}[];
}

export interface DynamicFormControl {
  data: FormControlData;
  control: FormControl | FormGroup;
}
