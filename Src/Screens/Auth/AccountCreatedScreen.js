import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import Images from "../../Constants/Images";
import { Colors, Sizes } from "../../Constants/Theme";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
const AccountCreatedScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.PageContainer}>
      <StatusBar style="dark"/>
      <Image
        source={Images.thumbsUp}
        style={{
          width: Sizes.width * 0.4,
          height: Sizes.width * 0.4,
          alignSelf: "center",
          marginTop: Sizes.height * 0.12,
        }}
      />
      <Text
        style={{
          fontSize: Sizes.h2,
          fontFamily: "Bold",
          textAlign: "center",
          marginTop: Sizes.height * 0.08,
        }}
      >
        Account Created
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
        Your account has been created{"\n"} successfully.
      </Text>
      <Text
        style={{
          fontSize: Sizes.h6,
          fontFamily: "Regular",
          marginLeft: Sizes.width * 0.02,
          marginTop: Sizes.height * 0.03,
          textAlign: "center",
        }}
      >
        Press continue to start using app.
      </Text>
      <CustomButton
        title={"Continue"}
        onPress={() => navigation.navigate("TouchId")}
        textStyle={{ fontSize: Sizes.h6, fontFamily: "Bold" }}
        style={{
          width: Sizes.width * 0.9,
          marginTop: Sizes.height * 0.17,
          marginHorizontal: Sizes.width * 0.025,
        }}
      />
    </View>
  );
};

export default AccountCreatedScreen;

const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    backgroundColor: Colors.Background,
    paddingHorizontal: Sizes.width * 0.05,
    paddingVertical: Sizes.height * 0.1,
  },
});
