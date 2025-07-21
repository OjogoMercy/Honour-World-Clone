import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '@/Src/Constants/Colors'
import Images from '@/Src/Constants/Images'
import { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('IntroSlider');
      }, 3000)
    }, [])
  
  return (
    <View style = {styles.page}>
      <Image
      source={Images.icon}
      style = {styles.logo} 
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    page:{
        backgroundColor:Colors.primary,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        height:58, 
        width:81
    }
})