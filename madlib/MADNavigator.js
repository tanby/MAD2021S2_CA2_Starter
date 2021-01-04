import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const navigationRef = React.createRef();

const MADNavigator = (props) =>{
    //const [s1, setS1] = useState(true);
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                {props.screens.map(
                    (value) => <Stack.Screen key={value.name} name={value.name} component={value} options={{headerShown: props.headerShown}}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
        );
    
}

export function goTo(screen){
    //const navigation = useNavigation();
    navigationRef.current?.navigate(screen);
}

export default MADNavigator;