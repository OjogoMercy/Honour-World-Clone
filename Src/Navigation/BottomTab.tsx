import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from '../Screens/MainStack/Homescreen'
import Services from '../Screens/MainStack/Services'
import ProfileScreen from '../Screens/AppStack/ProfileScreen'
import FundWallet from '../Screens/MainStack/FundWallet'
import Icons from '../Constants/Icons'


const Tab = createBottomTabNavigator()

export default function BottomTab() {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
              let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Services') iconName = 'search-outline';
          else if (route.name === 'FundWallet') iconName = 'notifications-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
        }
    })}>
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="FundWallet" component={FundWallet} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}