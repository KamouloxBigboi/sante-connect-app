import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);
  const { loading } = auth;
  
  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }
// if loading is set to true (when our function useEffect(() => {}, []) is not executed), we are rendering a loading component;

  return (
    <Route
      {...rest}
      render={routeProps => {
        return auth.data ? (
          <Component {...routeProps} />
        ) : (
          <Navigate to="/sign-in" />
        );
      }}
    />
  );
};

export default PrivateRoute;