import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { userContext } from '../hooks/UserContext';
import Loading from '../components/Loading';

export default function PrivateOutlet() {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(userContext);

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  return <Outlet />;
}
