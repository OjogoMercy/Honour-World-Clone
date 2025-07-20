import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { transaction } from "@/Src/Constants/Data";
import {
  Sizes,
  Colors,
  SCREEN_HEIGHT,
} from "@/Src/Constants/Theme";

type TransactionProps = {
  transaction: Record<string, string>; 
};

const TransactionReceipt = ({ transaction }: TransactionProps) => {
  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <View style={styles.card}>
      {Object.entries(transaction).map(([key, value]) => (
        <View key={key} style={styles.row}>
          <Text style={styles.key}>{formatKey(key)}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

export default TransactionReceipt;


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
  
  value: {
    color: "#333",
  },
})