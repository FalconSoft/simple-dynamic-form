import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputControlComponent } from './input-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CONTROLS } from '../../constants';

describe('InputControlComponent', () => {
  let component: InputControlComponent;
  let fixture: ComponentFixture<InputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, NoopAnimationsModule],
      declarations: [ InputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputControlComponent);
    component = fixture.componentInstance;
    component.data = {name: 'test-input', label: 'Test input'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
