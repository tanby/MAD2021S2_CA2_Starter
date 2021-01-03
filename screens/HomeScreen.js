import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import special function to move to new screen
import {goTo} from '../madlib/MADNavigator';

// sample screen 1
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Screen 2" onPress={()=>{
        console.log("home screen button clicked");
        // call special function to move to new screen
        goTo("Screen2");
      }} />
    </View>
  );
}

export default HomeScreen;