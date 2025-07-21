import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../../app/index";
import SignIn from "../Screens/Auth/SignIn";
import SignUp from "../Screens/Auth/SignUp";
import Homescreen from "../Screens/MainStack/Homescreen";
import BottomTab from "./BottomTab";
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
