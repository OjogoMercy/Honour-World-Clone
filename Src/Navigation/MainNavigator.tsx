import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Airtime from '../Screens/AppStack/Airtime'
import CableTv from '../Screens/AppStack/CableTv'
import Data from '../Screens/AppStack/Data'
import Notification from '../Screens/AppStack/Notification'
import ProfileInfo from '../Screens/AppStack/ProfileInfo'
import Transactions from '../Screens/AppStack/Transactions'
import FundWallet from '../Screens/MainStack/FundWallet'
import Services from '../Screens/MainStack/Services'
import TransferBalance from '../Screens/MainStack/TransferBalance'

const Stack = createNativeStackNavigator()
export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FundWallet" component={FundWallet} />
      <Stack.Screen name="TransferBalance" component={TransferBalance} />
      <Stack.Screen name="Transactions" component={Transactions} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
          <Stack.Screen name="Airtime" component={Airtime} />
          <Stack.Screen name="Data" component={Data} />
          <Stack.Screen name="CableTv" component={CableTv} />
            <Stack.Screen name="Services" component={Services} />
    </Stack.Navigator>
  );
}