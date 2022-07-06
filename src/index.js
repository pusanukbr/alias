import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <React.StrictMode>
      <ColorModeScript />
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
);
