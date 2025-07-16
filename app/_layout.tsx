import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "@/Src/Screens/AutScreen/SplashScreen";
import IntroSlider from "@/Src/Screens/AutScreen/IntroSlider";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
 
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
