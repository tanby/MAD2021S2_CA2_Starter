/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import this to help set up simple navigation from screen to screen
import MADNavigator from './madlib/MADNavigator';
// import all the screens in app
import HomeScreen from './screens/HomeScreen';
import Screen2 from './screens/Screen2';


const Stack = createStackNavigator();

function App() {
  return (
    // put all the screens in an array and set it as "screens" prop
    <MADNavigator screens={[HomeScreen, Screen2]} />
  );
}

export default App;
