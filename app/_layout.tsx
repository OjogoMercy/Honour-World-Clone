import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "./index";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import BottomTab from "@/Src/Navigation/BottomTab";
import MainNavigator from "@/Src/Navigation/MainNavigator";
import { useEffect } from "react";
import SplashScreen from "@/Src/Screens/AutScreen/SplashScreen"; 
import IntroSlider from "@/Src/Screens/AutScreen/IntroSlider";
import helpsam from "@/Src/Screens/AutScreen/helpsam";

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
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
           <Stack.Screen name="helpsam" component={helpsam} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
