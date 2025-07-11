import { Text, View, Image } from "react-native";
import Images from "../Src/Constants/Images";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Image source={Images.Gmail} style={{height:100,width:100}}/>
    </View>
  );
}
