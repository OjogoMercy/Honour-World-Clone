import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useState} from 'react'
import general from '@/Src/Constants/General'
import { SCREEN_HEIGHT, SCREEN_WIDTH, Sizes, Colors } from '@/Src/Constants/Theme'
import OTPInputView from "react-native-otp-input";
import {Entypo,Ionicons } from "@expo/vector-icons";
import CustomButton from '@/Src/Components/CustomButton'
const EnterPin = ({navigation}) => {
      const [pin, setPin] = useState("");
  return (
    <View
      style={[general.container, { paddingVertical: SCREEN_HEIGHT * 0.05 }]}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
        style={general.backButton}
      >
        <Ionicons name="chevron-back" size={20} color="black" />
        <Text style={general.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Enter PIN</Text>
      <Text style={[general.normalText, { fontSize: Sizes.body5 }]}>
        Enter transaction 4-digit PIN-code or use your biometrics to complete
        transaction
      </Text>
      <View style={styles.otpWrapper}>
        <OTPInputView
          style={styles.otpContainer}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.otpInput}
          onCodeChanged={setPin}
        />
      </View>
      <TouchableOpacity style={styles.fingerprint}>
        <Entypo name="fingerprint" size={45} color={"black"} />
      </TouchableOpacity>
      <Text style={[styles.title, { textDecorationLine: "underline" }]}>
        Forgot PIN?
      </Text>
      <CustomButton
        title="Proceed"
        onPress={() =>
          navigation.navigate("MainNavigator", {
            screen: "TransactionSuccesful",
          })
        }
        style={{ marginTop: SCREEN_HEIGHT * 0.05 }}
        textStyle={undefined}
      />
    </View>
  );
}

export default EnterPin

const styles = StyleSheet.create({
  title: {
    fontSize: Sizes.body4,
    fontWeight: "bold",
    textAlign: "center",
        color: Colors.primary,
    marginTop:SCREEN_HEIGHT*0.1
  },
  otpContainer: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.1,
    alignSelf: "center",
    marginBottom: SCREEN_HEIGHT * 0.02,
  },

  otpInput: {
    borderBottomWidth: 2,
    borderColor: 'black',
    fontSize: Sizes.body1,
    color: "#000",
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_HEIGHT * 0.06,
  },
  fingerprint: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SCREEN_HEIGHT * 0.05,
  },
  fingerprintText: {
    marginLeft: SCREEN_WIDTH * 0.03,
    color: Colors.primary,
    fontWeight: "600",
    fontSize: Sizes.body3,
  },
  otpWrapper: {
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
});