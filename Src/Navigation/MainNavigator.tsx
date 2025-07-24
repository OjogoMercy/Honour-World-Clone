import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FundWallet from "../Screens/MainStack/FundWallet";
import TransferBalance from "../Screens/MainStack/TransferBalance";
import Transactions from "../Screens/AppStack/Transactions";
import Notification from "../Screens/AppStack/Notification";
import ProfileInfo from "../Screens/AppStack/ProfileInfo";
import Airtime from "../Screens/AppStack/Airtime";
import Data from "../Screens/AppStack/Data";
import CableTv from "../Screens/AppStack/CableTv";
import Services from "../Screens/MainStack/Services";
import Education from "../Screens/MainStack/Education";
import Electricity from "../Screens/AppStack/Electricity";
import CGWallet from "../Screens/AppStack/CGWallet";
import AirtimetoCash from "../Screens/MainStack/AirtimetoCash";
import BizVerification from "../Screens/AppStack/BizVerification";
import AutoBuy from "../Screens/AppStack/AutoBuy";
import AirtimeConfirmation from "../Screens/MainStack/AirtimeConfirmation";
import EnterPin from "../Screens/MainStack/EnterPin";
import TransactionSuccesful from "../Screens/MainStack/TransactionSuccesful";
import FundWalletCardPay from "../Screens/MainStack/FundWalletCardPay";
import FundwalletPaymentOptions from "@/Src/Screens/MainStack/FundwalletPaymentOptions";

const Stack = createNativeStackNavigator();
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
      <Stack.Screen name="AutoBuy" component={AutoBuy} />
      <Stack.Screen name="BizVerification" component={BizVerification} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Electricity" component={Electricity} />
      <Stack.Screen name="CGWallet" component={CGWallet} />
      <Stack.Screen name="AirtimetoCash" component={AirtimetoCash} />
      <Stack.Screen
        name="AirtimeConfirmation"
        component={AirtimeConfirmation}
      />
      <Stack.Screen name="EnterPin" component={EnterPin} />
      <Stack.Screen
        name="TransactionSuccesful"
        component={TransactionSuccesful}
      />
      <Stack.Screen
        name="FundwalletPaymentOptions"
        component={FundwalletPaymentOptions}
      />
      <Stack.Screen name="FundWalletCardPay" component={FundWalletCardPay} />
    </Stack.Navigator>
  );
}
