import React from 'react';
import { Navigate } from 'react-router-dom';
import { getItemLocalStorage } from '../utils';

export default function ProtectedRoutes({children}) {
  const isLoggedIn = getItemLocalStorage('isLoggedIn') || false
  if(!isLoggedIn){
   return <Navigate to='/' replace />
  }
  return children

}