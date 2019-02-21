import {
  Component, Input,
  OnInit, AfterViewInit,
  ViewChildren, QueryList,
  ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElHostDirective } from '../../directives/el-host.directive';
import { DynamicFormControl, FormContainerData, FormControlConfig } from '../../interfaces/dynamic-form-control';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit, AfterViewInit, DynamicFormControl {

  control = new FormGroup({});

  @Input()
  data: FormContainerData;

  @ViewChildren(ElHostDirective)
  controls: QueryList<ElHostDirective>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef ) { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    const controlsList = this.controls.toArray();
    this.data.controls.forEach((item: FormControlConfig, index) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(<any>item.control);

      const viewContainerRef = controlsList[index].containerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      const component = <DynamicFormControl>componentRef.instance;
      component.data = item;
      this.control.addControl(item.name, component.control);
    });
    // Fix for ExpressionChangedAfterItHasBeenCheckedError
    this.cd.detectChanges();
  }

}
