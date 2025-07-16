import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Ionicons from '@expo/vector-icons/Ionicons'

const FormInputs = () => {
  return (
    <View>
        <View>
        <TextInput
            style={{height:35,width:300, borderColor: 'gray',   borderRadius:6, paddingLeft:10,backgroundColor: "#f9f9f9",}}
            placeholder="Enter Phone Number" /></View>
            


       

      
    </View>
  )
}

export default FormInputs

const styles = StyleSheet.create({
    input:{
        
        

    }

})