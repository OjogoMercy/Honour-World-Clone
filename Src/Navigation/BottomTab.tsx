import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from '../Screens/MainStack/Homescreen'
import Services from '../Screens/MainStack/Services'
import ProfileScreen from '../Screens/AppStack/ProfileScreen'
import FundWallet from '../Screens/MainStack/FundWallet'
import Icons from '../Constants/Icons'
import Images from '../Constants/Images'


const Tab = createBottomTabNavigator()

export default function BottomTab() {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({focused }) => {
              let iconName;
          if (route.name === 'Home') iconName = Icons.home;
          else if (route.name === 'Services') iconName = Icons.shop;
          else if (route.name === 'FundWallet') iconName = Icons.walletIcon;
              else if (route.name === 'Profile') iconName = Icons.user;
              return (
                <Image
                  source={iconName}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "#007AFF" : "#8e8e93",
                  }}
                />
              );
          },
          tabBarShowLabel: false,
          headerShown:false
    })}>
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="FundWallet" component={FundWallet} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}