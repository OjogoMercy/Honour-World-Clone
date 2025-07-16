import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FundWallet from '../Screens/MainStack/FundWallet'
import TransferBalance from '../Screens/MainStack/TransferBalance'
import Transactions from '../Screens/AppStack/Transactions'
import Notification from '../Screens/AppStack/Notification'
import ProfileInfo from '../Screens/AppStack/ProfileInfo'

const Stack = createNativeStackNavigator()
export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FundWallet" component={FundWallet} />
      <Stack.Screen name="TransferBalance" component={TransferBalance} />
      <Stack.Screen name="Transactions" component={Transactions} />
          <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
    </Stack.Navigator>
  );
}