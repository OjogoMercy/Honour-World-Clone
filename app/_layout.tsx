import MainNavigator from "@/Src/Navigation/MainNavigator";
import IntroSlider from "@/Src/Screens/Auth/IntroSlider";
import SignIn from "@/Src/Screens/Auth/SignIn";
import SignUp from "@/Src/Screens/Auth/SignUp";
import SplashScreen from "@/Src/Screens/Auth/SplashScreen";
import EnterPin from "@/Src/Screens/MainStack/EnterPin";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import React, { useEffect } from "react";
import BottomTab from "../Src/Navigation/BottomTab";
import OtpVerification from "@/Src/Screens/Auth/OtpVerification";
const Stack = createNativeStackNavigator();
export default function RootLayout() {
  // Load custom fonts using useFonts hook
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Regular: require("../Src/assets/fonts/GeneralSans-Regular.otf"),
        Bold: require("../Src/assets/fonts/Bold.otf"),
        Medium: require("../Src/assets/fonts/GeneralSans-Medium.otf"),
      });
    };
    loadFonts();
  }, []);

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="OTP"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="EnterPin" component={EnterPin} />
          <Stack.Screen name="OTP" component={OtpVerification} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
