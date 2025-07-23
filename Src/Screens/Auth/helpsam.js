import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Images from '@/Src/Constants/Images'
import { Sizes, SCREEN_WIDTH, SCREEN_HEIGHT } from "../../Constants/Theme";

const helpsam = () => {
       const [selectedTab, setSelectedTab] = useState("All")
 
    const list1 = [
        {
            id:1,
            title:"Airtime/8076749945",
            time:"April 2, 06:56",
            amount:"N10.00",
            status:"Successful",
            icon:Images.MTN
        },{
            id:2,
            title:"Data/8076749945",
            time:"April 2, 06:56",
            amount:"N15.00",
            status:"Successful",
            icon:Images.glo
        },{
            id:3,
            title:"Referral Bonus",
            time:"April 2, 06:56",
            amount:"N1000.00",
            status:"Successful",
            icon:Images.nineMobile
        },{
            id:4,
            title:"Data/8076749945",
            time:"April 2, 06:56",
            amount:"N300.00",
            status:"Successful",
             icon:Images.glo
        },
    ]
    const list2 = [
       {
            id:3,
            title:"Referral Bonus",
            time:"April 2, 06:56",
            amount:"N1000.00",
            status:"Successful",
            icon:Images.nineMobile
        },{
            id:4,
            title:"Data/8076749945",
            time:"April 2, 06:56",
            amount:"N300.00",
            status:"Successful",
             icon:Images.glo
        },
    ]
     const list3 = [
       {
            id:1,
            title:"Airtime/8076749945",
            time:"April 2, 06:56",
            amount:"N10.00",
            status:"Successful",
            icon:Images.MTN
        },{
            id:2,
            title:"Data/8076749945",
            time:"April 2, 06:56",
            amount:"N15.00",
            status:"Successful",
            icon:Images.glo
        }
    ]
         let filterList = [];
    if(selectedTab === "All"){
        filterList = list1;
    }else if (selectedTab === "Commission"){
         filterList = list2;
    }else if (selectedTab === "Referral Bonus"){
         filterList = list3;
    };
    
  return (
    <View style = {styles.page}>
        <Text>Back</Text>
      <View style = {{flexDirection:"row", height:50, backgroundColor:"#CDE1FF", borderWidth:1, justifyContent:"center", alignItems:"center", marginTop:40}}>
        <View style = {{height:20, width:90, backgroundColor:"blue", justifyContent:"center", alignItems:"center", borderRadius:10}}>
            <Text style= {{color:"white", fontWeight:"500", fontSize:10}}>Commission</Text>
        </View>

        
           <View style = {{backgroundColor:"white", height:25, width:90, borderRadius:20, marginLeft:5, alignItems:"center", justifyContent:"center"}}>
            <Text style = {{fontWeight:"bold"}}>N400.00</Text>
            </View> 
       
      </View>

       <View style = {{flexDirection:"row", height:50, backgroundColor:"#CDE1FF", borderWidth:1, justifyContent:"center", alignItems:"center"}}>
        <View style = {{height:20, width:90, backgroundColor:"blue", justifyContent:"center", alignItems:"center", borderRadius:10}}>
            <Text style= {{color:"white", fontWeight:"500", fontSize:10}}>Referral Bonus</Text>
        </View>

        
           <View style = {{backgroundColor:"white", height:25, width:90, borderRadius:20, marginLeft:5, alignItems:"center", justifyContent:"center"}}>
            <Text style = {{fontWeight:"bold"}}>N5,000.00</Text>
            </View> 
       
      </View>
      <View style = {{flexDirection:"row", justifyContent:"space-between", marginVertical:10}}>
       <TouchableOpacity key ={"All"}onPress={() => setSelectedTab("All")}  style = {{height:30, width:105, borderWidth:0.5, justifyContent:"center", alignItems:"center", borderRadius:5,backgroundColor: selectedTab === "All" ? "#D0E8FF" : "white",}} >
        <View>
             <Text>All</Text>
             </View>
            </TouchableOpacity>
              <TouchableOpacity key ={"Commission"}onPress={() => setSelectedTab("Commission")}  style = {{height:30, width:105, borderWidth:0.5, justifyContent:"center", alignItems:"center", borderRadius:5,backgroundColor: selectedTab === "Commission" ? "#D0E8FF" : "white",}} >
        <View>
             <Text>Commission</Text>
             </View>
            </TouchableOpacity>
                <TouchableOpacity key ={"Referral Bonus"}onPress={() => setSelectedTab("Referral Bonus")}  style = {{height:30, width:105, borderWidth:0.5, justifyContent:"center", alignItems:"center", borderRadius:5,backgroundColor: selectedTab === "Referral Bonus" ? "#D0E8FF" : "white",}} >
        <View>
             <Text>Referral Bonus</Text>
             </View>
            </TouchableOpacity>
           
      </View>
      <FlatList
      data={filterList}
      renderItem={({item}) => {
        return(
            <View style = {{borderBottomWidth:0.5, height:60, justifyContent:"center", marginTop:10}}>
                <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style = {{flexDirection:"row"}}>
                    <Image
                    source={item.icon}
                    style = {{height:40, width:40}}
                    />
                    <View style = {{alignSelf:"center", marginLeft:10}}>
                    <Text style  ={{fontWeight:"500"}}>{item.title}</Text>
                    <Text style  ={{}}>{item.time}</Text>
                </View>
                </View>
                <View>
                    <Text style = {{fontWeight:"bold"}}>{item.amount}</Text>
                    <Text style = {{color:"#19B832", fontSize:12}}>{item.status}</Text>
                </View>
                </View>
            </View>
        )
      }}
      />
    </View>
  )
}

export default helpsam

const styles = StyleSheet.create({
    page:{
        padding:20,
        paddingTop:60
    }
})