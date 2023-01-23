import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { bgColor } from './utils/constants';
import { GameScreen, HomeScreen, StartScreen } from './screens';

const Stack = createNativeStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DarkTheme.colors,
    background: bgColor
  }
}

const App = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
      <StatusBar backgroundColor={bgColor} />
    </NavigationContainer>
  )
}

export default App;