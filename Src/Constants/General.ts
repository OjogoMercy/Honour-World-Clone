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
        fontWeight: 'bold',
        fontFamily:'bold'
    },
    row: {
        flexDirection: 'row',
        padding:Sizes.padding,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    profile: {
        height: Sizes.profileHeight,
        width: Sizes.profileWidth,
        borderRadius:Sizes.profileBorder
    },
    tinyText: {
        fontSize: Sizes.tinyText,
        color:'gray'
    },
    card: {
        width: '100%',
        height: '23%',
        borderRadius: Sizes.radius,
        backgroundColor: Colors.primary,
        padding:Sizes.padding
    },
    text: {
        fontSize: Sizes.body4,
        color:'white'
    }
});
export default general