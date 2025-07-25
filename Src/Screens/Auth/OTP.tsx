import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Sizes, SCREEN_WIDTH, SCREEN_HEIGHT } from "../../Constants/Theme";
import Colors from '@/Src/Constants/Colors';
import { useState, useRef } from 'react';


const OTP = () => {

  // const inputref = [useRef(), useRef(), useRef(), useRef()];
  const [otp, Setotp] = useState(['','','','']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

const handleChangeText = (text, index) => {
  const newOtp = [...otp];
  newOtp[index] = text;
  Setotp(newOtp);

  // Move to next input
  if (text && index < inputRefs.length - 1) {
    inputRefs[index + 1].current.focus();
  }
};

  return (
    <View style = {styles.page}>
      <Text style = {{fontSize:Sizes.h2, textAlign:"center"}}>Verify Account</Text>
      <View>
        <Text style = {{opacity: 0.5, fontSize:Sizes.h4, textAlign:"center"}}>Enter 4-digit Code sent to</Text>
        <Text style = {{opacity: 0.5, fontSize:Sizes.h4, textAlign:"center"}}>Email:pass data from signup</Text>
      </View>

            <View style = {{flexDirection:"row", alignSelf:"center", marginVertical:100}}>
               {otp.map((digit, index) => (
  <View key={index} style={styles.otpBox}>
    <TextInput
      style={styles.input}
      maxLength={1}
      keyboardType="number-pad"
      value={digit}
      onChangeText={(text) => handleChangeText(text, index)}
    />
  </View>
))}

            </View>

            <View>
                <Text style = {{opacity:0.5, textAlign:"center"}}>Didn't received the code?</Text>
                <Text style = {{ textAlign:"center"}}>Resend Code</Text>
            </View>
    </View>
  )
}

export default OTP

const styles = StyleSheet.create({
  page:{
    backgroundColor:Colors.White,
    flex:1,
    paddingTop:70,
    padding:20
  }
})