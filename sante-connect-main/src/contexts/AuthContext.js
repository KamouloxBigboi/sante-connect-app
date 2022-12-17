import React, { createContext, useState, useEffect } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });
  const setAuthData = (data) => {
    setAuth({data: data});
  };
 // a function that will help us to add the user data in the auth;

 useEffect(() => {
  setAuth({ loading: false, data: JSON.parse(window.localStorage.getItem('authData'))});
}, []);
  // if object with key 'authData' exists in localStorage, we are putting its value in auth.data and we set loading to false. 
  // This function will be executed every time component is mounted (every time the user refresh the page);

useEffect(() => {
  window.localStorage.setItem('authData', JSON.stringify(auth.data));
}, [auth.data]);
// 1. when **auth.data** changes we are setting **auth.data** in l

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
