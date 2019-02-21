import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectControlComponent } from './select-control.component';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectControlComponent', () => {
  let component: SelectControlComponent;
  let fixture: ComponentFixture<SelectControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, MatSelectModule, NoopAnimationsModule],
      declarations: [ SelectControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectControlComponent);
    component = fixture.componentInstance;
    component.data = {name: 'test-select', label: 'Test select', options: []};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
