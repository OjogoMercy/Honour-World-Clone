import { StyleSheet } from "react-native";
import Colors from "./Colors";

const styles = StyleSheet.create({
    page:{
        backgroundColor:Colors.primary,
        flex:1
    },
    body:{
        backgroundColor:Colors.White,
        height:"85%",
        top:'15%',
        borderTopLeftRadius:30, borderTopRightRadius:30,
        justifyContent:"center",
        padding:30,
        paddingTop:50
    },
    box:{
    height:350,
    width:300,
    backgroundColor:"",

    alignSelf:"center"
    },
   circle:{
      backgroundColor:Colors.primary,
      height:300,
      width:300,
      borderRadius:300,
      
   }
})
export default styles