import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, Sizes } from "../Constants/Theme";
const FormInputs = ({ image, image1, image2, placeHolder, keyboard }) => {
  const [value, setValue] = useState("");
  const [close, setClose] = useState(false);
  return (
    <View style={styles.formInput}>
      <Image source={image} style={{ height: 30, width: 30 }} />
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
        keyboardType={keyboard || "default"} // Adjusted to match the keyboard type
        secureTextEntry={keyboard === "password" && !close} // Show password input if keyboard type is password
        autoFocus={false}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        textContentType="none"

        // onChangeText={onChangeText}
        // value={value}
      />
      {/* 
      {!close && (
        <TouchableOpacity onPress={() => setClose(!close)}>
          <Image source={image1} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
      )}
      {close &&
      <TouchableOpacity onPress={()=>setClose(!close)}> <Image source={image2} style={{ height: 30, width: 30 }} /></TouchableOpacity>} */}
      {keyboard === "password" && (
        <TouchableOpacity onPress={() => setClose(!close)}>
          <Image
            source={close ? image2 : image1}
            style={{
              height: close ? 30 : 25,
              width: close ? 30 : 25,
              tintColor: Colors.primary, // Adjusted to match the theme
            }}
          />
        </TouchableOpacity>
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
    borderRadius: Sizes.FormInputsRadius,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Sizes.width * 0.02, // Adjusted for better spacing
  },
});
