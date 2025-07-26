import React from "react";
import { Image, StyleSheet, View ,Text} from "react-native";
import Images from "../../Constants/Images";
import { Colors, Sizes } from "../../Constants/Theme";
const AccountCreatedScreen = () => {
  return (
    <View style={styles.PageContainer}>
      <Image
        source={Images.thumbsUp}
        style={{
          width: Sizes.width * 0.5,
          height: Sizes.width * 0.5,
          alignSelf: "center",
          marginTop: Sizes.height * 0.1,
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
          fontSize: Sizes.h8,
          fontFamily: "Medium",
          marginLeft: Sizes.width * 0.02,
          marginTop: Sizes.height * 0.02,
          textAlign: "center",
        }}
        >
        Your account has been successfully created. You can now log in and start using the app.
        </Text>
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
