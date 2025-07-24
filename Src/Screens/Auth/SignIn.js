import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../../Components/CustomButton";
import FormInputs from "../../Components/FormInputs";
import Icons from "../../Constants/Icons";
import Images from "../../Constants/Images";
import { Colors, Sizes } from "../../Constants/Theme";
// SignIn component for user authentication
// It includes input fields for phone number and password
// and a checkbox for terms and conditions
const SignIn = () => {
  const handleSignIn = async () => {
    try {
      // Save current input values before attempting login
      await AsyncStorage.setItem("tempPhone", phone);
      await AsyncStorage.setItem("tempPwd", pwd);

      const savedUserData = await SecureStore.getItemAsync("userData");

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

        // // Clear the input values from AsyncStorage
        // await AsyncStorage.removeItem("tempPhone");
        // await AsyncStorage.removeItem("tempPwd");
        // // also clear from UI
        // setPhone("");
        // setPwd("");

        navigation.replace("BottomTab"); // Navigate to the home screen or dashboard
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
    const fillTempData = async () => {
      const storedPhone = await AsyncStorage.getItem("tempPhone");
      // const storedPwd = await AsyncStorage.getItem("tempPwd");
      if (storedPhone) setPhone(storedPhone);
      // if (storedPwd) setPwd(storedPwd);
    };
    fillTempData();
  }, []);
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
            console.log("User data retrieved:", userData);
            // Navigate to Home or Dashboard
            navigation.replace("BottomTab");
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
        navigation.replace("BottomTab");
        console.log("Biometric login success");
      } else {
        alert("No account found. Please sign up first.");
      }
    }
    if (!biometricAuth.success) {
      Alert.alert(
        "Authentication Failed",
        biometricAuth.error || "Fingerprint not recognized."
      );
    }
  };

  const navigation = useNavigation();
  // Navigate to SignIn screen when the component mounts
  const [uncheck, setCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [autoAuthDone, setAutoAuthDone] = useState(false);

  // useEffect(() => {
  //   if (!autoAuthDone) {
  //     checkBiometrics();
  //     setAutoAuthDone(true);
  //   }
  // }, []);

  return (
    <View style={styles.Page}>
      <StatusBar
        style="dark"
        backgroundColor={Colors.secondary}
        translucent={false}
      />

      <Image
        source={Icons.BlueIcon}
        style={{
          alignSelf: "center",
          height: Sizes.height * 0.06,
          width: Sizes.width * 0.2,
          marginTop: Sizes.height * 0.1,
        }}
      />
      <View>
        <Text style={styles.HeaderText}> Welcome Back!</Text>
        <Text style={styles.subHeaderText}>
          Please sign in to continue with {"\n"}your account
        </Text>
        <View style={{ alignItems: "center", marginTop: Sizes.height * 0.04 }}>
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
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setCheck(!uncheck)}>
            <Image
              source={uncheck ? Icons.checkedBox : Icons.checkBox}
              style={{
                height: Sizes.height * 0.025,
                width: Sizes.height * 0.025,
                alignSelf: "flex-start",
              }}
            />
          </TouchableOpacity>
          <Text style={styles.remText}>Remember Password</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("EnterPin")}>
          <Text style={[styles.forgotText, { color: Colors.primary }]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        title={"Sign In "}
        onPress={() => handleSignIn()}
        textStyle={{ fontSize: Sizes.h6, fontFamily: "Bold" }}
        style={{
          width: Sizes.width * 0.9,
          marginTop: Sizes.height * 0.055,
          marginHorizontal: Sizes.width * 0.025,
        }}
      />

      <View style={{ alignItems: "center", marginTop: Sizes.height * 0.05 }}>
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
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginTop: Sizes.height * 0.035,
          }}
        >
          <Text style={styles.SignUpText}>Don't have an account? -{"  "}</Text>
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={{
              color: Colors.primary,
              fontFamily: "Bold",
              textDecorationLine: "underline",
            }}
          >
            Sign Up
          </Text>
        </View>
      </View>

      {/* <FloatingMenu
        image1={Icons.whiteWhatsapp}
        image2={Icons.phone}
        image3={Icons.chatbot}
        PopText1={"WhatsApp"}
        PopText2={" Call"}
        PopText3={"Mail"}
      /> */}
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
    fontSize: Sizes.h2,
    fontFamily: "Bold",
    textAlign: "center",
    marginTop: Sizes.height * 0.04,
  },
  subHeaderText: {
    textAlign: "center",
    marginTop: Sizes.height * 0.02,
    fontSize: Sizes.h6,
    fontFamily: "Regular",
  },
  remText: {
    fontSize: Sizes.h8,
    fontFamily: "Medium",
    marginLeft: Sizes.width * 0.02,
  },
  forgotText: {
    fontSize: Sizes.h8,
    fontFamily: "Medium",
    marginLeft: Sizes.width * 0.02,
    fontWeight: "700",
  },
  belowText: {
    fontSize: Sizes.h8,
    fontFamily: "Medium",
    marginTop: Sizes.width * 0.01,
  },
  SignUpText: {
    fontFamily: "Medium",
    fontSize: Sizes.h7,
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
