import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import Colors from '../Constants/Colors';
import Theme, { Sizes } from '../Constants/Theme';
const PrimaryButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.8}>
      <Text style={{color:Colors.secondary,fontSize:Sizes.body3}}>{title}Make Payment</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:400,
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
  },
 
});

export default PrimaryButton;