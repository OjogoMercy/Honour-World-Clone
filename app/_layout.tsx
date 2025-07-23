import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "./index";
import FundWallet from "@/Src/Screens/MainStack/FundWallet";
import FundwalletPaymentOptions from "@/Src/Screens/MainStack/FundwalletPaymentOptions";
import * as Font from 'expo-font';
import  { useFonts } from 'expo-font';
import BottomTab from "@/Src/Navigation/BottomTab";
import MainNavigator from "@/Src/Navigation/MainNavigator";
import SplashScreen from "@/Src/Screens/AutScreen/SplashScreen"; 
import IntroSlider from "@/Src/Screens/AutScreen/IntroSlider";
import React,{ useEffect } from "react";
import CableTv from "@/Src/Screens/AppStack/CableTv";
import FundWalletCardPay from "@/Src/Screens/MainStack/FundWalletCardPay";

const Stack = createNativeStackNavigator();
export default function RootLayout() {
  // Load custom fonts using useFonts hook
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Regular": require("../Src/assets/fonts/GeneralSans-Regular.otf"),
        "Bold": require("../Src/assets/fonts/Bold.otf"),
        "Medium": require("../Src/assets/fonts/GeneralSans-Medium.otf"),
      });
    };
    loadFonts();
  },[])

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="FundWallet">
          <Stack.Screen name="Index" component={index} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          <Stack.Screen name="CableTv" component={CableTv} />
          <Stack.Screen name="FundWallet" component={FundWallet} />
          <Stack.Screen name="FundwalletPaymentOptions" component={FundwalletPaymentOptions} />
          <Stack.Screen name="FundWalletCardPay" component={FundWalletCardPay}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
