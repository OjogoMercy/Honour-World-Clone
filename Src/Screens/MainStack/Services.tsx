import general from "@/Src/Constants/General";
import { SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from "@/Src/Constants/Theme";
import { services } from "@/Src/Constants/Data";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "@/Src/Components/Header";
import { useNavigation } from "expo-router";

const Services = () => {
    const navigation = useNavigation();
  return (
    <View style={general.container}>
      <Header title={'Services'} customStyle={undefined} />
      <Text style={[general.normalText, { fontSize: Sizes.body4,color:'black' }]}>Enjoy our range of services designed to simplify your life</Text>
      <FlatList
        data={services}
        numColumns={3}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: SCREEN_HEIGHT * 0.07,
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.label}
              style={[
                general.item,
                {
                  marginHorizontal: SCREEN_WIDTH * 0.01,
                  height: SCREEN_HEIGHT * 0.13,
                  width: SCREEN_WIDTH * 0.25,
                },
              ]}
              activeOpacity={0.1}
              onPress={() => {
                navigation.navigate("MainNavigator", { screen: item.Navigate });
              }}
            >
              <View style={[general.iconContainer]}>
                <Image source={item.icon} style={[general.iconBox]} />
              </View>
              <Text style={general.boxText}>{item.label}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
