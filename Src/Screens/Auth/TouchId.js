import Header from "@/Src/Components/Header";
import Icons from "@/Src/Constants/Icons";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import { Colors, Sizes } from "../../Constants/Theme";
const Touchd = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.PageContainer}>
      <StatusBar style="dark" />
      <Header
        customStyle={{ top: Sizes.height * 0.1, left: Sizes.height * 0.02 }}
      />
      <Image
        source={Icons.fingePrintAccess}
        style={{
          width: Sizes.width * 0.6,
          height: Sizes.width * 0.6,
          alignSelf: "center",
          marginTop: Sizes.height * 0.1,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: Sizes.h2,
            fontFamily: "Bold",
            textAlign: "center",
            marginTop: Sizes.height * 0.06,
          }}
        >
          Use Touch ID to{"\n"}authorise payments
        </Text>
        <Text
          style={{
            fontSize: Sizes.h6,
            fontFamily: "Regular",
            marginLeft: Sizes.width * 0.02,
            marginTop: Sizes.height * 0.02,
            textAlign: "center",
          }}
        >
          Activate touch ID so you don’t need to{"\n"}
          confirm your PIN every time you{"\n"}
          want to login
        </Text>
      </View>
      <View>
        <CustomButton
          title={"Activate Now"}
          onPress={() => navigation.navigate("Sign Up")}
          textStyle={{ fontSize: Sizes.h6, fontFamily: "Bold" }}
          style={{
            width: Sizes.width * 0.9,
            marginTop: Sizes.height * 0.07,
            marginHorizontal: Sizes.width * 0.025,
          }}
        />
        <CustomButton
          title={"Skip This"}
          onPress={() => navigation.navigate("Sign In")}
          textStyle={{
            fontSize: Sizes.h6,
            fontFamily: "Bold",
            color: Colors.black,
          }}
          style={{
            width: Sizes.width * 0.9,
            marginTop: Sizes.height * 0.02,
            marginHorizontal: Sizes.width * 0.025,
            backgroundColor: "",
            borderColor: Colors.black,
            borderWidth: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Touchd;

const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    backgroundColor: Colors.Background,
    paddingHorizontal: Sizes.width * 0.05,
    paddingVertical: Sizes.height * 0.1,
  },
});
