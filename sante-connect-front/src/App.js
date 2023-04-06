import React  from 'react';
import { BrowserRouter,
         Routes, 
         Route } from 'react-router-dom';
import { userContext } from './hooks/UserContext.js';
import useFindUser from './hooks/UseFindUser.js';
import SignIn from './screens/login.jsx';
import SignUp from './screens/register.jsx'
import About from './components/about.js';
import NotFound from './components/not-found.js';
import PrivateRoutes from '../src/utils/PrivateRoutes.jsx'
import Home from './components/home.js';
import Dashboard from './components/dashboard.js';
import User from './components/user-account.js';
import Forum from './components/forum.js';
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const { user, setUser, isLoading } = useFindUser();

  return (

    <BrowserRouter>
      <userContext.Provider value={{ user, setUser, isLoading }}>
          <NavBar/>
          <Routes>
            <Route path='/login' index element={<SignIn />} /> 
            <Route path="/register" element={<SignUp />} />
            <Route path="/about" element={<About/>} />
            <Route path='*' element={<NotFound />}/>
            <Route exact path="/" element={<PrivateRoutes />}>
              <Route path='/home' element={<Home/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/user' element={<User/>} />
              <Route path='/forum' element={<Forum/>} />
              <Route path='/logout' element={<useLogout/>} />
            </Route>
          </Routes>
          <Footer />
      </userContext.Provider>
    </BrowserRouter>
    );
  }

export default App;

