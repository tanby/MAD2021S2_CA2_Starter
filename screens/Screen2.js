import * as React from 'react';
import { View, Text, Button } from 'react-native';
// import special function to move to new screen
import {goTo} from '../madlib/MADNavigator';

// sample screen 2
function Screen2() {
  // define a function for onPress for better performance compared to defining function in prop
  const buttonPress = ()=>{
    console.log("screen 2 button clicked");
    // call special function to move to new screen
    goTo("HomeScreen");
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
      <Button title="Go to Home Screen" onPress={buttonPress} />
    </View>
  );
}

export default Screen2;