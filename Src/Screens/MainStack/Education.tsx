import Header from "@/Src/Components/Header";
import general from "@/Src/Constants/General";
import Images from "@/Src/Constants/Images";
import { Colors, SCREEN_WIDTH, Sizes } from "@/Src/Constants/Theme";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const Education = () => {
  const navigation = useNavigation();
  const data = [
    { id: 1, name: "WAEC", Image: Images.waec },
    { id: 2, name: "NECO", Image: Images.neco },
    { id: 3, name: "JAMB", Image: Images.jamb },
  ];
  return (
    <View style={general.container}>
      <Header label={undefined} title={"Education"} customStyle={undefined} />
      <Text style={general.normalText}>Select an Education Body</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contain}>
            <View style={{flexDirection:'row'}}>
              <Image
                source={item.Image}
                style={{ width: Sizes.h1, height: Sizes.h1, marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("EducationDetails", { item })}
              activeOpacity={0.5}
            >
              <EvilIcons name="arrow-right" size={24} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Education;

const styles = StyleSheet.create({
  contain: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.veryLight,
    marginVertical: 5,
    borderRadius: SCREEN_WIDTH * 0.05,
    backgroundColor: Colors.extraLight,
    justifyContent:'space-between'
  },
});
