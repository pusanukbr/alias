import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
);