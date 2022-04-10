import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import Logo from '../../../assets/images/logo.png'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import SocialSignButton from '../../Components/SocialSignButton'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {
  const navigation = useNavigation()
  const {height} = useWindowDimensions();
  const [code,setCode]=useState();
  const [newPassword,setNewPassword]=useState();

 const onSubmitPressed = () =>{
  navigation.navigate('Home')
 }


const onSignInPressed=()=>{
  navigation.navigate('SignIn')

}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Reset your Password</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode}/>
        <CustomInput placeholder="Enter New Password" value={newPassword} setValue={setNewPassword}/>
        <CustomButton text='Submit' type="PRIMARY" onPress={onSubmitPressed}/>
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
export default NewPasswordScreen;