import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexContainerComponent } from './flex-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ElHostDirective } from '../../directives/el-host.directive';

describe('FlexContainerComponent', () => {
  let component: FlexContainerComponent;
  let fixture: ComponentFixture<FlexContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlexLayoutModule],
      declarations: [ FlexContainerComponent, ElHostDirective ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexContainerComponent);
    component = fixture.componentInstance;
    component.data = {name: 'test-block', label: 'Test container', controls: []};
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
