import Images from '@/Src/Constants/Images'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
  return (
 <View style={styles.page}>
      <Text style={styles.root}>Profile</Text>
      <Text style={styles.hint}>Your profile is your personal gateway to managing your{'\n'}account information</Text>
      <Image
      source={Images.boy}
      style = {{height:"50", width:"50"}}
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 50,
        padding: 20,
    },
    root: {
        fontSize: 20,
        color: "#0057FF",
        fontWeight: 500,
        marginLeft: 214,
    },
    hint:  {
 fontSize: 12,
  color: '#777',
  textAlign: 'center',
  lineHeight: 18,
  marginTop: 4,
    }
})