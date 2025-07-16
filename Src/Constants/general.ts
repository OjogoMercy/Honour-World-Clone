import { StyleSheet} from "react-native";
import { Sizes } from "./Theme";
const general = StyleSheet.create({
    page: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            padding: Sizes.padding,
            margin: Sizes.base
        },
        root: {
        fontSize:Sizes.h3,
        color: "#0057FF",
        fontWeight: 500,
        marginLeft:Sizes.base,
        textAlign: 'center',
    },

    hint:  {
  color: '#777',
  textAlign: 'center',
  fontWeight: 600,
  lineHeight: 18,
  marginTop: Sizes.base,
  marginBottom: Sizes.base,
  fontSize:Sizes.h5,
    },

    imageWrapper: {
    position: 'relative',
    width: 90,
    borderWidth: 2,
    borderColor: '#2F80ED', // blue border
    borderRadius: 50,
    marginTop: Sizes.base,
  },

    profileimage: {
      height: 60,
      width: 60,
      borderRadius: 30,
      marginTop: Sizes.base,
      alignItems: "center",
    },

    cameraicon: {
       position: 'absolute',
    bottom: 0,
    right: 0,
    width: 25,
    height: 25,
    backgroundColor: '#007bff',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },

    root1: {
      fontSize:Sizes.h3,
        color: "black",
        fontWeight: 500,
        marginLeft:Sizes.base,
        textAlign: 'center',
    },

    item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },

  icon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf:"center",
  
    marginRight: Sizes.base,
     },

     right: {
    width: 20,
    height: 20,
     },
  
  // icon2: {
  // width: 20,
  // height: 20,
  // resizeMode: 'contain',
  //   fontSize: Sizes.h3,
  // },

   textBox: {
    flex: 1,
  },

  title: {
    fontSize: Sizes.h5,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: Sizes.h4,
    color: '#777',
    marginTop: Sizes.base,
  },

  upgradeButton: {
  backgroundColor: '#0057FF',
  paddingVertical: 14,
  paddingHorizontal: 30,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  width: '60%',
},

upgradeButtonText: {
  color: '#fff',
  fontSize: Sizes.h3,
  fontWeight: '600',
},

})





export default general;