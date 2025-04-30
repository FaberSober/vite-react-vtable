import React from 'react';
import { ListTable } from '@visactor/react-vtable';

const option = {
  columns: [
    {
      field: '0',
      title: 'name',
    },
    {
      field: '1',
      title: 'age',
    },
    {
      field: '2',
      title: 'gender',
    },
    {
      field: '3',
      title: 'hobby',
    },
  ],
  records: new Array(1000).fill(['John', 18, 'male', '🏀']),
};

/**
 * @author xu.pengfei
 * @date 2025/4/19 21:11
 */
export default function demo01() {
  return (
    <div>
      <ListTable option={option} height={'500px'} width="100%" />
    </div>
  );
}
