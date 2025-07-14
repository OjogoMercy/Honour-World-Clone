import { StyleSheet } from "react-native";
import { Colors,Sizes } from "./Theme";

const general = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff",
        padding: Sizes.padding
        
    },
    bigText: {
        fontSize: Sizes.h3,
        fontWeight:'bold'
    },
    row: {
        flexDirection: 'row',
        padding:Sizes.padding,
        justifyContent:'space-between'
    },
    profile: {
        height: Sizes.profileHeight,
        width: Sizes.profileWidth,
        borderRadius:Sizes.profileBorder
    },
    tinyText: {
        fontSize: Sizes.body5,
        color:'gray'
    },

});
export default general