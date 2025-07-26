import Header from "@/Src/Components/Header";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import CustomButton from "../../Components/CustomButton";
import { Colors, Sizes } from "../../Constants/Theme";
import { useNavigation } from "expo-router";
const otpVerification = () => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchUserData = async () => {
      const savedUserData = await SecureStore.getItemAsync("userData");
      console.log("Saved userData:", savedUserData);
      if (savedUserData) {
        try {
          const parsedUser = JSON.parse(savedUserData);
          setUserData(parsedUser); // store parsed object
          console.log("Retrieved user:", parsedUser);
        } catch (error) {
          console.error("Failed to parse userData:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.Page}>
      <Header
        customStyle={{ top: Sizes.height * 0.1, left: Sizes.height * 0.02 }}
      />
      <View style={styles.TextBox}>
        <Text style={styles.HeaderText}>Verify Account!</Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: Sizes.height * 0.02,
            lineHeight: 20,
            fontSize: Sizes.h6,
            fontFamily: "Regular",
          }}
        >
          Enter 4-digit Code sent to {"\n"}{" "}
          <Text
            style={{
              letterSpacing: 0,
              color: Colors.primary,
              textDecorationLine: "underline",
              fontFamily: "Bold",
            }}
          >
            {userData?.email}
          </Text>
        </Text>
      </View>
      <OtpInput
        numberOfDigits={4}
        focusColor="green"
        autoFocus={false}
        hideStick={true}
        placeholder="******"
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onFocus={() => console.log("Focused")}
        onBlur={() => console.log("Blurred")}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        textProps={{
          accessibilityRole: "text",
          accessibilityLabel: "OTP digit",
          allowFontScaling: false,
        }}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          placeholderTextStyle: styles.placeholderText,
          filledPinCodeContainerStyle: styles.filledPinCodeContainer,
          disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
        }}
      />
      <View style={{ alignItems: "center", marginTop: Sizes.height * 0.09 }}>
        <Text
          style={{
            letterSpacing: 0,
            color: Colors.black,
            fontSize: Sizes.h6,
            fontFamily: "Regular",
          }}
        >
          Didn’t received the code?
        </Text>
        <Text
          style={{
            letterSpacing: 0,
            color: Colors.primary,
            fontSize: Sizes.h6,
            fontFamily: "Bold",
            textDecorationLine: "underline",
            marginTop: Sizes.height * 0.03,
          }}
        >
          Resend Code
        </Text>
      </View>
      <CustomButton
        title={"Proceed "}
        onPress={() => navigation.navigate("AccountCreatedScreen")}
        textStyle={{ fontSize: Sizes.h6, fontFamily: "Bold" }}
        style={{
          width: Sizes.width * 0.9,
          marginTop: Sizes.height * 0.2,
          marginHorizontal: Sizes.width * 0.025,
        }}
      />
      <Text style={styles.remText}>
        By clicking proceed, you agree to our{" "}
        <Text
          style={{
            color: Colors.primary,
            textDecorationLine: "underline",
          }}
        >
          Privacy Policy{" "}
        </Text>
      </Text>
      <Text
        style={{
          fontSize: Sizes.h8,
          fontFamily: "Medium",
          marginLeft: Sizes.width * 0.02,
          marginTop: Sizes.height * 0.005,
          textAlign: "center",
        }}
      >
        {" "}
        and
        <Text
          style={{
            color: Colors.primary,
            textDecorationLine: "underline",
            textAlign: "center",
          }}
        >
          {" "}
          Terms and Conditions
        </Text>
      </Text>
    </View>
  );
};

export default otpVerification;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: Colors.Background,
    paddingHorizontal: Sizes.width * 0.05,
    paddingVertical: Sizes.height * 0.2,
  },
  HeaderText: {
    fontSize: Sizes.h2,
    fontFamily: "Bold",
    marginTop: Sizes.height * 0.1,
  },
  TextBox: {
    alignItems: "center",
    width: Sizes.width * 0.9,
  },
  remText: {
    fontSize: Sizes.h8,
    fontFamily: "Medium",
    marginLeft: Sizes.width * 0.02,
    marginTop: Sizes.height * 0.02,
    textAlign: "center",
  },
  container: {
    marginTop: Sizes.height * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  pinCodeContainer: {
    width: Sizes.width * 0.17,
    height: Sizes.height * 0.075,
    borderRadius: Sizes.radius,
    backgroundColor: Colors.Background,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: Sizes.width * 0.004,
    borderColor: Colors.black,
    marginLeft: Sizes.width * 0.02,
  },
  pinCodeText: {
    fontSize: Sizes.h3,
    color: Colors.black,
    fontFamily: "Regular",
  },
  focusStick: {
    width: Sizes.width * 0.9,
    height: Sizes.height * 0.01,
    backgroundColor: Colors.primary,
    position: "absolute",
    bottom: 0,
  },
  activePinCodeContainer: {
    borderColor: Colors.primary,
    borderWidth: Sizes.width * 0.004,
  },
  placeholderText: {
    color: Colors.black,
    fontSize: Sizes.h3,
    fontFamily: "Regular",
  },
  filledPinCodeContainer: {
    backgroundColor: Colors.LightGray,
  },
  disabledPinCodeContainer: {
    backgroundColor: Colors.LightGray,
    opacity: 0.5,
  },
});
