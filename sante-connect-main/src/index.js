import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthContext';

ReactDOM.render(
  (
    <AuthProvider>
      <App />
    </AuthProvider>
  ),
  document.getElementById('root'),
);

reportWebVitals();
