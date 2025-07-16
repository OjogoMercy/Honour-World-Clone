import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import Colors from '@/Src/Constants/Colors'
import Images from '@/Src/Constants/Images'
import Theme, { Sizes } from "../../Constants/Theme"
import AppIntroSlider from 'react-native-app-intro-slider'
import Icons from '@/Src/Constants/Icons'
import { HeaderShownContext } from '@react-navigation/elements'


const slides = [
  {
    key: 1,
    title: 'Buy Cheap and Affordable Mobile Data',
    text: 'Get data of all networks to keep surfing the internet.',
    Mtn: Images.MTN,
    Airtel: Images.airtel,
    Glo: Images.glo,
    dec:"Data", d1:"Airtel", d2:'MTN', d3:"GLO", d4:'9mobile',
    mobile: Images.glo,
    check : Icons.check,
    color:'#F21016',
    mark :Icons.circle,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Pay for Utility Bills Seamlessly',
    text: 'Purchase different subscriptions for different cable/TV providers',
    image: Images.icon,
    Dstv: Images.dstv,

    dec:"Utility bils",
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Swap Airtime to Cash On-The-Go',
    text: 'Recharged excess? Be Calm! You can convert your airtime to cash easily',
    image: Images.icon,
    backgroundColor: '#22bcb5',
  }

];
export default class IntroSlider extends React.Component{

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style = {styles.OutBox}>
       
        <View style ={styles.circle}>
          <View style = {styles.white}></View>
         <View style = {styles.box2}>
          <View style = {styles.box3}>
            <View style = {styles.box4}>
              <Text>{item.dec}</Text>
              <Image
              source={Icons.dropdown}
              style = {{height:15, width:15}}
              />
            </View>
             <View style = {styles.box5}>
       <View style = {{flexDirection:"row"}}>
        <View style = {{backgroundColor:item.color, height:15,width:15,borderRadius:15, justifyContent:"center", alignItems:"center"}}>
           <Image
              source={item.Airtel}
              style = {{height:10, width:10}}
              />
        </View>
                
                <Text style = {{marginLeft:10}}>{item.d1}</Text>
                </View>
              <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
             </View>
       <View style = {styles.box5}>
           <View style = {{flexDirection:"row"}}>
                 <Image
              source={item.Mtn}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{item.d2}</Text>
           </View>
              <Image
              source={Icons.check}
              style = {{height:15, width:15}}
              />
              </View>
       <View style = {styles.box5}>
             <View style = {{flexDirection:"row"}}>
                 <Image
              source={item.Glo}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{item.d3}</Text>
           </View>
              <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
               </View>
      <View style = {styles.box5}>
            <View style = {{flexDirection:"row"}}>
                 <Image
              source={item.Mtn}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{item.d4}</Text>
           </View>
              <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
                </View>
          </View>
         </View>
          </View>
          <View style = {{height:80, width:300, alignSelf:"center"}}>
        <Text style = {{fontSize:Sizes.h1, fontWeight:"bold", textAlign:"center"}}>{item.title}</Text>
        </View>
        <View style = {{height:50, width:220, alignSelf:"center"}}>
          <Text style = {{fontSize:Sizes.h7, textAlign:"center"}}>{item.text}</Text>
        </View>
        
     </View>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render(){
    this.props.navigation.setOptions({
      HeaderShownContext:true
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
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:Colors.primary
  },
  text:{
 fontSize:20,
 fontWeight:"500"
  },
  title:{
    color:"red",
    textAlign:"center"
  },
  circle:{
    backgroundColor:Colors.primary,
    borderRadius:280,
    height:280,
    width:280,
    alignSelf:"center",
    justifyContent:"center"
  },
  OutBox:{
    backgroundColor:"white",
     width:"100%",
     height:"80%", 
     borderTopLeftRadius:30,
     borderTopRightRadius:30,
     justifyContent:"center"
  },
  box2:{
    backgroundColor:"#BEC7D3",
    height:250,
    width:200,
    alignSelf:"center",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40
  },
  box3:{
     backgroundColor:"white",
     marginTop:10,
    height:240,
    width:180,
    alignSelf:"center",
     borderTopLeftRadius:10,
    borderTopRightRadius:10,
    padding:13
  },
  white:{
    height:30,
    width:"100%",
    backgroundColor:"white",
    position:"absolute",
    bottom:0
    },
    box4:{
      height: 40,
      backgroundColor:"#DEEBFF",
      justifyContent:"space-between",
      padding:10,
      flexDirection:"row",
    },
     box5:{
      height: 40,
      backgroundColor:"#F8FCFF",
      justifyContent:"space-between",
      padding:10,
      flexDirection:"row",
      marginVertical:2
    }
})

