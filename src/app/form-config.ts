import { InputControlComponent } from './components/input-control/input-control.component';
import { TextareaControlComponent } from './components/textarea-control/textarea-control.component';
import { FormContainerComponent } from './components/form-container/form-container.component';

export const config = {
  title: 'Test form',
  controls: [{
    type: InputControlComponent,
    name: 'first-name',
    label: 'First name',
    width: '20%',
    height: '100px'
  }, {
    type: InputControlComponent,
    name: 'last-name',
    label: 'Last name',
    width: '30%'
  }, {
    type: TextareaControlComponent,
    name: 'bio',
    label: 'Biography',
    rows: 10
  }, {
    type: FormContainerComponent,
    title: 'Adress',
    name: 'adress',
    layout: 'row',
    controls: [{
      type: InputControlComponent,
      name: 'country',
      label: 'Country'
    }, {
      type: InputControlComponent,
      name: 'city',
      label: 'City'
    }, {
      type: InputControlComponent,
      name: 'streep',
      label: 'Street'
    }]
  }]
};
