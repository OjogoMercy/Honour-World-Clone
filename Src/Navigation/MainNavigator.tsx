import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FundWallet from '../Screens/MainStack/FundWallet'
import TransferBalance from '../Screens/MainStack/TransferBalance'
import Transactions from '../Screens/AppStack/Transactions'
import Notification from '../Screens/AppStack/Notification'
import ProfileInfo from '../Screens/AppStack/ProfileInfo'
import Airtime from '../Screens/AppStack/Airtime'
import Data from '../Screens/AppStack/Data'
import CableTv from '../Screens/AppStack/CableTv'
import Services from '../Screens/MainStack/Services'

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