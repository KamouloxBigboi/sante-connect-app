import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Footer from './components/footer.js';
import NavBar from './components/navbar.js';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <>
      <NavBar/>
        <App />
      <Footer />
    </>
  );
  
export default root;
