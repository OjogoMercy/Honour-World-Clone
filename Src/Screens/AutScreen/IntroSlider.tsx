import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import Colors from '@/Src/Constants/Colors'
import Images from '@/Src/Constants/Images'
import AppIntroSlider from 'react-native-app-intro-slider'
import { HeaderShownContext } from '@react-navigation/elements'


const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: Images.icon,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: Images.icon,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: Images.icon,
    backgroundColor: '#22bcb5',
  }
];
export default class IntroSlider extends React.Component{

  _renderItem = ({ item }) => {
    return (
      <View style = {styles.page}>
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View></View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render(){
    this.props.navigation.setOptions({
      HeaderShownContext:false
    })

      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center"
  },
  slide:{
    flex:1,
    height:"50%",
    width:"200",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:Colors.White
  },
  text:{
 fontSize:20,
 fontWeight:"500"
  },
  title:{
    color:"red",
    textAlign:"center"
  },
  page:{
    flex:1,
    backgroundColor:Colors.primary
  }
})

