import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navigate from './components/PrivateRoute';
import SignIn from './screens/SignIn';
import Panel from './screens/Panel';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/sign-in" component={<SignIn />} />
          <Navigate path="/" component={<Panel />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

