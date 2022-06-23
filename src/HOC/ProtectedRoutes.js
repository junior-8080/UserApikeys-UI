import React from 'react'
import { Route,Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children}) {
  const isLoggedIn = localStorage.getItem('my_api_isLoggedIn') || false;
  if(!isLoggedIn){
   return <Navigate to='/' replace />
  }
  return children

}