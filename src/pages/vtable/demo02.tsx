import React from 'react';
import { ListTable, register } from '@visactor/react-vtable';
import { DateInputEditor, InputEditor, ListEditor, TextAreaEditor } from '@visactor/vtable-editors';


const inputEditor = new InputEditor();
const numberEditor = new InputEditor();
const textAreaEditor = new TextAreaEditor();
const dateInputEditor = new DateInputEditor();
const listEditor = new ListEditor({ values: ['女', '男'] });

// 注册编辑器到VTable
register.editor('name-editor', inputEditor);
register.editor('number-editor', numberEditor);
register.editor('textArea-editor', textAreaEditor);
register.editor('date-editor', dateInputEditor);
register.editor('list-editor', listEditor);


/**
 * @author xu.pengfei
 * @date 2025/4/19 21:28
 */
export default function demo02() {
  return (
    <div>
      <div>点击进行编辑</div>
      <ListTable
        option={{
          columns: [
            {
              field: '0',
              title: 'name',
              width: 200,
              editor: 'name-editor',
            },
            {
              field: '1',
              title: 'age',
              width: 200,
              editor: 'number-editor',
            },
            {
              field: '2',
              title: 'gender',
              width: 200,
              editor: 'list-editor',
            },
            {
              field: '3',
              title: 'hobby',
              width: 200,
              editor: 'name-editor',
            }
          ],
          records: [
            ['John', 18, '男', '🏀'],
            ['Mick', 17, '男', 'football'],
          ]
        }}
        height={'500px'}
        editCellTrigger="click"
        onChangeCellValue={arg => {
          console.log('onChangeCellValue', arg);
        }}
      />
    </div>
  )
}
