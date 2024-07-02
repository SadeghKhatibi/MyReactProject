import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPopper } from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import 'bootstrap/dist/js/bootstrap.min.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
