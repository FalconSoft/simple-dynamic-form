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
            type: 'text',
            containerProperties: <AttributesMap>{},
            itemProperties: {
                text: 'First Name'
            },
            children: null
        },
        {
            type: 'text-input',
            containerProperties: <AttributesMap>{},
            itemProperties: <AttributesMap>{
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'First Name',
                dataModelPath: 'firstName'
            }
        },
        {
            type: 'flex-container',
            containerProperties: {
                width: '100%'
            },
            itemProperties: {
                fxLayout: 'row',
                width: '100%'
            },
            children: [{
                type: 'text-input',
                containerProperties: {},
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'First Name 1',
                    dataModelPath: 'firstName'
                }
            },
            {
                type: 'text-input',
                containerProperties: {},
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'Last Name 1',
                    dataModelPath: 'lastName'
                }
            },
            ]

        },
        {
            type: 'text',
            containerProperties: {},
            itemProperties: {
                text: 'Last Name'
            }
        },
        {
            type: 'text-input',
            containerProperties: {},
            itemProperties: {
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'Last Name',
                dataModelPath: 'lastName'
            }
        },
        {
            type: 'button',
            containerProperties: {},
            itemProperties: {
                label: 'Test Button 1',
                clickActionKey: 'consoleLog'
            }
        }]
};

export const TestPageDataModel = {

};

export const TestActionsMap = <ActionsMap>{
    consoleLog: (uiModel, dm) => console.log('consoleLog ->', dm, uiModel),
};


