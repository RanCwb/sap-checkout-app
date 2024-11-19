import React from 'react';
import LoginScreen from './src/pages/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';


const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>


  )
};

export default App;
