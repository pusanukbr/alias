import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './locales/i18n';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import { globalStyles } from './theme';

const theme = extendTheme(globalStyles);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
