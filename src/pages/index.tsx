import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Button, ConfigProvider, DatePicker, Radio} from 'antd';
import {HeartOutlined} from "@ant-design/icons";

export default function App() {
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    setTheme('default')
  }, [])

  function changeTheme(v:string) {
    setTheme(v)

    ConfigProvider.config({
      theme: {
        primaryColor: v === 'default' ? '#1890FF' : '#25b864',
      },
    });
  }

  return (
    <div>
      <div>
        <p>index.vue</p>
        <Link to="/blog">
          blog
        </Link> |
        <Link to="/xxx">
          not exists
        </Link>
      </div>
      <div>
        <Radio.Group
          options={[
            { label: 'default', value: 'default' },
            { label: 'green', value: 'green' },
          ]}
          onChange={(e) => changeTheme(e.target.value)}
          value={theme}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div>
        <Button type="primary" icon={<HeartOutlined />}>Hello</Button>
      </div>
      <div>
        <DatePicker />
      </div>
    </div>
  )
}
