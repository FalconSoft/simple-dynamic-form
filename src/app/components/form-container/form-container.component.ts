import {
  Component, Input,
  OnInit, AfterViewInit,
  ViewChildren, QueryList,
  ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElHostDirective } from 'src/app/directives/el-host.directive';
import { DynamicFormControl, FormConfig, ContainerConfig } from 'src/app/interfaces/dynamic-form-control';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit, AfterViewInit {

  control = new FormGroup({});

  @Input()
  data: ContainerConfig;

  // For test purposes
  formState: Observable<string>;

  @ViewChildren(ElHostDirective)
  controls: QueryList<ElHostDirective>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef ) { }
  ngOnInit() {
    this.formState = this.control.valueChanges.pipe(map(c => JSON.stringify(c)));
  }

  ngAfterViewInit() {
    const controlsList = this.controls.toArray();
    this.data.controls.forEach((item, index) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(<any>item.type);

      const viewContainerRef = controlsList[index].containerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      const component = (<DynamicFormControl>componentRef.instance);
      component.data = item;
      this.control.addControl(item.name, component.control);
    });
    // Fix for ExpressionChangedAfterItHasBeenCheckedError
    this.cd.detectChanges();
  }
}
