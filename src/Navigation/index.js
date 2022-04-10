import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import SignInScreen from '../Screens/SignInScreen'
import React from 'react'

enableScreens()
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    // <SignInScreen/>
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={SignInScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation