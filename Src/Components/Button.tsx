import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'

const Button = ({text}) => {
  return (
    <View style = {styles.button}>
      <Text style= {{textAlign:"center"}}>{text}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.primary,
        height:40,
        width:169,
        justifyContent:"center"
    }
})