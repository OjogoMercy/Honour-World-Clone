import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, Sizes } from "../Constants/Theme";
const FormInputs = ({
  image,
  image1,
  image2,
  placeHolder,
  keyboard,
  value,
  onChangeText,
  password,
  error,
  onFocus = () => {},
}) => {
  const [showPassword, setPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const isPasswordField = keyboard === "visible-password";
  return (
    <View>
      <View
        style={[
          styles.formInput,
          {
            borderColor: error
              ? Colors.red
              : isFocus
              ? Colors.secondary
              : Colors.primary,
          },
        ]}
      >
        <Image
          source={image}
          style={{ height: Sizes.height * 0.03, width: Sizes.height * 0.03 }}
        />
        <TextInput
          placeholder={placeHolder}
          style={{
            width: Sizes.width * 0.67, // Adjusted to fit the layout
            height: Sizes.height * 0.065,
            fontFamily: "GeneralSans-Regular",
            paddingHorizontal: 10,
            fontSize: Sizes.h6,
          }}
          placeholderTextColor="#999"
          keyboardType={isPasswordField ? "default" : keyboard || "default"}
          // Adjusted to match the keyboard type
          secureTextEntry={isPasswordField && !showPassword} // Show password input if keyboard type is password
          autoFocus={false}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          textContentType="none"
          onFocus={() => {
            onFocus();
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          value={value}
          onChangeText={(item) => onChangeText(item)}

          // onChangeText={onChangeText}
          // value={value}
        />

        {isPasswordField && (
          <TouchableOpacity onPress={() => setPassword(!showPassword)}>
            <Image
              source={showPassword ? image2 : image1}
              style={{
                height: showPassword ? 30 : 25,
                width: showPassword ? 30 : 25,
                tintColor: Colors.primary, // Adjusted to match the theme
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text
          style={{
            color: Colors.red,
            fontSize: Sizes.h7,
            marginTop: 3,
            fontFamily: "GeneralSans-Semibold",
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default FormInputs;

const styles = StyleSheet.create({
  formInput: {
    width: Sizes.width * 0.9,
    height: Sizes.height * 0.065,
    borderWidth: Sizes.width * 0.0035, // Adjusted for better visibility
    borderColor: "#000",
    marginBottom: Sizes.height * 0.02,
    marginTop: 5,
    borderRadius: Sizes.body2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Sizes.width * 0.02, // Adjusted for better spacing
  },
});
