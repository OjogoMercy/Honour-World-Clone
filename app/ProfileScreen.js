import general from '@/Src/Constants/general'
import Icons from '@/Src/Constants/Icons'
import Images from '@/Src/Constants/Images'
import { Sizes } from '@/Src/Constants/Theme'
import React from 'react'
import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native'



const DataItems = [
  {
    id: '1',
    icon: Images.contact,
    title: 'Personal Information',
    subtitle: 'Edit your information',
    chevron: Icons.chevron,
  },
  {
    id: '2',
    icon: Icons.setting,
    title: 'Settings',
    subtitle: 'Account, notification, location tracking',
    chevron: Icons.chevron,
  },
  {
    id: '3',
    icon: Icons.phone,
    title: 'My Commission',
    subtitle: 'Referrals, commission',
    chevron: Icons.chevron,
  },
  {
    id: '4',
    icon: Icons.eye,
    title: 'Dark Mode',
    subtitle: 'Switch app display mode to your preference',
    isToggle: true,
  },
  {
    id: '5',
    icon: Icons.Headset,
    title: 'Help & Support',
    subtitle: 'Help or contact Honour World',
    chevron: Icons.chevron,
  },
  {
    id: '6',
    icon: Icons.tick,
    title: 'Legal',
    subtitle: 'Edit your information',
    chevron: Icons.chevron,
  },
  {
    id: '7',
    icon: Icons.twitter,
    title: 'API Documentation Link',
    subtitle: '',
    chevron: Icons.chevron,
  },
  {
    id: '8',
    icon: Icons.reverse,
    title: 'Sign Out',
    subtitle: 'Sign out of your account',
    chevron: Icons.chevron,
  },
];



const ProfileScreen = () => {
  return (
 <View style={general.page}>
      <Text style={general.root}>Profile</Text>
      <Text style={general.hint}>Your profile is your personal gateway to managing your{'\n'}account information</Text>
      <View style={general.imageWrapper}>
      <Image
      source={Images.boy}
      style = {general.profileimage}
      />

      <TouchableOpacity>
          <Image
       source={Icons.camera}
       style={general.cameraicon}
         />
        </TouchableOpacity>
      </View>

      <Text style={general.root1}>Idowu Emmanuel</Text>
      <Text style={general.root2}>idowuemmanuel50@gmail.com</Text>

     <FlatList
     data={DataItems}
     renderItem={({item}) => {
      return(
        <View>
          <View style = {{flexDirection:"row", alignItems: "center", marginTop: Sizes.base, }}>
            <View style = {{height:30, width:30, borderRadius: 15,  backgroundColor: '#BBDEFB', justifyContent:"center", alignSelf:"center"}}>
            <Image
            source={item.icon}
            style={general.icon}
            /></View>

            <View style={{padding:Sizes.base,}}>
            <Text>{item.title}</Text>
            <Text>{item.subtitle}</Text>
            </View>

            <Image
            source={Icons.right}
            style={general.right}
            />
          </View>
        </View>
      )
     }}
     />
       <TouchableOpacity style={general.upgradeButton}>
  <Text style={general.upgradeButtonText}>Upgrade to Reseller</Text>
</TouchableOpacity>

<Text>App Version 2.1</Text>
    </View>
  )
}

export default ProfileScreen

