import { Component, Input, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElHostDirective } from '../../directives/el-host.directive';
import { DynamicFormControl, FormContainerData, FormControlConfig } from '../../interfaces/dynamic-form-control';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit, DynamicFormControl {

  @Input()
  data: FormContainerData;

  control: FormGroup;

  @ViewChild(ElHostDirective)
  controlEl: ElHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.control = new FormGroup({});
  }

  ngOnInit() {
    this.generateControls();
  }

  /**
   * Generates dynamic form controls inserts it inside container.
   */
  private generateControls(): void {
    const viewContainerRef = this.controlEl.containerRef;
    this.data.controls.forEach((item: FormControlConfig) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(<any>item.control);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      viewContainerRef.detach();
      viewContainerRef.insert(componentRef.hostView);
      const component = <DynamicFormControl>componentRef.instance;
      component.data = item;

      // Adding control asynchronously to prevent error: ExpressionChangedAfterItHasBeenCheckedError.
      Promise.resolve().then(() => {
        this.control.addControl(this.getKey(item), component.control);
      });
    });
  }

  /**
   * Generates control name based on configuration.
   * @param item: FormControlConfig Control config.
   * @returns string Control key.
   */
  private getKey(item: FormControlConfig): string {
    if (item.name) {
      return item.name;
    }
    if (item.label) {
      item.label.toLowerCase().replace(/ /g, '-');
    }
    return 'form-block';
  }
}
