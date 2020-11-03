import React from 'react';
import AuthContextProvider from './context/AuthContext'
import MainNavigation from './navigation/MainNavigation';

const App = () =>{
  return(
  <AuthContextProvider>
    <MainNavigation />
  </AuthContextProvider>
  )
}

export default App
