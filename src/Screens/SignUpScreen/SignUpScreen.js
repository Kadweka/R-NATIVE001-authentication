import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import SocialSignButton from '../../Components/SocialSignButton'
const SignUpScreen = () => {
 const onRegisterPressed = () =>{
   console.warn('Register')
 }
const onSignInPressed= () => {
  console.warn('Create A New Account')
}
const onPrivacyPressed= () => {
    console.warn('Privacy Policy')
  }
  const onTermsOfUsePressed= () => {
    console.warn('Terms Of Use')
  }
  const {height} = useWindowDimensions();
  const [username,setUsername]=useState();
  const [password,setUserpassword]=useState()
  const [email,setUserEmail]=useState();
  const [passwordRepeat,setUserpasswordRepeat]=useState()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Create an Acount?</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Email" value={email} setValue={setUserEmail}/>

        <CustomInput placeholder="Password" value={password} setValue={setUserpassword} secureTextEntry/>
        <CustomInput placeholder="Confirm Password" value={setUserpasswordRepeat} setValue={setUserpasswordRepeat} secureTextEntry/>

        <CustomButton text='Register' onPress={onRegisterPressed}/>
        <Text style={styles.text}>
            By registering,you confirm that you accept our{' '} 
            <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> {' '}
            and {' '}
            <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>
            <SocialSignButton/>
        <CustomButton text='Have an account? Sign in' type="TERTIARY" onPress={onSignInPressed}/>

    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  root:{
    alignItems:'center',
    padding:20,
  },
  title:{
   fontSize:24,
   fontWeight:'bold',
   color:'#051C60',
//    marginTop:'20%',
   margin:10
  },
  text:{
   color:'gray',
   marginVertical:10
  },
  link:{
    color:'#FDB075',
   }
})
export default SignUpScreen;