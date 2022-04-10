import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
  const {height} = useWindowDimensions();
  const [code,setConfimationCode]=useState();
  const navigation = useNavigation()

 const onConfirmnPressed = () =>{
  navigation.navigate('Home')
}

const onResendPressed= () => {
  console.warn('Rensend Confirmation Code')
}
const onSignInPressed=()=>{
  navigation.navigate('SignIn')

}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput placeholder="Confirmation Code" value={code} setValue={setConfimationCode}/>

        <CustomButton text='Confirm' onPress={onConfirmnPressed}/>
        <CustomButton text='Resend Code' type="SECONDARY" onPress={onResendPressed}/>
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
export default ConfirmEmailScreen;