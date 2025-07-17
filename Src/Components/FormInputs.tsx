import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // or use react-native-vector-icons
 

const PhoneNumberInput = ({ value, onChangeText, onIconPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onIconPress}>
        <MaterialIcons name="person" size={20} color="#4285F4" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:300,
    height:50,
    backgroundColor: '#f5faff',
    // borderBottomWidth: 2,
    // borderBottomColor: 'green',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    

    
  },
});

export default PhoneNumberInput;