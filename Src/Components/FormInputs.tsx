import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from '../Constants/Theme';

 

const FormInput = ({ value, onChangeText, onPress ,iconSource,placeHolder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onPress}>
        <Image source={iconSource} style={ styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:SCREEN_WIDTH*0.9,
    height:SCREEN_HEIGHT* 0.06,
    backgroundColor: '#f5faff',
    paddingHorizontal:SCREEN_WIDTH*0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Sizes.radius,
    marginVertical:Sizes.base
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',  
  },
  icon: {
    height:Sizes.body1,
    width:Sizes.body1
  },
});

export default FormInput;