import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FundWallet from '../Screens/MainStack/FundWallet'
import TransferBalance from '../Screens/MainStack/TransferBalance'

const Stack = createNativeStackNavigator()
export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FundWallet" component={FundWallet} />
      <Stack.Screen name="TransferBalance" component={TransferBalance} />
    </Stack.Navigator>
  );
}