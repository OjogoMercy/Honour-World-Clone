import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from "../Constants/Theme";
const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: SCREEN_WIDTH * 0.85,
    backgroundColor: Colors.primary,
    paddingVertical: SCREEN_WIDTH * 0.035,
    borderRadius: Sizes.body1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SCREEN_HEIGHT*0.01
  },
  text: {
    color: "white",
    fontSize: Sizes.body3,
  },
});

export default CustomButton;
