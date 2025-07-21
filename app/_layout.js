import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AuthNavigator from "../Src/Navigator/AuthStack";
import { StatusBar } from "expo-status-bar";
const Stack = createNativeStackNavigator();
export default function RootLayout() {
  <StatusBar barStyle="dark-content" />;
  const [fontsLoaded] = useFonts({
    "GeneralSans-Regular": require("../Src/assets/fonts/GeneralSans_Complete/Fonts/OTF/GeneralSans-Regular.otf"),
    "Bold": require("../Src/assets/fonts/Bold.otf"),
     "GeneralSans-Medium": require("../Src/assets/fonts/GeneralSans_Complete/Fonts/OTF/GeneralSans-Medium.otf"),
    "GeneralSans-Bold": require("../Src/assets/fonts/GeneralSans_Complete/Fonts/OTF/GeneralSans-BoldItalic.otf"),
    "GeneralSans-ExtraBold": require("../Src/assets/fonts/GeneralSans_Complete/Fonts/OTF/GeneralSans-Semibold.otf"),
  });
  if (!fontsLoaded) return null;
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthStack" component={AuthNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
