import Images from '@/Src/Constants/Images'
import { Colors, Sizes } from '@/Src/Constants/Theme'
import general from '../../Constants/General'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from "@/Src/Constants/Icons";

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
    icon: Icons.headset,
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
 <View style={[general.container, {padding: Sizes.padding}]}>
       <Text style = {[general.bigText, {textAlign:"center", marginTop:50, color: "#3D6EF7", marginBottom: 5}]}>Profile</Text>
      <Text style={[general.hint,{textAlign:"center", marginBottom: 10,} ]}>Your profile is your personal gateway to managing your{'\n'}account information</Text>
   
     <View style={{alignSelf:"center"}}>
      <Image
      source={Images.profile}
      style = {[general.profile, {margintop: 34}]}
      />

      <TouchableOpacity>
        <View style = {{height:15,width:15, borderRadius:50, backgroundColor:"blue", alignItems:"center", justifyContent:"center", position:"absolute",bottom: 25, left:50}}>
          <Image
       source={Icons.camera}
       style={[general.icon,{height:10, width:10}]}
         />
         </View>
        </TouchableOpacity>
      </View>
      <View style = {{alignItems:"center", margintop: Sizes.base}}>
        <Text style={general.root1}>Idowu Emmanuel</Text>
            <Text style={general.root2}>idowuemmanuel50@gmail.com</Text>
      </View>
     
     <FlatList
     data={DataItems}
     renderItem={({item}) => {
      return(
          <View style = {{flexDirection:"row", marginTop: Sizes.base, justifyContent:"space-between" }}>
            <View style = {{flexDirection:"row",alignItems:"center"}}>
            <View style = {{height:30, width:30, borderRadius: 15,  backgroundColor: '#BBDEFB', justifyContent:"center", alignSelf:"center"}}>
            <Image
            source={item.icon}
            style={general.icon}
            /></View>

            <View style={{padding:Sizes.base,}}>
            <Text>{item.title}</Text>
            <Text>{item.subtitle}</Text>
            </View>
            </View>
            <Image
            source={Icons.chevron}
            style={{height:20, width:20}}
            />
          </View>
      )
     }}
     />
     <View style = {{marginBottom:70}}>
      <View style = {{height: "39", backgroundColor:'#3D6EF7', width:200, alignSelf:"center", justifyContent:"center", borderRadius:30,}}>
       <TouchableOpacity>
  <Text style={{textAlign: "center", fontSize:12, color: "white"}}>Upgrade to Reseller</Text>
</TouchableOpacity>
</View>
<Text style={ {textAlign:"center"}}>App Version 2.1</Text>
</View>
    </View>
  )
}

export default ProfileScreen

