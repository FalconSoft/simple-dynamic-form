import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerComponent } from './form-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { config } from 'src/app/form-config';

describe('FormContainerComponent', () => {
  let component: FormContainerComponent;
  let fixture: ComponentFixture<FormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FlexLayoutModule ],
      declarations: [ FormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerComponent);
    component = fixture.componentInstance;
    component.data = {title: 'Unit test', controls: []};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
