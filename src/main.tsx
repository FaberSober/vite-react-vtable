import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import 'virtual:uno.css';

import './index.scss';

import routes from '~react-pages';

// eslint-disable-next-line no-console
console.log(routes);

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

const app = createRoot(document.getElementById('root')!);

app.render(
  <Router>
    <App />
  </Router>,
);
