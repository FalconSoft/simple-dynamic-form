import { CONTROLS } from './dynamic-form/constants';

export const config = {
  label: 'Test form',
  control: CONTROLS.CONTAINER,
  align: 'center center',
  controls: [{
    control: CONTROLS.CONTAINER,
    layout: 'row',
    controls: [{
      control: CONTROLS.CONTAINER,
      layout: 'row',
      controls: [{
          control: CONTROLS.INPUT,
          name: 'first-name',
          label: 'First name',
          width: '200px',
          required: true
          // height: '75px'
        }, {
          control: CONTROLS.INPUT,
          name: 'last-name',
          label: 'Last name',
          width: '300px'
        }]
    }, {
      control: CONTROLS.CONTAINER,
      controls: [{
          control: CONTROLS.INPUT,
          name: 'company',
          label: 'Company',
          width: '100%',
          // height: '75px'
        }, {
          control: CONTROLS.INPUT,
          name: 'job',
          label: 'Job',
          width: '100%',
          // width: '300px'
        }, {
          control: CONTROLS.INPUT,
          name: 'experience',
          label: 'Experience in months',
          type: 'number',
          width: '100%',
        }]
    }]
  }, {
    name: 'email',
    control: CONTROLS.INPUT,
    type: 'email',
    label: 'Email'
  }, {
    name: 'phone',
    control: CONTROLS.INPUT,
    type: 'tel',
    label: 'Mobile phone'
  }, {
    control: CONTROLS.TEXT,
    name: 'bio',
    label: 'Biography',
    rows: 3
  }, {
    control: CONTROLS.CONTAINER,
    label: 'Location',
    name: 'location',
    layout: 'row',
    controls: [{
      control: CONTROLS.CONTAINER,
      name: 'region',
      controls: [{
        control: CONTROLS.SELECT,
        name: 'country',
        label: 'Country',
        options: [{
          value: 'ua',
          label: 'Ukraine'
        }, {
          value: 'uk',
          label: 'United Kindom'
        }]
      }, {
        control: CONTROLS.INPUT,
        name: 'city',
        label: 'City'
      }]
    }, {
      control: CONTROLS.CONTAINER,
      name: 'address',
      label: 'Address',
      layout: 'row',
      controls: [{
        control: CONTROLS.INPUT,
        name: 'street',
        label: 'Street',
        width: '300px'
      }, {
        control: CONTROLS.INPUT,
        name: 'number',
        label: 'Building',
        type: 'number',
        width: '100px'
      }, {
        control: CONTROLS.INPUT,
        name: 'index',
        label: 'Index',
        type: 'number',
        width: '100px'
      }]
    }]
  }, {
    control: CONTROLS.CHECKBOX,
    label: 'Accept conditions',
    name: 'conditions',
    required: true
  }]
};
