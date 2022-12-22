import React from 'react';
import { BrowserRouter,
         Routes, 
         Route } from 'react-router-dom';

// import PrivateRoute from './components/PrivateRoute.js';

import SignIn from './screens/SignIn.js';
import Dashboard from './screens/Dashboard.js';
import SignUp from './components/SignUp.js'
import Comment from './components/Comment.js';
import User from './components/User.js';
import Post from './components/Post.js';
import Forum from './components/Forum.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        {/* Unprotected */}
          <Route path="/sign-in" element={<SignIn />} /> 
          <Route path="/sign-up" element={<SignUp />} /> 
          {/* All these pages have to be protected */}
          <Route path="/" element={<Dashboard />} > 
            <Route path="/user" element={<User />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/forum" element={<Forum />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

