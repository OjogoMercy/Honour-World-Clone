import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Constants/Colors';

const Header = () => {
  return (
    <View style={styles.page}>
      <View style={styles.all}>
      <View style={styles.back}>
    <Ionicons name="chevron-back-sharp" size={24} color="black" />
      <Text style={{color:Colors.secondary}}>Back</Text>
      </View>

    <View>
      <Text style={{color:Colors.primary, fontSize:}}>Airtime</Text>
      </View>
    </View>



    </View>
  )
  
}

export default Header

const styles = StyleSheet.create({
  page:{
    flex:1,

  },
  all:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
  },
  back:{
    flexDirection:'row',
    alignItems:'center',
    
    

    
  }

})