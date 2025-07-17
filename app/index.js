import { Image, Text, View } from "react-native";
import Images from "../Src/Constants/Images";
import { Sizes,Fontfamilies} from "../Src/Constants/Theme";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
export default function Index() {
  const navigation = useNavigation();

  // Navigate to SignIn screen when the component mounts
  useEffect(()=>{navigation.navigate("SignIn")},[])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily:  Fontfamilies.bold, fontSize: Sizes.h1 }}>
       welcome to Honour World
      </Text>
      <Image source={Images.Gmail} style={{ height: 100, width: 100 }} />
    </View>
  );
}
