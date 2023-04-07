import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

export const useAuth = () => {
    return useContext(AuthContext);
  };
  
function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isAuth = async () => {
            try {
                const res = await  axios.get (
                    'http://localhost:5000/login/',
                    { withCredentials: true }
                );

                setUser(res.data);
            } catch (error) {
                console.error("Error with AuthProvider");
                setUser(null);
            };
        };

        isAuth();
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;