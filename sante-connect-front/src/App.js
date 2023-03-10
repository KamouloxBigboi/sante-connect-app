import React from 'react';
import { BrowserRouter,
         Routes, 
         Route } from 'react-router-dom';

import SignIn from './screens/sign-in.jsx';
import SignUp from './screens/sign-up.jsx'
import Secret from './screens/secret.jsx';
import Dashboard from './components/dashboard.js';
import NotFound from './components/not-found.js';
import User from './components/profile.js';
import Post from './components/post.js';
import Comment from './components/comment.js';
import Forum from './components/forum.js';
import APropos from './components/about.js';  
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Non- protected (screens) */}

        <Route path="/sign-in" element={<SignIn />} /> 
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Secret />} />
        <Route path='*' element={<NotFound />}/>
      
        {/* All these pages have to be protected */}    
      
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/comments/:id" element={<Comment />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<APropos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

