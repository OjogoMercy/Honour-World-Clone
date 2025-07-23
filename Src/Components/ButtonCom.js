import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Sizes } from "../Constants/Theme";
const ButtonCom = ({ text, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.button}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: "GeneralSans-Semibold",
            height: 25,
            fontSize: Sizes.h5,
            fontWeight: "800",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCom;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Sizes.height * 0.02,
    borderRadius: Sizes.buttonRadius,
    marginTop: Sizes.height * 0.04,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
