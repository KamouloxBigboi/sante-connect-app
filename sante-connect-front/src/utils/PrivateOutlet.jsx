import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { userContext } from '../hooks/userContext';
import { useAuth } from '../hooks/useAuth';
import Loading from '../components/Loading';

export default function PrivateOutlet() {

  const auth = useAuth();
  const isLoading = useContext(userContext);

  if (isLoading) {
    return <Loading />;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
