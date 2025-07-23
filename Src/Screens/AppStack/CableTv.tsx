import Header from "@/Src/Components/Header";
import general from "@/Src/Constants/General";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import FormInput from "@/Src/Components/FormInputs";
import CustomButton from "@/Src/Components/CustomButton";
import { StatusBar } from "react-native";
import Icons from "@/Src/Constants/Icons";
import Beneficiary from "@/Src/Components/Beneficiary";
const CableTv = () => {
  const [number,setNumber] = useState('')
  return (
    <View style={general.container}>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"dark-content"}
      />
      <Header title={"Cable tv"} customStyle={undefined} />
      <Text style={general.regularBold}>Service Provider</Text>
      {/* space for bottom sheet onPress  */}
      <View style={general.row}>
        <Text style={general.regularBold}>Smart Card Number</Text>
        <Text style={general.tinyText}>Beneficiaries ></Text>
      </View>
      <FormInput value={number} onChangeText={setNumber} onPress={undefined} iconSource={Icons.copy} placeHolder={'Enter Smartcard Number'} />
      <Text style={general.regularBold}>Select Package</Text>
      <FormInput value={undefined} onChangeText={undefined} onPress={undefined} iconSource={undefined} placeHolder={'Select Your Package'} />
      <Text style={general.regularBold}>Phone Number</Text>
      <FormInput value={undefined} onChangeText={undefined} onPress={undefined} iconSource={undefined} placeHolder={'Set Phone Number'} />
      <Beneficiary />
      <CustomButton title={'Confirm'} onPress={undefined} style={undefined} textStyle={undefined}/>
      
    </View>
  );
};

export default CableTv;

const styles = StyleSheet.create({});
