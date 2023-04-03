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
import { CookiesProvider } from 'react-cookie';
import { withCookies } from 'react-cookie';

function App() {
  return (

    <CookiesProvider>
      <BrowserRouter>

          {/* Non-protected (home, screens, about & 404 error page) */}

        <Routes>
          <Route index element={<Home/>} />
          <Route path="/login" element={<SignIn />} /> 
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<About/>} />
          <Route path='*' element={<NotFound />}/>
        
          {/* Protected pages (dashboard, user account, admin page, forum) */}  
    
          <Route path="/dashboard" render={() => (<Dashboard cookies={this.props.cookies} />)} /> 
          <Route path="/user" render={() => (<User cookies={this.props.cookies} />)} />
          <Route path="/private" render={() => (<PrivateRoute cookies={this.props.cookies} />)} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default withCookies(App);

