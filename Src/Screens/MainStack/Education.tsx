import { FlatList, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '@/Src/Components/Header'
import general from '@/Src/Constants/General'
import Images from '@/Src/Constants/Images'
import { Colors } from '@/Src/Constants/Theme'
import { useNavigation } from 'expo-router'

const Education = () => {
  const navigation = useNavigation()
  const data = [
    { id: 1, name: 'WAEC',Image:Images.waec },
    { id: 2, name: 'NECO', Image: Images.neco },
    { id: 3, name: 'JAMB', Image: Images.jamb },
  ]
  return (
    <View style={general.container}>
      <Header label={undefined} title={'Education'} customStyle={undefined} />
      <Text style={general.normalText}>Select an Education Body</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contain} onPress={()=> navigation.navigate()}>
            <Image source={item.Image} style={{ width: 40, height: 40, marginRight: 10 }} />
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  )
}

export default Education

const styles = StyleSheet.create({
  contain: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10, borderWidth: 1,
    borderColor:Colors.primary
  },
});