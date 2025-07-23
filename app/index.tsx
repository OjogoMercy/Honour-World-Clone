import { Image, Text, View } from "react-native";
import Images from "../Src/Constants/Images";
import { Sizes } from "../Src/Constants/Theme";
import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{  fontSize: Sizes.h1 }}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Image source={Images.Gmail} style={{ height: 100, width: 100 }} />
    </View>
  );
}
