import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';
import { InputUIComponent } from './input-ui-component';
import { TextUIComponent } from './text-ui-component';
import { ButtonUIComponent } from './button-ui-component';
import { FlexContainerUIComponent } from './flex-container-ui-component';
import { CheckboxUIComponent } from './checkbox-ui-component';
import { SelectUIComponent } from './select-ui-component';
import { TextareaUIComponent } from './textarea-ui-component';
import { CardUIComponent } from './card-ui-component';

const resolveComponent = (() => {
  const MAP = {
    'text-input': InputUIComponent,
    'text': TextUIComponent,
    'button': ButtonUIComponent,
    'flex-container': FlexContainerUIComponent,
    'checkbox': CheckboxUIComponent,
    'select': SelectUIComponent,
    'textarea': TextareaUIComponent,
    'card': CardUIComponent
  };
  return (key: string) => {
    if (MAP.hasOwnProperty(key)) {
      return MAP[key];
    }
    throw new Error(`Unknown component ${key}.`);
  };
})();

@Component({
    selector: 'app-ui-selector',
    template: ''
})
export class UISelectorComponent extends BaseUIComponent implements OnInit {
  constructor(private containerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(resolveComponent(this.uiModel.type));
    const componentRef = this.containerRef.createComponent(componentFactory);
    const component = <BaseUIComponent>componentRef.instance;
    component.actions = this.actions;
    component.dataModel = this.dataModel;
    component.uiModel = this.uiModel;
  }
}
