import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import Logo from '../../../assets/images/logo.png'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import SocialSignButton from '../../Components/SocialSignButton'
const ResetPasswordScreen = () => {

 const onSendPressed = () =>{
   console.warn('Send The Code')
 }


const onSignInPressed=()=>{
    console.warn('Back To Sign!!')

}
  const {height} = useWindowDimensions();
  const [username,setUserName]=useState();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Reset your Password</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUserName}/>
        <CustomButton text='Send' type="PRIMARY" onPress={onSendPressed}/>
    <CustomButton text='Back to sign in' type="TERTIARY" onPress={onSignInPressed}/>

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
  Logo:{
    width:"70%",
    maxWidth:300,
    maxHeight:200,

  }
})
export default ResetPasswordScreen;