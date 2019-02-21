import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxControlComponent } from './checkbox-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CheckboxControlComponent', () => {
  let component: CheckboxControlComponent;
  let fixture: ComponentFixture<CheckboxControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatCheckboxModule, MatFormFieldModule, NoopAnimationsModule],
      declarations: [ CheckboxControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxControlComponent);
    component = fixture.componentInstance;
    component.data = {name: 'test-check', label: 'Test check'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
