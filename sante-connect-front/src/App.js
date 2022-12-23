import React from 'react';
import { BrowserRouter,
         Routes, 
         Route } from 'react-router-dom';

import SignIn from './screens/SignIn.js';
import SignUp from './screens/SignUp.js'
import NotFound from './components/NotFound.js';
import Dashboard from './screens/Dashboard.js';
import Comment from './components/Comment.js';
import User from './components/User.js';
import Post from './components/Post.js';
import Forum from './components/Forum.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* Unprotected */} 
        <Route path='*' element={<NotFound />}/>
        <Route path="/sign-in" element={<SignIn />} /> 
        <Route path="/sign-up" element={<SignUp />} /> 
        {/* All these pages have to be protected */}
        <Route path="/" element={<Dashboard />} > 
          <Route path="/users" element={<User />}>
            <Route path="/users/:id" element={<User />} />
          </Route>
          <Route path="/posts" element={<Post />} />
            <Route path="/posts/:id" element={<Post />} >
          </Route>
          <Route path="/comments" element={<Comment />} >
            <Route path="/comments/:id" element={<Comment />} />
          </Route>
          <Route path="/forum" element={<Forum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

