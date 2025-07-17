import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../../app/index";
import SignIn from "../Screens/Auth/SignIn";
import Homescreen from "../Screens/MainStack/Homescreen";
import SignUp from "../Screens/Auth/SignUp";
import BottomTab from "./BottomTab";
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}

    >
      <AuthStack.Screen name="Index" component={Index} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
       <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Homescreen" component={Homescreen} />
      <AuthStack.Screen name="BottomTab" component={BottomTab}/>
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
