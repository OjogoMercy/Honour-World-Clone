import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors,Sizes,SCREEN_HEIGHT } from '../Constants/Theme';

const Beneficiary = () => {
     const change = () => {
       setToggle(!toggle);
    };
  const [toggle, setToggle] = useState(false);
    
  return (
    <View style={styles.input}>
      <Text>Save as Beneficiary</Text>
      <TouchableOpacity onPress={change}>
        <FontAwesome6
          name={toggle ? "toggle-off" : "toggle-on"}
          size={24}
          color={Colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Beneficiary

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.extraLight,
    borderRadius: Sizes.radius,
    padding: SCREEN_HEIGHT * 0.02,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});