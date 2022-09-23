import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import { ConfigProvider } from 'antd';

// 国际化
import 'moment/dist/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';

import 'antd/dist/antd.variable.min.css';
import './index.less'

import routes from '~react-pages'

// eslint-disable-next-line no-console
console.log(routes)

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <Router>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Router>
  </StrictMode>,
)
