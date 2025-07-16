import { StyleSheet } from 'react-native';
import Colors from './Colors';
import { Sizes, Fonts } from './Theme';

const General = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 10,
        backgroundColor: "#fff" 
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
        fontFamily: Fonts.semiBold,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: Sizes.base * 2,
        color: Colors.primary
    },
    subFundwalletText: {
        fontSize: Sizes.body3,
        fontFamily: Fonts.regular,
        textAlign: "center",
        marginTop: Sizes.base,
        color: "#000"  
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
        fontFamily: Fonts.regular,
     }

})
export default General;