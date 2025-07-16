import { View, Text } from 'react-native';
import React from 'react';
 import { useRoute, useNavigation } from '@react-navigation/native';
import General from '@/Src/Constants/General';

export default function FundwalletPaymentOptions() {
  const route = useRoute();
  const { method } = route.params;
  return (
    <View style={General.container}>
      <Text style={General.subFundWalletText}>{method.name}</Text>
    </View>
  )
}