import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from "../../Constants/Theme";
import Images from '@/Src/Constants/Images';
import Icons from '@/Src/Constants/Icons';
import { Colors } from '../../Constants/Theme';
import { useNavigation } from 'expo-router';
import { useState } from 'react';

const AccountSecurity = () => {
    const [isVisible, setIsVisible] = useState({});
    const toggleIcon = (id) =>{
        setIsVisible((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }
    const navigation = useNavigation();
    const data = [
        {
            id:1,
            title:"Reset password ",
            text:"Update your password",
            icon:Icons.reverse
        }, {
            id:2,
            title:"Reset Honour World PIN",
            text:"Update your security PIN",
            icon:Icons.reverse
        }, {
            id:3,
            title:"Biometrics",
            text:"Activate Face ID or Biometrics",
            icon:Images.finger
        }, {
            id:4,
            title:"Auto Login",
            text:"Automatically Login in to your account ",
            icon:Images.arrowC
        }, {
            id:5,
            title:"Wallet balance",
            text:"Hide or show your wallet balance ",
            icon:Icons.eyeClosed
        }
    ]
  return (
    <View style = {styles.page}>
         <View style = {{flexDirection:"row"}}>
             <TouchableOpacity onPress={()=> {
                            navigation.goBack()
                        }}>
            <View style = {{flexDirection:"row"}}>
            <Image
            source={Images.goBack}
            style = {{height:SCREEN_HEIGHT*0.03, width:SCREEN_HEIGHT*0.015, marginRight:10}}/>
            <Text>Back</Text></View>
            </TouchableOpacity>
       <View style = {{alignSelf:"center", marginLeft:SCREEN_HEIGHT * 0.10}}><Text style = {{color:Colors.primary, fontWeight:"bold", textAlign:"center"}}>Account Security</Text></View> 
      </View>
      <View style = {{paddingTop:Sizes.padding*3}}>
        <FlatList
        data={data}
        renderItem={({item}) => {
            const visible = isVisible[item.id] || false;
            const shouldToggle = [3, 4, 5].includes(item.id);
            return(
                <View style = {{marginVertical:SCREEN_HEIGHT* 0.01}}>
                    <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
                        <TouchableOpacity>
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
                    {shouldToggle ? (
                    <TouchableOpacity onPress={() => toggleIcon(item.id)}>
                    <View style = {{height:SCREEN_HEIGHT* 0.05, width:SCREEN_HEIGHT* 0.05}}>
                        <Image
                        source={visible? Icons.toggleoff:Icons.toggle}
                         style = {{height: visible? SCREEN_HEIGHT* 0.05 :SCREEN_HEIGHT * 0.03, width: visible? SCREEN_HEIGHT* 0.06 :SCREEN_HEIGHT* 0.06, alignSelf:"center"}}
                        />
                    </View>
                    </TouchableOpacity>
                    ) : (
                        <View style={{
            height: SCREEN_HEIGHT * 0.05,
            width: SCREEN_HEIGHT * 0.03,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Image
              source={Images.Bluearrow}
              style={{
                height: SCREEN_HEIGHT * 0.04,
                width: SCREEN_HEIGHT * 0.016,
                resizeMode: 'contain'
              }}
            />
          </View>
                    )}
                    </View>
                    </View>
                     )
        }}
        />
      </View>
    </View>
  )
}
export default AccountSecurity

const styles = StyleSheet.create({
     page:{
        flex:1,
        backgroundColor:Colors.White,
          padding:Sizes.padding ,
        paddingTop:Sizes.padding *3
    }
})