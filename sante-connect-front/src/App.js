import React from 'react';
import { BrowserRouter,
         Routes, 
         Route } from 'react-router-dom';

import SignIn from './screens/SignIn.js';
import SignUp from './screens/SignUp.js'
import Dashboard from './components/Dashboard.js';
import NotFound from './components/NotFound.js';
import User from './components/User.js';
import Post from './components/Post.js';
import Comment from './components/Comment.js';
import Forum from './components/Forum.js';
import APropos from './components/APropos.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* Unprotected */} 
        <Route path='*' element={<NotFound />}/>
        <Route path="/sign-in" element={<SignIn />} /> 
        <Route path="/sign-up" element={<SignUp />} />
        {/* All these pages have to be protected */}
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/comments/:id" element={<Comment />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

