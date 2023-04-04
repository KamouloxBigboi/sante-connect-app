import React, { useContext } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { UserContext } from './../hooks/UserContext';
import Loading from './Loading';


export default function PrivateRoute(props) {   
    const { user, isLoading } = useContext(UserContext); 
    console.log(user, isLoading);

    const navigate = useNavigate();
    const { component: Component,
        ...rest } = props;

      if(isLoading) {
          return <Loading/>
        }

      if(user){
        return ( <Route {...rest} render={(props) => (<Component {...props}/>)}/>)
        } else {
          return navigate('/login')
        };
};