import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const customTheme = {
  ...defaultTheme,
  backgroundColor: '#333',
  primaryFontColor: '#ccc',
  nodeActiveBackgroundColor: `linear-gradient(
      to right,
      #f06292 0%,
      #5c6bc0 50%,
      #26c6da 100%
    )`,
};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
