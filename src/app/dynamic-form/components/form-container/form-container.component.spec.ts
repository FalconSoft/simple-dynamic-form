import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerComponent } from './form-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CONTROLS } from '../../constants';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexContainerComponent } from '../flex-container/flex-container.component';

describe('FormContainerComponent', () => {
  let component: FormContainerComponent;
  let fixture: ComponentFixture<FormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FlexLayoutModule, ReactiveFormsModule ],
      declarations: [ FormContainerComponent, FlexContainerComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerComponent);
    component = fixture.componentInstance;
    component.data = {label: 'Unit test', controls: [], control: CONTROLS.CONTAINER};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
