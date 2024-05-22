import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import DashboardScreen from './screens/DashboardScreen';
import StartScreen from './screens/StartScreen';
import CountdownScreen from './screens/CountdownScreen';
import EndGameScreen from './screens/EndGameScreen';
import WinScreen from './screens/WinScreen';
import LoseScreen from './screens/LoseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Start" 
          component={StartScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Countdown" 
          component={CountdownScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EndGame" 
          component={EndGameScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Win" 
          component={WinScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Lose" 
          component={LoseScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
