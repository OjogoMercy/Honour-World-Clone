import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import Colors from '@/Src/Constants/Colors'

const IntroSlider = () => {
  return (
    <View style = {styles.page}>
      <View style = {styles.body}></View>
      
    </View>
  )
}

export default IntroSlider

const styles = StyleSheet.create({
    page:{
        backgroundColor:Colors.primary,
        flex:1
    },
    body:{
        backgroundColor:Colors.White,
        height:704,
        width:360,
        
    }
})