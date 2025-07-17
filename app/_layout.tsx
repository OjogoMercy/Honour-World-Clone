import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "./index";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import React from "react";
import Header from  '../Src/Components/Header'
const Stack = createNativeStackNavigator();
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // "GeneralSans-Regular": require("./assets/fonts/GeneralSans_Complete/OTF/GeneralSans-BoldItalic.otf"),
    "Bold": require("../Src/assets/fonts/Bold.otf"),
    // "GeneralSans-Medium": require("../Src/assets/fonts/GeneralSans_Complete/Fonts/OTF/GeneralSans-Medium.otf"),
  });
    if (!fontsLoaded) return null;
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Header">
          <Stack.Screen name="Header" component={Header} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
