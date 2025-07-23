import CustomButton from "@/Src/Components/CustomButton";
import FormInput from "@/Src/Components/FormInputs";
import Header from "@/Src/Components/Header";
import general from "@/Src/Constants/General";
import Icons from "@/Src/Constants/Icons";
import { SCREEN_HEIGHT, Sizes } from "@/Src/Constants/Theme";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const BizVerification = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={general.container}>
      <Header title={"BizVerification"} customStyle={undefined} />
      <Text style={[general.normalText, { fontSize: Sizes.body1 }]}>
        Do Your Due Dilligence
      </Text>
      <Text style={[general.normalText,{margin:SCREEN_HEIGHT*0.05}]}>
        Check the legitimacy of businesses before dealing with them for just
        #100.00.
      </Text>
      <Text style={general.regularBold}>Business Name</Text>
      <FormInput
        value={name}
        onChangeText={setName}
        onPress={undefined}
        iconSource={Icons.copy}
        placeHolder={'Enter Business Name'}
      />
      <CustomButton
        title={"Verify Business"}
        onPress={undefined}
        style={{margin:SCREEN_HEIGHT*0.03}}
        textStyle={undefined}
      />
      <Text onPress={() => navigation.navigate("Transactions")} style={general.normalText}>
        Check History  {">"}
      </Text>
    </View>
  );
};

export default BizVerification;

const styles = StyleSheet.create({});
