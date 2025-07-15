import general from "@/Src/Constants/General";
import Icons from "@/Src/Constants/Icons";
import Images from "@/Src/Constants/Images";
import {
  Colors,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  Sizes,
} from "@/Src/Constants/Theme";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Homescreen = ({ navigation }) => {
  const [show, dontShow] = useState(true);

  const quickActions = [
    { label: "Airtime", icon: Icons.phone2, color: "#FF9800" },
    { label: "Data", icon: Icons.network, color: "#0E86E1" },
    { label: "Cable TV", icon: Icons.tv, color: "#00BCD4" },
    { label: "More", icon: Icons.more, color: "#4CAF50" },
  ];
  const dots = [1, 2, 3];
  const toggle = () => {
    dontShow(!show);
  };
  return (
    <View style={general.container}>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"dark-content"}
      />
      <View style={general.row}>
        <Image source={Images.profile} style={general.profile} />
        <View style={{ marginLeft: -40 }}>
          <Text style={general.bigText}>Hi, Mercy</Text>
          <Text style={general.tinyText}>
            What bill would you like to pay today?
          </Text>
        </View>
        <TouchableOpacity>
          <FontAwesome name="bell" size={20} color={Colors.primary} />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={[Colors.lightBlue, Colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={general.card}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={general.text}>Wallet Balance</Text>
          <Text style={[general.text, { marginLeft: 50 }]}>
            ID: 53868281736
          </Text>
          <Ionicons name="copy-outline" size={15} color="white" />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: Sizes.h1,
                color: "white",
                fontWeight: "bold",
                margin: Sizes.base,
              }}
            >
              {show ? "N5,400.00" : "******"}
            </Text>
          </View>
          <TouchableOpacity onPress={toggle}>
            <Ionicons
              name={show ? "eye" : "eye-off"}
              size={20}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={styles.cover}
            onPress={() => navigation.navigate("MainNavigator", {screen:"FundWallet"})}
          >
            <View style={styles.box}>
              <Image source={Icons.dollar} style={styles.icon} />
            </View>
            <Text style={{ fontSize: Sizes.body5, marginLeft: 5 }}>
              Fund Wallet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cover}
            onPress={() =>
              navigation.navigate("MainNavigator", {
                screen: "TransfarBalance",
              })
            }
          >
            <View style={styles.box}>
              <Image source={Icons.transferUp} style={styles.icon} />
            </View>
            <Text style={{ fontSize: Sizes.body5, marginLeft: 5 }}>
              Transfer Balance
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <Text style={{ marginTop: 20 }}>Quick Actions</Text>
      <View style={[general.row, { padding: Sizes.smallPadding }]}>
        {quickActions.map((action) => (
          <TouchableOpacity key={action.label} style={styles.item}>
            <View style={[styles.iconContainer]}>
              <Image source={action.icon} style={[styles.iconBox]} />
            </View>
            <Text style={styles.boxText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Image source={Images.buyData} style={styles.image} />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        {dots.map((index, _) => (
          <View key={index} style={styles.activity}></View>
        ))}
      </View>
      <Text style={{fontSize:39, fontFamily:'bold'}}>cwehbcjnkweniuygwehgbjncdihuysgvm hcfnbdkjvuhygtrehb\ujfnkjriuyg</Text>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  bell: {
    height: Sizes.body2,
    width: Sizes.body2,
    tintColor: "#007AFF",
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: "red",
    borderRadius: 10,
    top: -18,
    left: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  box: {
    height: Sizes.profileHeight,
    width: Sizes.profileWidth,
    borderRadius: Sizes.radius,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    resizeMode: "contain",
  },
  cover: {
    borderRadius: Sizes.bigRadius,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.veryLight,
    padding: Sizes.smallPadding,
  },
  icon: {
    height: Sizes.tinyIcon,
    width: Sizes.tinyIcon,
  },
  item: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: Sizes.smallPadding,
    elevation: 2,
    padding: Sizes.smallPadding,
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.2,
    justifyContent: "center",
  },
  iconContainer: {
    backgroundColor: "white",
  },
  iconBox: {
    height: SCREEN_HEIGHT * 0.032,
    width: SCREEN_WIDTH * 0.07,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: Sizes.body5,
    color: "gray",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.2,
    borderRadius: Sizes.radius,
    marginTop: Sizes.padding,
  },
  activity: {
    height: Sizes.body5,
    width: Sizes.body5,
    borderRadius: Sizes.bigRadius,
    borderWidth: 1,
    borderColor: "black",
    margin: 2,
  },
});
