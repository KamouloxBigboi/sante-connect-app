import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <>
      <Navbar />
        <App />
      <Footer />
    </>
  );
  
export default root;
