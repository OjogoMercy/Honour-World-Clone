import { StyleSheet, Text, View, Image, Modal } from "react-native";
import React, { useState } from "react";
import Header from "@/Src/Components/Header";
import general from "@/Src/Constants/General";
import Icons from "@/Src/Constants/Icons";
import { transaction } from "@/Src/Constants/Data";
import {
  Sizes,
  Colors,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/Src/Constants/Theme";
import CustomButton from "@/Src/Components/CustomButton";
import Images from "@/Src/Constants/Images";
import { StatusBar } from "react-native";
import CustomModal from "@/Src/Components/CustomModal";
import TransactionReceipt from "@/Src/Components/TransactionReciept";

const TransactionSuccesful = () => {
  const formatKey = (key) => {
    // Optional: format keys to look nicer
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };
  const [visible, setVisible] = useState(false);

  return (
    <View style={general.container}>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"dark-content"}
      />
      <Header title={""} />
      <Image
        source={Icons.greenCheck}
        style={[general.profile, { alignSelf: "center" }]}
      />
      <Text style={[general.regularBold, { alignSelf: "center" }]}>
        Transaction Succesful
      </Text>
      <TransactionReceipt transaction={transaction}/>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: Sizes.padding,
        }}
      >
        <CustomButton
          title={"Share Receipt"}
          style={{
            width: "50%",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "black",
          }}
          textStyle={{ color: "black" }}
        />
        <CustomButton
          title={"Done"}
          style={{ width: "40%" }}
          onPress={() => setVisible(true)}
        />
      </View>
      <CustomModal
        ImageSource={Images.emoji}
        BoldText={"That was Easy"}
        NormalText={
          "That was easy! Love our app? Show us some love by leaving a ⭐⭐⭐⭐⭐on Play Store!"
        }
        LeftButton={"Go Home"}
        onPressLeft={undefined}
        CloseModalText={'Rate us'}
        state={visible}
        setStateTrue={() =>  setVisible(true)}
        setStateFalse={()=> setVisible(false)}
      />
    </View>
  );
};

export default TransactionSuccesful;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.extraLight,
    padding: Sizes.padding,
    borderRadius: 10,
    marginVertical: 30,
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
  modalContainer: {
    backgroundColor: "white",
    padding: Sizes.padding,
    borderRadius: Sizes.bigRadius,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
