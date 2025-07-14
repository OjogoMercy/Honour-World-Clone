<<<<<<< Updated upstream
import { Stack } from "expo-router";
=======
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from '../app/ProfileScreen'
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
>>>>>>> Stashed changes

export default function RootLayout() {
<<<<<<< Updated upstream
  return <Stack />;
=======
  const [fontsLoaded] = useFonts({
    // "GeneralSans-Regular": require("./assets/fonts/GeneralSans_Complete/OTF/GeneralSans-BoldItalic.otf"),
    "Bold": require("../Src/assets/fonts/Bold.otf"),
    // "GeneralSans-Medium": require("../Src/assets/fonts/GeneralSans_Complete/Fonts/OTF/GeneralSans-Medium.otf"),
  });
    if (!fontsLoaded) return null;
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="ProfileScreen">
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
>>>>>>> Stashed changes
}
