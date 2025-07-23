import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
<<<<<<< HEAD:Src/Screens/AutScreen/SplashScreen.tsx
import Colors from '@/Src/Constants/Colors'
import Images from '@/Src/Constants/Images'
import { Sizes, SCREEN_WIDTH, SCREEN_HEIGHT } from "../../Constants/Theme";
=======
>>>>>>> 474c8977ce46462eb8c21bb9af143ff18f36db38:Src/Screens/Auth/SplashScreen.tsx
import { useEffect } from 'react'
import Images from '../../Constants/Images'
import { Colors } from '../../Constants/Theme'
import { useNavigation } from 'expo-router'

const SplashScreen = () => {
  const navigation = useNavigation()
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
        height:SCREEN_HEIGHT * 0.08, 
        width:SCREEN_WIDTH * 0.20
    }
})