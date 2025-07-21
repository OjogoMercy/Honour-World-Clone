import { StyleSheet, Text, View, Image, StatusBar, ImageBackground } from "react-native";
import React from "react";
import Header from "@/Src/Components/Header";
import CustomButton from "@/Src/Components/CustomButton";
import general from "@/Src/Constants/General";
import { Colors, SCREEN_HEIGHT, Sizes } from "@/Src/Constants/Theme";
import Feather from "@expo/vector-icons/Feather";
import { transaction } from "@/Src/Constants/Data";

const AirtimeConfirmation = ({navigation}) => {
  return (
    <View style={general.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Header title="Confirm Airtime" />
      <View
        style={[
          general.row,
          { justifyContent: "flex-start", marginTop: Sizes.profileHeight },
        ]}
      >
        <Feather name="award" size={22} color={Colors.primary} />
        <Text style={general.regularBold}> Transaction Validation</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{transaction.phone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Network:</Text>
          <Text style={styles.value}>{transaction.network}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>{transaction.amount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Vend Type:</Text>
          <Text style={styles.value}>{transaction.vendType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Commission:</Text>
          <Text style={styles.value}>{transaction.commission}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{transaction.date}</Text>
        </View>
      </View>

      <CustomButton
              title="Confirm Transaction"
              onPress={()=> navigation.navigate('MainNavigator', {screen:'EnterPin'})}
      />
      <CustomButton
        title="Go Home"
              onPress={() => navigation.navigate('BottomTab')}
              style={{ backgroundColor: 'white', borderWidth: 1, borderColor:'black', marginTop: 20 }}
              textStyle={{color:'black'}}
           />
    </View>
  );
};

export default AirtimeConfirmation;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.extraLight,
    padding: Sizes.padding,
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: SCREEN_HEIGHT * 0.1,
  },
  title: {
    fontSize: Sizes.body2,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontWeight: "600",
    color: "#555",
  },
  value: {
    color: "#333",
  },
});
