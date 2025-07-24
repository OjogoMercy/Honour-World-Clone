import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import General from '@/Src/Constants/General';
import Images from '@/Src/Constants/Images'; 
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '@/Src/Constants/Theme';
import { Sizes } from '@/Src/Constants/Theme';
import { Colors } from '@/Src/Constants/Theme';
import { Fontfamilies } from '@/Src/Constants/Theme';
import { useNavigation } from '@react-navigation/native';
import Header from '@/Src/Components/Header';
 

export default function FundwalletPaymentOptions() {
  const route = useRoute();
  const navigation = useNavigation();
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
        <Header
        title={"Fund Wallet"}
        customStyle={{ width: SCREEN_WIDTH * 1 }} label={undefined}        />
        <View>
          <Text style={[General.subFundwalletText, {textAlign: "left", color: Colors.primary, fontFamily: Fontfamilies.bold, fontSize: Sizes.h3}]}>{method.name}</Text>
        <Text style={{fontSize: Sizes.body4, marginVertical: 20}}>{method.body}</Text>
        {method.id === '6' && ( 
         <View>
          <TouchableOpacity style={[General.option,]} onPress={() => navigation.navigate('FundWalletCardPay', { method })}>
            <Image source={Images.budpay} style={{width: SCREEN_WIDTH * 0.38, height: SCREEN_HEIGHT * 0.03 }} />
            <Image source={method.navIcon} style={[General.FundIcon, { width: 20, height: 20, marginLeft: 'auto' }]}/>
          </TouchableOpacity>
          <TouchableOpacity style={General.option} onPress={() => navigation.navigate('FundWalletCardPay', { method })}>
            <Image source={Images.flutterwave} style={{width: SCREEN_WIDTH * 0.38, height: SCREEN_HEIGHT * 0.03 }} />
            <Image source={method.navIcon} style={[General.FundIcon, { width: 20, height: 20, marginLeft: 'auto' }]}/>
          </TouchableOpacity>
          <TouchableOpacity style={General.option} onPress={() => navigation.navigate('FundWalletCardPay', { method })}>
           <Image source={Images.paystack} style={{width: SCREEN_WIDTH * 0.38, height: SCREEN_HEIGHT * 0.03}} />
           <Image source={method.navIcon} style={[General.FundIcon, { width: 20, height: 20, marginLeft: 'auto' }]}/>
          </TouchableOpacity>
          
            
         </View>
       )} 
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
                <Text style={{color: Colors.extraLight, fontSize: Sizes.body2}}>Idowu Emmanuel</Text>
                <Text style={{color: "#fff", fontSize: Sizes.body4}}>Virtual Account</Text>
              </View>
              
              <Image source={method.logo} style={{width: 35, height: 35}}/>      
            </View>
            <TouchableOpacity style={{ flexDirection: "row",  justifyContent: "space-between", alignItems: "center", width:  SCREEN_WIDTH * 0.3,padding: 8, height:  SCREEN_HEIGHT * 0.05,   backgroundColor: "#fff", borderRadius: Sizes.radius, opacity: 0.5, marginLeft: 20, marginTop: 40 }}>
              <View>
                  <Text style={{color: "#fff", fontSize: Sizes.body3a, fontFamily: Fontfamilies.regular }}>8028110604</Text>
              </View>
              <View style={{marginBottom: 7}}>
                  <Image source={Images.cp} style={{width: 10, height: 15, marginTop: 10 }} />
              </View>
                
              
            </TouchableOpacity>
      </ImageBackground>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Image source={method.note} style={{width: 20, height: 20, marginRight: 5}} />
        <Text style={{fontSize: Sizes.body5, color: Colors.dangerRed, textAlign: "center"}}>{method.info}</Text>
      </View>
    
        </View>
        
       
    </View>
  );
}
