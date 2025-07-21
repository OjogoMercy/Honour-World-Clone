import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import General from '@/Src/Constants/General';
import Icons from '@/Src/Constants/Icons';
import Images from '@/Src/Constants/Images';
import { useNavigation } from '@react-navigation/native';

const paymentOptions = [
  { id: '1', name: 'Honour World Wema Account', icon: Icons.wema, navIcon: Icons.go, banner: Images.wemacard, logo: Images.WemaLogo, body: "New Wema Bank account linked to Honour world Wallet ID. Pay to get instant wallet funding." },
  { id: '2', name: 'Premium Trust Bank Linked Account', icon: Icons.square, navIcon: Icons.go, banner: Images.premcard, logo: Images.PremLogo, body: "New Wema Bank account linked to Honour world Wallet ID. Pay to get instant wallet funding." },
  { id: '3', name: 'Wema Linked Account', icon: Icons.wema, navIcon: Icons.go, banner: Images.wemacard, logo: Images.WemaLogo, body: "New Wema Bank account linked to Honour world Wallet ID. Pay to get instant wallet funding." },
  { id: '4', name: 'Sterling Linked Account', icon: Icons.dot, navIcon: Icons.go, banner: Images.stercard, logo: Images.SterLogo, body: "New Wema Bank account linked to Honour world Wallet ID. Pay to get instant wallet funding." },
  { id: '5', name: 'Moniepoint Linked Account', icon: Images.moniepoint, navIcon: Icons.go, banner: Images.moniecard, logo: Images.MonieLogo, body: "New Wema Bank account linked to Honour world Wallet ID. Pay to get instant wallet funding." },
  { id: '6', name: 'Credit/Debit Card', icon: Icons.card, navIcon: Icons.go },
];

export default function FundWallet() {
  const navigation = useNavigation(); 
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={General.option}
      onPress={() => navigation.navigate('FundwalletPaymentOptions', { method: item })}
    >
      <View style={General.IconWrapper}>
        <Image source={item.icon} style={[General.FundIcon, { width: 20, height: 20 }]} />
      </View>

      <Text style={General.FundName}>{item.name}</Text>
      <Image
        source={item.navIcon}
        style={[General.FundIcon, { width: 20, height: 20, marginLeft: 'auto' }]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={General.container}>
      <View style={General.dollarIcon}>
        <Image source={Icons.dollar} style={{ width: 50, height: 50 }} />
      </View>
      <Text style={General.FundWalletText}>FundWallet</Text>
      <Text style={General.subFundwalletText}>
        Add Money to your wallet using any of these methods.
      </Text>
      <FlatList
        data={paymentOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
