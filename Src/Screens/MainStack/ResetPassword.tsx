import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FormInput from '@/Src/Components/FormInput'
import { Colors } from '../../Constants/Theme'
import Icons from '@/Src/Constants/Icons'
import {SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from "../../Constants/Theme";
import Images from '@/Src/Constants/Images'
import CustomButton from '@/Src/Components/CustomButton'

const PersonalInfo = () => {
  const [isVisible, setisVisible] = useState(false)

  const toggleIcon = () => {
      setisVisible(!isVisible);
  }
 
  return (
    <View style = {styles.page}>
        <View style = {{flexDirection:"row"}}>
            <Image
            source={Images.goBack}
            style = {{height:SCREEN_HEIGHT*0.03, width:SCREEN_HEIGHT*0.015, marginRight:10}}/>
            <Text>Back</Text>
        </View>
        <Text style = {{color:Colors.primary, textAlign:"center", fontWeight:"bold"}}>Reset Password</Text>
        <View style = {{flex:1, marginTop:SCREEN_HEIGHT * 0.05}}>
    <FormInput placeHolder={"Password"} icon = {Icons.Lock} icon2 = {Icons.eyeClosed}/>
   <FormInput  placeHolder={"New Password"}icon = {Icons.Lock}icon2 = {Icons.eyeClosed}/>
    <FormInput  placeHolder={"Confirm New Password"}icon = {Icons.Lock} icon2 = {Icons.eyeClosed}/>
    </View>

    <CustomButton title={"Reset"}/>
    </View>
  )
}

export default PersonalInfo

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:Colors.White,
        padding:Sizes.padding,
        paddingTop:Sizes.padding *3
    }
})