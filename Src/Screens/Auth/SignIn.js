import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FloatingMenu from "../../Components/FloatingButton";
import FormInputs from "../../Components/FormInputs";
import Icons from "../../Constants/Icons";
import Images from "../../Constants/Images";
import { Colors, Sizes } from "../../Constants/Theme";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/Src/Components/CustomButton";
// SignIn component for user authentication
// It includes input fields for phone number and password
// and a checkbox for terms and conditions
const SignIn = () => {
  //   const handleSignIn = async () => {
  //   try {
  //     const savedUserData = await AsyncStorage.getItem("userData");

  //     if (!savedUserData) {
  //       console.log("No user found. Please sign up first.");
  //       return;
  //     }

  //     const parsedUser = JSON.parse(savedUserData);

  //     if (phone === parsedUser.phone && pwd === parsedUser.password) {
  //       console.log("Login successful");
  //       // Navigate to home/dashboard or wherever
  //       navigation.replace("Home"); // or your desired screen
  //     } else {
  //       console.log("Invalid phone or password");
  //     }
  //   } catch (error) {
  //     console.log("Error during login: ", error);
  //   }
  // };
  const handleSignIn = async () => {
    try {
      // Save current input values before attempting login
      await AsyncStorage.setItem("tempPhone", phone);
      await AsyncStorage.setItem("tempPwd", pwd);

      const savedUserData = await AsyncStorage.getItem("userData");

      if (!savedUserData) {
        console.log("No user found. Please sign up first.");
        Alert.alert(
          "Login Failed",
          "No user data found. Please sign up first."
        );
        return;
      }

      const parsedUser = JSON.parse(savedUserData);
      console.log("Retrieved user:", parsedUser);

      const normalize = (n) => n.replace(/^(\+234|0)/, "0");

      if (
        normalize(phone) === normalize(parsedUser.phone) &&
        pwd === parsedUser.password
      ) {
        console.log("Login successful");
        // After successful login
        await AsyncStorage.setItem("isLoggedInOnce", "true");
        await SecureStore.setItemAsync("isLoggedInOnce", "true");

        // Clear the input values from AsyncStorage
        await AsyncStorage.removeItem("tempPhone");
        await AsyncStorage.removeItem("tempPwd");
        // also clear from UI
        setPhone("");
        setPwd("");

        navigation.replace("Homescreen");
      } else {
        console.log("Invalid phone or password");
        Alert.alert("Login Failed", "Invalid phone number or password.");
      }
    } catch (error) {
      console.log("Error during login: ", error);
      Alert.alert("Login Error", error.message || "Something went wrong.");
    }
  };
  useEffect(() => {
    const checkLoginHistory = async () => {
      const loggedInBefore = await AsyncStorage.getItem("isLoggedInOnce");
      setShowFingerprint(loggedInBefore === "true");
    };
    checkLoginHistory();
  }, []);
  // Function to handle biometric authentication
  // It checks if the user has logged in before and if biometrics are available
  // If successful, it retrieves user data and navigates to the home screen

  const checkBiometrics = async () => {
    const hasLoggedInBefore = await SecureStore.getItemAsync("isLoggedInOnce");

    if (hasLoggedInBefore === "true") {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();

      if (compatible && enrolled) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: "Authenticate with Fingerprint",
          fallbackLabel: "Enter Password",
        });

        if (result.success) {
          // Load user data
          const jsonValue = await SecureStore.getItemAsync("userData");
          if (jsonValue != null) {
            const userData = JSON.parse(jsonValue);
            // Navigate to Home or Dashboard
            navigation.replace("Homescreen");
          }
        }
      }
    }
  };

  
  // Biometric Validation
  const handleBiometricAuth = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      alert("Fingerprint/FaceID not supported on this device.");
      return;
    }

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      alert("No biometrics found. Please set up fingerprint or Face ID first.");
      return;
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Fingerprint",
      fallbackLabel: "Use Passcode",
      disableDeviceFallback: false,
    });

    if (biometricAuth.success) {
      const savedUserData = await AsyncStorage.getItem("userData");
      const parsedUser = savedUserData ? JSON.parse(savedUserData) : null;

      if (parsedUser) {
        navigation.replace("Homescreen");
        console.log("Biometric login success");
      } else {
        alert("No account found. Please sign up first.");
      }
    } else {
      alert("Fingerprint Authentication failed.");
    }
  };

  const navigation = useNavigation();
  // Navigate to SignIn screen when the component mounts
  const [uncheck, setCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <View style={styles.Page}>
      <StatusBar
        style="dark"
        backgroundColor={Colors.white}
      />
        
      <Image
        source={require("../../assets/images/project/hwB logo.png")}
        style={{
          alignSelf: "center",
          height: Sizes.IconsSizeHeight,
          width: Sizes.IconsSizeWidth,
          marginTop: Sizes.height * 0.08,
        }}
      />
      <View>
        <Text style={styles.HeaderText}> Welcome Back!</Text>
        <Text style={styles.subHeaderText}>
          Please sign in to continue with {"\n"}your account
        </Text>
        <View style={{ alignItems: "center", marginTop: Sizes.height * 0.05 }}>
          <FormInputs
            image={Icons.phone}
            placeHolder={"Phone Number"}
            keyboard={"phone-pad"}
            value={phone}
            onChangeText={setPhone}
          />
          <FormInputs
            image={Icons.Lock}
            placeHolder={"Password"}
            keyboard={"visible-password"}
            image1={Icons.eyeClosed}
            image2={Icons.eyeOpen}
            value={pwd}
            onChangeText={setPwd}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: Sizes.height * 0.01,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setCheck(!uncheck)}>
            <Image
              source={uncheck ? Icons.checkedBox : Icons.checkBox}
              style={{
                height: 25,
                width: 25,
                alignSelf: "flex-start",
              }}
            />
          </TouchableOpacity>
          <Text style={[styles.remText, { fontWeight: "900" }]}>
            Remember Password
          </Text>
        </View>
        <Text
          style={[styles.remText, { color: Colors.primary, fontWeight: "900" }]}
        >
          Forgot Password?
        </Text>
      </View>
      <CustomButton onPress={() => navigation.navigate('BottomTab')} title={"Sign In"} />
      <View style={{ alignItems: "center", marginTop: Sizes.height * 0.02 }}>
        <Text style={[styles.belowText, { fontWeight: "600" }]}>
          Login with fingerPrint
        </Text>
        <TouchableOpacity onPress={handleBiometricAuth}>
          <Image
            source={Images.fingerPrint}
            style={{
              height: 70,
              width: 70,
              marginTop: Sizes.height * 0.01,
              zindex: 1,
            }}
          />
        </TouchableOpacity>

        <Text style={styles.SignUpText}>
          Don't have an account?-{" "}
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={{
              color: Colors.primary,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Sign Up
          </Text>
        </Text>
      </View>

      <FloatingMenu
        image1={Icons.whiteWhatsapp}
        image2={Icons.phone}
        image3={Icons.chatbot}
        PopText1={"WhatsApp"}
        PopText2={" Call"}
        PopText3={"Mail"}
      />

      {/* <TouchableOpacity style={styles.QueIcon}>
        <Image source={Images.questionMark} style={{ width: 15, height: 25 }} />
      </TouchableOpacity> */}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: Colors.Background,
    paddingHorizontal: Sizes.width * 0.05,
  },
  HeaderText: {
    fontSize: Sizes.h1,
    fontFamily: "GeneralSans-Semibold",
    textAlign: "center",
    fontWeight: "700",
    marginTop: Sizes.height * 0.04,
  },
  subHeaderText: {
    textAlign: "center",
    marginTop: Sizes.height * 0.01,
    fontSize: Sizes.h6,
    fontFamily: "GeneralSans-Regular",
  },
  remText: {
    fontSize: Sizes.h7,
    fontFamily: "GeneralSans-Regular",
    marginLeft: Sizes.width * 0.02,
  },
  belowText: {
    fontSize: Sizes.h7,
    fontFamily: "GeneralSans-Regular",
    marginTop: Sizes.width * 0.01,
  },
  SignUpText: {
    fontFamily: "GeneralSans-Regular",
    fontSize: Sizes.h6,
    fontWeight: "600",
    marginTop: Sizes.height * 0.035,
  },
  // QueIcon: {
  //   backgroundColor: Colors.primary,
  //   width: 50,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 40,
  //   marginTop: Sizes.height * 0.035,
  //   alignSelf: "flex-end",
  //   elevation:10
  // },
});
