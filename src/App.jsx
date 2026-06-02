import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ResetPasswordScrenn from './Screens/ResetPasswordScreen/ResetPasswordScrenn'

const App = () => {
  return (
    <Routes>
      <Route 
          path='/login'
          element={<LoginScreen/>}
      />
      <Route
        path='/register'
        element={<RegisterScreen/>}
      />
      <Route 
        path='/home'
        element={<HomeScreen/>}
      />
      <Route 
        path='/'
        element={<LoginScreen/>}
      />
      <Route 
        path='/reset-password'
        element={<ResetPasswordScrenn/>}
      />
      <Route 
        path='/*'
        element={<Navigate to={'/home'} />}
      />
    </Routes>
  )
}

export default App