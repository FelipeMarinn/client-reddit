import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
import './index.css';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser')
//   worker.start()
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

