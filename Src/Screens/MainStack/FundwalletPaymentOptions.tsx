import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import General from '@/Src/Constants/General';
import Images from '@/Src/Constants/Images'; 
import { SCREEN_WIDTH } from '@/Src/Constants/Theme';
import { Sizes } from '@/Src/Constants/Theme';
import { Colors } from '@/Src/Constants/Theme';

export default function FundwalletPaymentOptions() {
  const route = useRoute();
  const method = route.params?.method;

  if (!method) {
    return (
      <View style={General.container}>
        <Text style={General.subFundwalletText}>No payment method selected.</Text>
      </View>
    );
  }

  return (
    <View style={General.container}>
      <Text style={[General.subFundwalletText, {textAlign: "left", color: Colors.primary}]}>{method.name}</Text>
      <Text style={{fontSize: Sizes.body4, marginVertical: 10}}>{method.body}</Text>
      <ImageBackground source={ method.banner }
        style={{
          width: SCREEN_WIDTH - 30,
          height: 200,
          borderRadius: Sizes.radius,
          overflow: 'hidden',
          marginBottom: 20,
        }}>
      <View  style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20}}>
        <View>
          <Text style={{color: "#fff", fontSize: Sizes.body2}}>Idowu Emmanuel</Text>
          <Text style={{color: "#fff", fontSize: Sizes.body4}}>Virtual Account</Text>
        </View>
        
        <Image source={method.logo} style={{width: 35, height: 35}}/>      
      </View>
      <TouchableOpacity style={{width: 110, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff", borderRadius: Sizes.radius, opacity: 0.5, height: 40, marginLeft: 20, padding: 10}}>
          <Text style={{color: "#fff", fontSize: Sizes.body3a}}>8028110604</Text>
          <Image source={Images.copy} style={{width: 15, height: 15, marginTop: 10}} />
      </TouchableOpacity>
     </ImageBackground>
      {/* <Image source={method.banner} style={{width: "auto" , height: 200, marginVertical: 20, borderRadius: Sizes.radius}} /> */}
    </View>
  );
}
