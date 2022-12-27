import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Footer from './components/footer';
import NavbarLogged from './components/navbar-logged';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <>
      <NavbarLogged />
        <App />
      <Footer />
    </>
  );
  
export default root;
