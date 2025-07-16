import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors';  
import Ionicons from '@expo/vector-icons/Ionicons';


const Button = () => {
  return (
    <View style={styles.bottom}>
    <View>
      <Text style={{color:'white'}}>Make Payment</Text>
    </View>

<Ionicons name="chevron-back-sharp" size={24} color="black" />

    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    bottom:{
        height:30,
        width:300,
        backgroundColor:Colors.primary,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',


        
    }

})