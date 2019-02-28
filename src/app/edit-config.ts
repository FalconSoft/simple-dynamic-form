import { UIModel, AttributesMap, ActionsMap } from './dynamic-content/models';

export const EditorUIModel = <UIModel>{
    type: 'flex-container',
    itemProperties: <AttributesMap>{
        fxLayout: 'column',
        width: '100%',
        height: '100%',
    },
    children: [
        {
            type: 'textarea',
            containerProperties: <AttributesMap>{
                width: '100%'
            },
            itemProperties: <AttributesMap>{
                placeholder: 'Configuration',
                dataModelPath: 'config',
                rows: 10
            }
        },
        {
            type: 'button',
            containerProperties: {
                fxLayout: 'row'
            },
            itemProperties: {
                label: 'Apply config',
                clickActionKey: 'getDataModel'
            }
        },
      ]
    };

    export const EditorCardUIModel = <UIModel>{
      type: 'card',
      containerProperties: {
        width: '100%'
      },
      itemProperties: <AttributesMap>{
        header: {
          title: 'Configuration editor'
        },
        content: EditorUIModel
      }
    };
