import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import SignInScreen from '../Screens/SignInScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen'
import ForgotPasswordSCreen from '../Screens/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen';
import HomeScreen from '../Screens/HomeScreen';
enableScreens()
import React from 'react'

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    // <SignInScreen/>
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="SignIn" component={SignInScreen}/>
       <Stack.Screen name="SignUp" component={SignUpScreen}/>
       <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
       <Stack.Screen name="ForgotPassword" component={ForgotPasswordSCreen}/>
       <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
       <Stack.Screen name="Home" component={HomeScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation