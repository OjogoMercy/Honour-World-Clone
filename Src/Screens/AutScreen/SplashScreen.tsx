import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '@/Src/Constants/Colors'
import Images from '@/Src/Constants/Images'

const SplashScreen = () => {
  return (
    <View style = {styles.page}>
      <Image
      source={Images.logo}
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