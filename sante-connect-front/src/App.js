import React, { Fragment } from 'react';
import { BrowserRouter,
         Routes, 
         Route } from 'react-router-dom';
import { UserContext } from './hooks/UserContext.js';
import useFindUser from './hooks/UseFindUser.js';
import SignIn from './screens/login.jsx';
import SignUp from './screens/register.jsx'
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/dashboard.js';
import NotFound from './components/not-found.js';
import Home from './components/home.js';
import About from './components/about.js';
import "react-toastify/dist/ReactToastify.css";
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';

function App() {

    const { 
      user, 
      setUser, 
      isLoading } = useFindUser();

  
  return (

    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <Fragment>
          <NavBar/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/login" element={<SignIn />} /> 
            <Route path="/register" element={<SignUp />} />
            <Route path="/about" element={<About/>} />
            <Route path='*' element={<NotFound />}/>
            <Route exact path='/dashboard' element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<Dashboard />}/>
            </Route>
          </Routes>
          <Footer />
        </Fragment>
      </UserContext.Provider>
    </BrowserRouter>
    );
  }

export default App;

