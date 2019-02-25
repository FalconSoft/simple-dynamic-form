import { UIModel, AttributesMap, ActionsMap } from './dynamic-content/models';

export const TestPageUIModel = <UIModel>{
    type: 'flex-container',
    itemProperties: <AttributesMap>{
        fxLayout: 'column',
        width: '100%',
        height: '100%',
    },
    children: [
        {
            type: 'text-input',
            containerProperties: <AttributesMap>{
                width: '100%'
            },
            itemProperties: <AttributesMap>{
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'Username',
                dataModelPath: 'userName',
            }
        },
        {
            type: 'flex-container',
            containerProperties: {
                width: '100%'
            },
            itemProperties: {
                fxLayout: 'row',
                fxLayoutGap: '1rem',
                width: '100%'
            },
            children: [{
                type: 'text-input',
                containerProperties: {
                  fxFlex: '1 1 auto'
                },
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'First Name',
                    dataModelPath: 'firstName'
                }
            },
            {
                type: 'text-input',
                containerProperties: {
                  fxFlex: '1 1 auto'
                },
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'Last Name',
                    dataModelPath: 'lastName'
                }
            },
            ]

        },
        {
            type: 'text',
            containerProperties: {},
            itemProperties: {
                text: 'Address',
                width: '100%'
            }
        },
        {
            type: 'text-input',
            containerProperties: {},
            itemProperties: {
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'Line 1',
                dataModelPath: 'line1'
            }
        },
        {
            type: 'text-input',
            containerProperties: {},
            itemProperties: {
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'Line 2',
                dataModelPath: 'line2'
          }
        },
        {
            type: 'text-input',
            containerProperties: {},
            itemProperties: {
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'State',
                dataModelPath: 'state'
          }
        },
        {
            type: 'flex-container',
            containerProperties: {
                width: '100%'
            },
            itemProperties: {
                fxLayout: 'row',
                fxLayoutGap: '1rem',
                width: '100%',
            },
            children: [{
                type: 'text-input',
                containerProperties: {
                    fxFlex: '1 1 auto'
                },
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'City',
                    dataModelPath: 'city'
                }
            },
            {
                type: 'text-input',
                containerProperties: {
                    fxFlex: '1 1 auto'
                },
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'Zip',
                    dataModelPath: 'zip'
                }
            }]
        },
        {
            type: 'flex-container',
            itemProperties: {
              fxLayoutAlign: 'flex-end stretch'
            },
            children: [
              {
                type: 'button',
                containerProperties: {
                    fxLayout: 'row'
                },
                itemProperties: {
                    label: 'SUBMIT',
                    clickActionKey: 'consoleLog'
                }
              }
            ]
        }]
};

export const TestPageDataModel = {

};

export const TestActionsMap = <ActionsMap>{
    consoleLog: (uiModel, dm) => console.log('consoleLog ->', dm, uiModel),
};


