import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import special function to move to new screen
import {goTo} from '../madlib/MADNavigator';

// sample screen 2
function Screen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
      <Button title="Go to Home Screen" onPress={()=>{
        console.log("screen 2 button clicked");
        // call special function to move to new screen
        goTo("HomeScreen");
      }} />
    </View>
  );
}

export default Screen2;