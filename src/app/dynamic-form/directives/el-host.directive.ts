import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appElHost]'
})
export class ElHostDirective {
  constructor(public containerRef: ViewContainerRef) {}
}
