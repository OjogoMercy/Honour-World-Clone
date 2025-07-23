import { StyleSheet, Text, View, Image, Modal } from "react-native";
import {Sizes,} from "@/Src/Constants/Theme";
import React from "react";
import CustomButton from "./CustomButton";
import general from "../Constants/General";
import { StatusBar } from "react-native";

const CustomModal = ({ImageSource,BoldText,NormalText,LeftButton,onPressLeft,CloseModalText,state,setStateTrue,setStateFalse}) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={state}
        onRequestClose={setStateTrue}
      >
            <View style={styles.overlay}>
                <StatusBar backgroundColor={'transparent'} translucent barStyle={"dark-content"}/>
          <View style={styles.modalContainer}>
            <Image source={ImageSource} style={general.profile} />
                    <Text style={general.regularBold}>{BoldText}</Text>
            <Text style={general.normalText}>
             {NormalText}
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: Sizes.padding,
              }}
            >
              <CustomButton
                title={LeftButton}
                style={{
                  width: "40%",
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "black",
                }}
                            textStyle={{ color: "black" }}
                            onPress={onPressLeft}
              />
              <CustomButton
                            title={CloseModalText}
                            style={{ width: "40%" }}
                            onPress={setStateFalse} textStyle={undefined}              />
            </View>
          </View>
        </View>
      </Modal>
    );
}
export default CustomModal
const styles = StyleSheet.create({
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
