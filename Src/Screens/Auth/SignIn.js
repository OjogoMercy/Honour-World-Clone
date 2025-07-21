import { useNavigation } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonCom from "../../Components/ButtonCom";
import FloatingMenu from "../../Components/FloatingButton";
import FormInputs from "../../Components/FormInputs";
import Icons from "../../Constants/Icons";
import Images from "../../Constants/Images";
import { Colors, Sizes } from "../../Constants/Theme";
import CustomButton from "@/Src/Components/CustomButton";
// SignIn component for user authentication
// It includes input fields for phone number and password
// and a checkbox for terms and conditions
const SignIn = () => {
  const navigation = useNavigation();
  // Navigate to SignIn screen when the component mounts
  const [uncheck, setCheck] = useState(false);
  return (
    <View style={styles.Page}>
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
          />
          <FormInputs
            image={Icons.Lock}
            placeHolder={"Password"}
            keyboard={"password"}
            image1={Icons.eyeClosed}
            image2={Icons.eyeOpen}
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
      <CustomButton title={'Sign In'} onPress={()=> navigation.navigate('BottomTab')}/>
      <View style={{ alignItems: "center", marginTop: Sizes.height * 0.02 }}>
        <Text style={[styles.belowText, { fontWeight: "600" }]}>
          Login with fingerPrint
        </Text>
        <TouchableOpacity>
          <Image
            source={Images.fingerPrint}
            style={{
              height: 70,
              width: 70,
              marginTop: Sizes.height * 0.01,
            }}
          />
        </TouchableOpacity>
       
        <Text style={styles.SignUpText}>
          Don't have an account?-{" "}
    
            {" "}
            <Text onPress={()=>navigation.navigate("BottomTab") }
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
