import React  from 'react';
import { BrowserRouter,
         Routes, 
         Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.js';
import LogOut from './hooks/useLogOut.js';
import SignIn from './screens/login.jsx';
import SignUp from './screens/register.jsx'
import About from './components/about.js';
import NotFound from './components/not-found.js';
import Home from './components/home.js';
import Dashboard from './components/dashboard.js';
import User from './components/user-account.js';
import Forum from './components/forum.js';
import Footer from './components/footer.js';
import NavBarLogged from './components/navbarlogged.js';
import NavBar from './components/navbar.js';
import PrivateOutlet from './utils/PrivateOutlet.jsx';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const { auth } = useAuth();

  return (

    <BrowserRouter>
      {auth ? <NavBarLogged /> : <NavBar/>}
          <Routes>
            <Route index element={<SignIn />} />
            <Route path='/login' element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/about" element={<About/>} />
            <Route path='*' element={<NotFound />}/>
            <Route path='/home' 
            element={<PrivateOutlet><Home/></PrivateOutlet>} />
            <Route path='/dashboard' 
            element={<PrivateOutlet><Dashboard/></PrivateOutlet>} />
            <Route path='/user' 
            element={<PrivateOutlet><User/></PrivateOutlet>} />  
            <Route path='/forum' 
            element={<PrivateOutlet><Forum/></PrivateOutlet>} />
            <Route path='/logout' 
            element={<PrivateOutlet><LogOut/></PrivateOutlet>} />
          </Routes>
        <Footer />
    </BrowserRouter>
    );
  }

export default App;

