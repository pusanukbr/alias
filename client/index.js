import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './locales/i18n';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
// test commit

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