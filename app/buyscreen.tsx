import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Images from "../Src/Constants/Images";

const transactionsData = [
  {
    id: "1",
    type: "Airtime",
    number: "8076749945",
    amount: 2100,
    status: "Successful",
    date: "April 2, 06:56",
    icon: Images.MTN,
  },
  {
    id: "2",
    type: "Data",
    number: "8076749945",
    amount: 600,
    status: "Failed",
    date: "April 2, 06:56",
    icon: Images.glo,
  },
  {
    id: "3",
    type: "Airtime",
    number: "8076749945",
    amount: 600,
    status: "Failed",
    date: "April 2, 06:56",
    icon: Images.MTN,
  },
  {
    id: "4",
    type: "Electricity",
    number: "0123456789",
    amount: 24600,
    status: "Failed",
    date: "April 2, 06:56",
    icon: Images.dstv,
  },
  {
    id: "5",
    type: "Data",
    number: "8076749945",
    amount: 300,
    status: "Successful",
    date: "April 2, 06:56",
    icon: Images.glo,
  },
];

export default function WalletScreen() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [filter, setFilter] = useState("All");

  const filterTransactions = () => {
    if (filter === "All") return transactionsData;
    return transactionsData.filter((tx) => tx.status === filter);
  };

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Image source={item.icon} style={styles.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {item.type}/{item.number}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.amount}>₦{item.amount.toLocaleString()}</Text>
        <Text
          style={[
            styles.status,
            {
              color:
                item.status === "Successful"
                  ? "green"
                  : item.status === "Failed"
                  ? "red"
                  : "orange",
            },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
     
    <View style={styles.container}>
       <View style={styles.green}>  
      <Text style={styles.header}>Transaction History</Text>
      <Text style={styles.balanceLabel}>Wallet Balance</Text>
      <Text style={styles.balance}>₦5,400.00</Text>

      <View style={{borderRadius:30,backgroundColor:'white',alignSelf:'center',height:50,width:158,marginBottom:15}}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButtonInactive}>
          <Text style={styles.tabTextInactive}>Wallet</Text>
        </TouchableOpacity>
      </View>

      </View>
    

      <TextInput style={styles.searchInput} placeholder="Search Transactions" ></TextInput>
</View>
      <View style={styles.filterContainer}>
        {["All", "Successful", "Failed", "Pending"].map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setFilter(f)}
            style={[
              styles.filterButton,
              filter === f && styles.activeFilter,
            ]}
          >
            <Text style={filter === f ? styles.activeFilterText : styles.filterText}>
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      

      <FlatList
        data={filterTransactions()}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
      />

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start a Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 // container: { flex: 1, backgroundColor: "#fff", padding: 0 },
  header: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 20,color:'white' },
  balanceLabel: { textAlign: "center", marginTop: 10, color:'white', },
  balance: { fontSize: 28, fontWeight: "bold", textAlign: "center", color: "#007bff" },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
   marginVertical: 2,
   marginTop:3
    
    
  
  },
  tabButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    margin:2,
    borderRadius:20
  },
  tabButtonInactive: {
    backgroundColor: "#fff",
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    margin:2,
    borderRadius:20,
    borderColor:'black',
    borderWidth:1,
    alignSelf:'center'
    
  },
  tabText: { color: "#fff" },
  tabTextInactive: { color: "#000" },
  searchInput: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    paddingLeft:10,
    margin:20,
    
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingTop:20,
    paddingHorizontal:30,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#007bff",
  },
  activeFilter: {
    backgroundColor: "#007bff",
  },
  filterText: {
    color: "#007bff",
  },
  activeFilterText: {
    color: "#fff",
  },
  transactionItem: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    paddingHorizontal:25
  },
  icon: { width: 30, height: 30, marginRight: 10 },
  title: { fontWeight: "bold" },
  date: { color: "#666", fontSize: 12 },
  amount: { fontWeight: "bold" },
  status: { fontSize: 12 },
  startButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
    marginHorizontal:39,
  
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  green:{
    backgroundColor:"#007bff",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    
    
    
  }
});
