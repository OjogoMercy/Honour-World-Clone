import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Colors, Sizes } from "@/Src/Constants/Theme";
import general from '@/Src/Constants/General';
import services from '@/Src/Constants/Data';


const Services = ({navigation}) => {
 
  return (
    <View style={general.container}>
      <Text>Services</Text>
      <Text style={[general.normalText, { fontSize: Sizes.body4 }]}>Enjoy our range of services designed to simplify your life </Text>
      <FlatList
        data={services}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.label}
              style={general.item}
              activeOpacity={0.1}
              onPress={() => {
                navigation.navigate("MainNavigator"),
                  { screen: item.Navigate }}}
            >
              <View style={[general.iconContainer]}>
                <Image source={item.icon} style={[general.iconBox]} />
              </View>
              <Text style={general.boxText}>{item.label}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})