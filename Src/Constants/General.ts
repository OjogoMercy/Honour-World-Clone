import { StyleSheet } from "react-native";
import { Colors,Sizes ,SCREEN_HEIGHT,SCREEN_WIDTH} from "./Theme";

const general = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff",
        paddingHorizontal: 15,
        paddingTop:40
        
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
    },
     cover: {
    borderRadius: Sizes.bigRadius,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.veryLight,
    padding: Sizes.smallPadding,
  },
  icon: {
    height: Sizes.tinyIcon,
    width: Sizes.tinyIcon,
  },
  item: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: Sizes.smallPadding,
    elevation: 2,
    padding: Sizes.smallPadding,
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.2,
    justifyContent: "center",
  },
  iconContainer: {
    backgroundColor: "white",
  },
  iconBox: {
    height: SCREEN_HEIGHT * 0.032,
    width: SCREEN_WIDTH * 0.07,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: Sizes.body5,
    color: "gray",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.2,
    borderRadius: Sizes.radius,
    marginTop: Sizes.padding,
  },
  activity: {
    height: Sizes.body5,
    width: Sizes.body5,
    borderRadius: Sizes.bigRadius,
    borderWidth: 1,
    borderColor: "black",
    margin: 2,
  },
  wallet: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_HEIGHT * 0.2,
    borderRadius: Sizes.radius,
    marginTop: Sizes.padding,
    alignSelf: "center",
    resizeMode: "contain",
  },
  normalText: {
    fontSize: Sizes.body3,
    color: "gray",
    alignSelf: "center",
    marginTop: Sizes.padding,
    width: SCREEN_WIDTH * 0.6,
    fontFamily: 'Regular',
    textAlign:'center'
  },
   dollarIcon: {
        width: 80,
        height: 80,
        backgroundColor: Colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        alignSelf: "center",
        marginTop: Sizes.base * 2
    },
    FundWalletText: {
        fontSize: Sizes.h3a,
        fontFamily: 'regular',
        fontWeight: "bold",
        textAlign: "center",
        marginTop: Sizes.base * 2,
        color: Colors.primary
    },
    subFundwalletText: {
        fontSize: Sizes.body3,
        fontFamily:  'regular',
        textAlign: "center",
        marginTop: Sizes.base,
        color:  '#000'
        // fontWeight: "bold",
    },
    option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#2F75FD4D',
    borderRadius: 10,
    marginVertical: 8,
    height: 60,
    backgroundColor: '#F8FCFF'
    },
    IconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10 
    },
    FundIcon: {
        resizeMode: 'contain',
    },

    FundName: { 
        fontSize: Sizes.body3,
        fontFamily: 'regular',
     },
     


})

export default general