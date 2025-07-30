import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FormInput from '@/Src/Components/FormInput'
import Colors from '@/Src/Constants/Colors'
import Icons from '@/Src/Constants/Icons'
import {SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from "../../Constants/Theme";
import Images from '@/Src/Constants/Images'
import CustomButton from '@/Src/Components/CustomButton'

const PersonalInfo = () => {
  return (
    <View style = {styles.page}>
        <View style = {{flexDirection:"row"}}>
            <Image
            source={Images.goBack}
            style = {{height:SCREEN_HEIGHT*0.03, width:SCREEN_HEIGHT*0.015, marginRight:10}}/>
            <Text>Back</Text>
        </View>
        <Text style = {{color:Colors.primary, textAlign:"center", fontWeight:"bold"}}>Personal Information</Text>
        <View style = {{height: SCREEN_HEIGHT * 0.08, backgroundColor:"#EBF3FF", marginVertical:SCREEN_HEIGHT* 0.03, flexDirection:"row", justifyContent:"space-between", padding:Sizes.padding * 1.2}}>
            <Text style = {{fontSize:SCREEN_HEIGHT * 0.017, textAlign:"center"}}>Account Type: <Text style = {{fontWeight: "500"}}>Individual</Text></Text>
             <Text style = {{fontSize:SCREEN_HEIGHT * 0.017, textAlign:"center"}}>Wallet ID: <Text style = {{fontWeight: "500"}}>01097455</Text></Text>
        </View>
        <View style = {{flex:1}}>
    <FormInput placeHolder={"Idowu Emmanuel"} icon = {Icons.user}/>
   <FormInput  placeHolder={"08076749945"}icon = {Icons.phone}/>
    <FormInput  placeHolder={"idowuemmanuel50@gmail.com"}icon = {Images.email}/>
    </View>

    <CustomButton title={"Update"}/>
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