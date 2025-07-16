import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors';  



const Button = () => {
  return (
    <View style={styles.bottom}>
    <View>
      <Text style={{color:'white'}}>Make Payment</Text>
    </View>



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