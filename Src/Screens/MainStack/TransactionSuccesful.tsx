import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Header from '@/Src/Components/Header'
import general from '@/Src/Constants/General'
import Icons from '@/Src/Constants/Icons'
import { transaction } from '@/Src/Constants/Data'
import { Sizes,Colors,SCREEN_HEIGHT,SCREEN_WIDTH } from '@/Src/Constants/Theme'
import CustomButton from '@/Src/Components/CustomButton'

const TransactionSuccesful = () => {
    const formatKey = (key) => {
      // Optional: format keys to look nicer
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
    };

  return (
    <View style={general.container}>
      <Header title={""} />
      <Image
        source={Icons.greenCheck}
        style={[general.profile, { alignSelf: "center" }]}
      />
      <Text style={[general.regularBold, { alignSelf: "center" }]}>
        Transaction Succesful
      </Text>
      <View style={styles.card}>
        {Object.entries(transaction).map(([key, value]) => (
          <View key={key} style={styles.row}>
            <Text style={styles.key}>{formatKey(key)}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
      <View style={{ width: "100%", flexDirection: "row" ,justifyContent:'space-between',padding:Sizes.padding}}>
        <CustomButton title={"Share Receipt"} style={{ width: "50%",backgroundColor:'white',borderWidth:1,borderColor:'black' }} textStyle={{color:'black'}} />
        <CustomButton title={"Done"} style={{ width: "40%" }} />
      </View>
    </View>
  );
}

export default TransactionSuccesful

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.extraLight,
    padding: Sizes.padding,
    borderRadius: 10,
    marginVertical: 30,
    marginBottom: SCREEN_HEIGHT * 0.1,
  },
  title: {
    fontSize: Sizes.body2,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontWeight: "600",
    color: "#555",
  },
  value: {
    color: "#333",
  },
});