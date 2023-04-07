import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import AuthProvider from './hooks/useAuth.js';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(

  <AuthProvider>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </AuthProvider>
  );
  
export default root;
