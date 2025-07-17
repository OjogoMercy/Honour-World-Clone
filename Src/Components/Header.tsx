import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import Colors from '../Constants/Colors'
import Theme, { Sizes } from '../Constants/Theme'

export default function Header({}) {
  const navigation = useNavigation();
  return (
    <View style={{padding:10,flexDirection:'row',marginTop:10,width:'100%'}}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{alignSelf:'flex-end',flexDirection:'row' ,width:'10%',}}>
      <Ionicons name="chevron-back" size={16} color={'black'} style={{paddingTop:2,}} />
      <Text style={{paddingLeft:10}}>Back</Text>
       </TouchableOpacity>
      <View style={{alignItems:'center',width:'90%'}}>
      <Text style={{color:Colors.primary, fontWeight:'bold', fontSize:Sizes.body2 }}>Airtime</Text>
      </View>
    </View>
  )
}



