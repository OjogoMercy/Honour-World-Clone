import CustomButton from "@/Src/Components/CustomButton";
import general from '../../Constants/General'
import Icons from "@/Src/Constants/Icons";
import Images from "@/Src/Constants/Images";
import {
  Colors,
  Sizes
} from "@/Src/Constants/Theme";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const Homescreen = ({ navigation }) => {
  const name="Mercy"
  const [show, dontShow] = useState(true);
  const quickActions = [
    { label: "Airtime", icon: Icons.phone2, color: "#FF9800",Navigate:'Airtime' },
    { label: "Data", icon: Icons.network, color: "#0E86E1" ,Navigate:'Data'},
    { label: "Cable TV", icon: Icons.tv, color: "#00BCD4",Navigate:'CableTv' },
    { label: "More", icon: Icons.more, color: "#4CAF50",Navigate:'Services' },
  ];
  const dots = [1, 2, 3];
  const toggle = () => {
    dontShow(!show);
  };
  return (
    <View style={general.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={false}
        hidden={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={general.row}>
        <TouchableOpacity activeOpacity={0.3} onPress={()=> navigation.navigate('MainNavigator', {screen:'ProfileInfo'})}>
  <Image source={Images.profile} style={general.profile} />
        </TouchableOpacity>
        <View>
          <Text style={general.bigText}>Hi, {name}</Text>
          <Text style={general.tinyText}>
            What bill would you like to pay today?
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.navigate("MainNavigator", {screen:"Notification"})}>
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
                fontFamily:'Bold',
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
            style={general.cover}
            onPress={() => navigation.navigate("MainNavigator", {screen:"FundWallet"})}
          >
            <View style={styles.box}>
              <Image source={Icons.dollar} style={general.icon} />
            </View>
            <Text style={{ fontSize: Sizes.body5, marginLeft: 5 }}>
              Fund Wallet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={general.cover}
            onPress={() =>
              navigation.navigate("MainNavigator", {
                screen: "TransfarBalance",
              })
            }
          >
            <View style={styles.box}>
              <Image source={Icons.transferUp} style={general.icon} />
            </View>
            <Text style={{ fontSize: Sizes.body5, marginLeft: 5 }}>
              Transfer Balance
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ marginTop: 20 }}>Quick Actions</Text>
      <View style={[general.row, { padding: Sizes.smallPadding }]}>
        {quickActions.map((action,index) => (
          <TouchableOpacity key={action.label} style={general.item} activeOpacity={0.1}  onPress={() => {
      if (index === 3) {
        navigation.navigate('Services'); // Screen outside MainNavigator
      } else {
        navigation.navigate('MainNavigator', { screen: action.Navigate }); // Screen inside MainNavigator
      }
    }}>
            <View style={[general.iconContainer]}>
              <Image source={action.icon} style={[general.iconBox]} />
            </View>
            <Text style={general.boxText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Image source={Images.buyData} style={general.image} />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        {dots.map((index, _) => (
          <View key={index} style={general.activity}></View>
        ))}
      </View>
      <View style={general.row}>
        <Text style={{fontFamily:'Medium'}}>Recents</Text>
        <Text style={{textDecorationLine:'underline',fontFamily:'Regular'}} onPress={() => navigation.navigate("MainNavigator", {screen:"Transactions"})} >See All ></Text>
        </View>
        <Image source={Images.wallet} style={ general.wallet} />
        <Text style={{ fontFamily: 'Medium', fontSize: Sizes.h2, fontWeight: 'bold', alignSelf: 'center' }}>No Transaction</Text>
<Text style={general.normalText}>Your recent transactions will appear 
here when they are available</Text>
<CustomButton title={'Start a Transaction'} onPress={()=> navigation.navigate('MainNavigator', {screen:'Transactions'})}/>
    </ScrollView>
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
 
});
