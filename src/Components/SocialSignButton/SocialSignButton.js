import { View, Text } from 'react-native'
import CustomButton from '../CustomButton/CustomButton'
import React from 'react'

const SocialSignInButtons = () => {
    const onSignInFacebook = () =>{
        console.warn('Facebook Sign In')
      }
      const onSignInGoogle = () =>{
        console.warn('Google Sign In')
      }
      const onSignInAppleId = () =>{
        console.warn('Apple Sign In')
      }
  return (
    <>
        <CustomButton text='Sign In with facebook' bgColor="#E7EAF4"  fgColor="#4765a9" onPress={onSignInFacebook}/>
        <CustomButton text='Sign In with google' bgColor="#FAE9EA"  fgColor="#DD4D44"  onPress={onSignInGoogle}/>
        <CustomButton text='Sign In with apple' bgColor="#e3e3e3"  fgColor="#363636" onPress={onSignInAppleId}/>
    </>
  )
}

export default SocialSignInButtons