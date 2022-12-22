import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <> 
     
        <App />
      <Footer />
    </>
  );
  
export default root;
