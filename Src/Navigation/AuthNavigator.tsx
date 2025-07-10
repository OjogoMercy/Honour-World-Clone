import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../../app/index";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
<AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <AuthStack.Screen name="Index" component={Index} />
            </AuthStack.Navigator>
    )
}
export default AuthNavigator;