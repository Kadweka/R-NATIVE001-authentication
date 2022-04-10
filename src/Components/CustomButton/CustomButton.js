import { View, Text ,Pressable,StyleSheet} from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const CustomButton = ({onPress,text,type="PRIMARY",bgColor,fgColor}) => {
  console.log(text);
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.container,styles[`container_${type}`],bgColor ? {backgroundColor: bgColor} : {}]}
    
    >
      <Text style={[styles.text,styles[`text_${type}`],fgColor ? {color: fgColor} : {}]} >{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:15,
    marginVertical:5,
    alignItems:'center',
    borderRadius:5
  },
  container_SECONDARY:{
    borderColor:'#3B71F3',
    borderWidth:2
  },
  
  container_PRIMARY:{
    backgroundColor:'#3B71F3',
  },

  text:{
    fontWeight:'bold',
    color:'white',
  },
  text_TERTIARY:{
    fontWeight:'bold',
    color:'black',
  },
  text_PRIMARY:{
    fontWeight:'bold',
    color:'white',
  },
  text_SECONDARY:{
    fontWeight:'bold',
    color:'#3B71F3',
  },
})
export default CustomButton