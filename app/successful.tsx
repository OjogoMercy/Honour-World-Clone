import Images from '@/Src/Constants/Images'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const successful = () => {
  return (
    <View style={styles.page}>
      <View style={styles.mark}>
       <Image source={Images.chat} style={styles.icon}/>
        <Text style={styles.successful}>Transaction successful</Text>
      </View>
    </View>
  )
}

export default successful

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1
    },
    mark:{
        alignItems:'center'

    },
    successful:{
        fontSize:20,
        fontWeight:'bold',
        paddingTop:200
    },
    icon:{
        height:250,
        width:250
        

    }
})