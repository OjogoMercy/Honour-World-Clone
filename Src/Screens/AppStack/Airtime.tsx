import Header from "@/Src/Components/Header";
import general from "@/Src/Constants/General";
import Images from "@/Src/Constants/Images";
import { SCREEN_HEIGHT, SCREEN_WIDTH ,Sizes,Colors} from "@/Src/Constants/Theme";
import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FormInput from "@/Src/Components/FormInputs";
import CustomButton from "@/Src/Components/CustomButton";
import Beneficiary from "@/Src/Components/Beneficiary";
import { useNavigation } from "expo-router";

const Airtime = () => {
  const navigation = useNavigation()

   const airtime = [
     { id: 1, label: "MTN", source: Images.MTN },
     { id: 2, label: "Airtel", source: Images.airtel },
     { id: 3, label: "9Mobile", source: Images.nineMobile },
     { id: 4, label: "Glo", source: Images.glo },
   ];
   const nairaValues = [
     "₦50.00",
     "₦100.00",
     "₦200.00",
     "₦500.00",
     "₦1000.00",
     "₦2000.00",
  ];
  const [phoneNumber,setPhoneNumber] = useState('')
  const [amount, setAmount] = useState("");
  return (
    <ScrollView style={general.container}>
      <Header title={"Airtime"} customStyle={undefined} />
      <Text style={general.regularBold}>Services</Text>
      <View
        style={{ flexDirection: "row", paddingHorizontal: Sizes.smallPadding }}
      >
        {airtime.map((action) => (
          <TouchableOpacity
            activeOpacity={0.3}
            style={general.airtimeContainer}
          >
            <Image
              source={action.source}
              style={
                action.id === 2
                  ? {
                      width: "75%",
                      height: "75%",
                      backgroundColor: "red",
                      borderRadius: Sizes.profileBorder,
                    }
                  : { width: "75%", height: "75%" }
              }
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={general.regularBold}>Phone Number</Text>
      <FormInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        onPress={undefined}
        iconSource={Images.contact}
        placeHolder={"Enter Phone Number"}
      />
      <View style={[general.row, { justifyContent: "space-between" }]}>
        <MaterialIcons name="error-outline" color={"red"} size={20} />
        <Text style={general.tinyText}>
          HonourWorld cannot be held responsible for numbers entered
          incorrectly. Please double check the phone number you’ve entered
          before Airtime Top-up.
        </Text>
      </View>
      <View style={general.row}>
        <Text style={general.regularBold}>Enter Recharge Amount</Text>
        <Text style={[general.tinyText, { marginTop: SCREEN_HEIGHT * 0.013 }]}>
          Balance: N2500.00
        </Text>
      </View>
      <View style={styles.container}>
        {nairaValues.map((value, index) => (
          <TouchableOpacity key={index} style={styles.box} activeOpacity={0.3}>
            <Text style={styles.text}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FormInput
        placeHolder={"Enter Recharge Amount"}
        value={amount}
        onChangeText={setAmount} onPress={undefined} iconSource={undefined}      />
      <Beneficiary/>
      <CustomButton
        title={"Make Transaction"}
        onPress={() => navigation.navigate("MainNavigator", {screen: "AirtimeConfirmation"})}
        style={undefined} textStyle={undefined}      />
    </ScrollView>
  );
};

export default Airtime;

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.extraLight,
    borderRadius: Sizes.radius,
    padding: SCREEN_HEIGHT * 0.02,marginBottom:SCREEN_HEIGHT*0.01,flexDirection:'row',justifyContent:'space-between'
    
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: Sizes.padding,
  },
  box: {
    width: "30%",
    marginVertical: SCREEN_HEIGHT*0.01,
    backgroundColor:Colors.extraLight,
    justifyContent: "center",
    alignItems: "center",
    padding: SCREEN_HEIGHT * 0.015,
    borderWidth: 1,
    borderColor:Colors.veryLight
  },
  text: {
    fontSize: Sizes.body4,
    fontFamily:'Medium'
  },
});
