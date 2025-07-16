import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import General from '@/Src/Constants/General';
import Icons from '@/Src/Constants/Icons';
import { StyleSheet } from 'react-native';
import Images from '@/Src/Constants/Images';


const paymentOptions = [
  { id: '1', name: 'Honour World Wema Account', icon: Icons.wema, navIcon: Icons.go },
  { id: '2', name: 'Premium Trust Bank Linked Account', icon: Icons.square, navIcon: Icons.go },
  { id: '3', name: 'Wema Linked Account', icon: Icons.wema, navIcon: Icons.go },
  { id: '4', name: 'Sterling Linked Account', icon: Icons.dot, navIcon: Icons.go },
  { id: '5', name: 'Moniepoint Linked Account', icon: Images.moniepoint, navIcon: Icons.go },
  { id: '6', name: 'Credit/Debit Card', icon: Icons.card, navIcon: Icons.go },
];
 
const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={General.option}>
      <View style={General.IconWrapper}>
        <Image source={item.icon} style={[General.FundIcon, { width: 20, height: 20 }]} />
      </View>
      
      <Text style={General.FundName}>{item.name}</Text>
      <Image source={item.navIcon} style={[General.FundIcon, { width: 20, height: 20, marginLeft: 'auto' }]} />
       
    </TouchableOpacity>
  )
};
export default function FundWallet() {
  return (
    <View style={General.container}>
      <View style={General.dollarIcon}>
        <Image source={Icons.dollar} style={{ width: 50, height: 50 }} />
      </View>
      <Text style={General.FundWalletText}>FundWallet</Text>
      <Text style={General.subFundwalletText}>
        Add Money to your wallet using any of these methods.  </Text>
      <FlatList
        data={paymentOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}