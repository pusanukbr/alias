import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from '@chakra-ui/react'
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={}>
    <React.StrictMode>
      <ColorModeScript />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
