import { StatusBar, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import general from '@/Src/Constants/General'
import Images from '@/Src/Constants/Images'
import Icons from '@/Src/Constants/Icons'
import { Sizes } from '@/Src/Constants/Theme'

const Homescreen = () => {
  return (
      <View style={general.container}>
          <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'} />
          <View style={general.row}>
              <Image source={Images.profile} style={general.profile} />
              <View>
                  <Text style={general.bigText}>Hi, Mercy</Text>
                  <Text style={general.tinyText}>What bill would you like to pay today?</Text>
              </View>
              <Image source={Icons.bell} style={styles.bell} />
          </View>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    bell: {
        height: Sizes.body2,
        width:Sizes.body2
    },
})