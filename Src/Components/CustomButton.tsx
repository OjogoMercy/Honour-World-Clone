import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, SCREEN_WIDTH, Sizes } from "../Constants/Theme";
const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={{ color: "white", fontSize: Sizes.body3 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: SCREEN_WIDTH * 0.85,
    backgroundColor: Colors.primary,
    paddingVertical: SCREEN_WIDTH * 0.035,
    borderRadius: Sizes.bigRadius,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomButton;
