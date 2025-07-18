import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import Theme, { Sizes, Colors } from "../Constants/Theme";
import general from "../Constants/General";

export default function Header({
  title,
  showBack = true,
  customStyle,
}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, customStyle]}>
      {showBack && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
          style={general.backButton}
        >
          <Ionicons name="chevron-back" size={20} color="black" />
          <Text style={general.backText}>Back</Text>
        </TouchableOpacity>
      )}

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {!showBack && <View style={styles.spacer} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
 
  titleWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.primary,
    fontSize: Sizes.body3,
    fontFamily: 'Bold',
    marginRight:5
  },
  spacer: {
    width: "25%",
  },
});
