import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import Logo from '../../../assets/images/logo.png'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import SocialSignButton from '../../Components/SocialSignButton'


const SignInScreen = () => {
 const onSignInPressed = () =>{
   console.warn('Signed In')
 }
 const onForgotPassword = () =>{
  console.warn('Forgot Password')
}
const onSignUpPressed= () => {
  console.warn('Create A New Account')
}
  const {height} = useWindowDimensions();
  const [username,setUsername]=useState();
  const [password,setUserpassword]=useState()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Image  source={Logo} style={[styles.Logo,{height: height * 0.3}]} resizeMode="contain"/>
        <CustomInput placeholder="Email....." value={username} setValue={setUsername}/>
        <CustomInput placeholder="Password" value={password} setValue={setUserpassword} secureTextEntry/>
        <CustomButton text='Sign In!!' onPress={onSignInPressed}/>
        <CustomButton text='Forgot Passwrd!!' type="TERTIARY" onPress={onForgotPassword}/>
        <SocialSignButton/>

        <CustomButton text='Don`t have an account? Create one' type="TERTIARY" onPress={onSignUpPressed}/>

    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  root:{
    alignItems:'center',
    padding:20,
  },
  Logo:{
    width:"70%",
    maxWidth:300,
    maxHeight:200,

  }
})
export default SignInScreen;