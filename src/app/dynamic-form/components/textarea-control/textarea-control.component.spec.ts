import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaControlComponent } from './textarea-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TextareaControlComponent', () => {
  let component: TextareaControlComponent;
  let fixture: ComponentFixture<TextareaControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, NoopAnimationsModule],
      declarations: [ TextareaControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaControlComponent);
    component = fixture.componentInstance;
    component.data = {name: 'test-text', label: 'Test text'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
