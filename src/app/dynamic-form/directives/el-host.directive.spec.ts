import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ElHostDirective } from './el-host.directive';

@Component({
  template: `<div appElHost></div>`
})
class TestComponent {}

describe('ElHostDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ElHostDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement.query(By.css('div'));
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

