import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';
import { ColorModeScript } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
