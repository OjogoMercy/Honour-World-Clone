import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import BottomTab from "../Src/Navigation/BottomTab";
import MainNavigator from "@/Src/Navigation/MainNavigator";
import SplashScreen from "@/Src/Screens/Auth/SplashScreen";
import IntroSlider from "@/Src/Screens/Auth/IntroSlider";
import React, { useEffect } from "react";
import SignIn from "@/Src/Screens/Auth/SignIn";
import SignUp from "@/Src/Screens/Auth/SignUp";
import helpsam from "../Src/Screens/Auth/helpsam"
import PersonalInfo from "@/Src/Screens/MainStack/PersonalInfo";
import Settings from "@/Src/Screens/MainStack/Settings";
import ResetPassword from "@/Src/Screens/MainStack/ResetPassword"
import AccountSecurity from "@/Src/Screens/MainStack/AccountSecurity";
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
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="AccountSecurity" component={AccountSecurity} />
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="helpsam" component={helpsam} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
