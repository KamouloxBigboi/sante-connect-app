import React from 'react';
import { BrowserRouter,
         Routes, 
         Route } from 'react-router-dom';

import SignIn from './screens/login.jsx';
import SignUp from './screens/register.jsx'
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/dashboard.js';
import NotFound from './components/not-found.js';
import User from './components/user.js';
import Home from './components/home.js';
import About from './components/about.js';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Non- protected (screens) */}

        <Route index element={<Home/>} />
        <Route path="/login" element={<SignIn />} /> 
        <Route path="/register" element={<SignUp />} />
        <Route path="/about" element={<About/>} />
        <Route path='*' element={<NotFound />}/>
      
        {/* All these pages have to be protected */}    
      
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

