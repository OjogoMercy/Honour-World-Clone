import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "./index";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

const [fontsLoaded] = useFonts({
  "GeneralSans-Regular": require("./assets/fonts/GeneralSans-Regular.otf"),
  "GeneralSans-Bold": require("../Src/assets/fonts/GeneralSans-Bold.otf"),
  "GeneralSans-Medium": require("../Src/assets/fonts/GeneralSans-Medium.otf"),
});


export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Index">
          <Stack.Screen name="Index" component={index} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
