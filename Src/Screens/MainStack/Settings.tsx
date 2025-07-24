import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from "../../Constants/Theme";
import Images from '@/Src/Constants/Images';
import Icons from '@/Src/Constants/Icons';
import Colors from '@/Src/Constants/Colors';
import { useNavigation } from 'expo-router';
import { goBack } from 'expo-router/build/global-state/routing';

const Settings = () => {
    const navigation = useNavigation(); 
    const data = [
        {
            id:1,
            title:"Account Security",
            text:"Reset password, Biometrics, Wallet balance",
            icon:Icons.blueUser
        }, {
            id:2,
            title:"Notification",
            text:"Push, Emaill Notification",
            icon:Icons.bell
        }, {
            id:3,
            title:"Trannsaction PIN",
            text:"Reset password, Biometrics, Wallet balance",
            icon:Icons.transfer
        }, {
            id:4,
            title:"Deactivate/Delete account",
            text:"Reset password, Biometrics, Wallet balance",
            icon:Icons.blueBin
        }
    ]
  return (
    <View style = {styles.page}>
         <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=> {
                navigation.goBack()
            }}>
            <View style = {{flexDirection:"row"}}>
            <Image
            source={Images.goBack}
            style = {{height:SCREEN_HEIGHT*0.03, width:SCREEN_HEIGHT*0.015, marginRight:10}}/>
            <Text>Back</Text></View>
            </TouchableOpacity>
       <View><Text style = {{color:Colors.primary, fontWeight:"bold"}}>Settings</Text></View> 
     <View><Text style = {{color:Colors.Black}}>Share App</Text></View>
      </View>
      <View style = {{paddingTop:Sizes.padding*3}}>
        <FlatList
        data={data}
        renderItem={({item}) => {
            return(
                <View style = {{marginVertical:SCREEN_HEIGHT* 0.01}}>
                    <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
                        <TouchableOpacity onPress={()=> {
                            if(item.title === "Account Security"){
                                navigation.navigate("AccountSecurity")
                            }else if (item.title === "Notification") {
                            navigation.navigate('NotificationScreen');
                            } else if (item.title === "Trannsaction PIN") {
                            navigation.navigate('TransactionPinScreen');
                            } else if (item.title === "Deactivate/Delete account") {
                            navigation.navigate('DeleteAccountScreen');
                            }
                        }}>
                    <View style = {{flexDirection:"row"}}>
                    <View style = {{height:SCREEN_HEIGHT * 0.07, width:SCREEN_HEIGHT * 0.07, backgroundColor:"#EBF3FF", justifyContent:"center", alignItems:"center", borderRadius:Sizes.radius *2}}>
                        <Image
                        source={item.icon}
                        style = {{height:SCREEN_HEIGHT* 0.03, width:SCREEN_HEIGHT* 0.03}}
                        />
                    </View>
                    <View style = {{alignSelf:"center", marginLeft:SCREEN_HEIGHT * 0.015}}>
                        <Text style ={{fontWeight:"500"}}>{item.title}</Text>
                        <Text style = {{fontSize:SCREEN_HEIGHT * 0.014}}>{item.text}</Text>
                    </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View>
                        <Image
                        source={Images.Bluearrow}
                         style = {{height:SCREEN_HEIGHT* 0.03, width:SCREEN_HEIGHT* 0.013, alignSelf:"center"}}
                        />
                    </View>
                    </TouchableOpacity>
                    </View>
                    </View>
                     )
        }}
        />
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:Colors.White,
          padding:Sizes.padding *1.4,
        paddingTop:Sizes.padding *3
    }
})