import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
<<<<<<< HEAD
import SplashScreen from "@/Src/Screens/AutScreen/SplashScreen";
import IntroSlider from "@/Src/Screens/AutScreen/IntroSlider";
=======
import index from "./index";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import BottomTab from "@/Src/Navigation/BottomTab";
>>>>>>> 9fa1e4c9015b371a5223ec978759de4f37aea838

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
<<<<<<< HEAD
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component = {SplashScreen} />
          <Stack.Screen name="IntroSlider" component = {IntroSlider}/>
=======
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="BottomTab">
          <Stack.Screen name="Index" component={index} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
>>>>>>> 9fa1e4c9015b371a5223ec978759de4f37aea838
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
