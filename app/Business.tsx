import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

const Akams = [
  {
    id: "1",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
  {
    id: "2",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
  {
    id: "3",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
  {
    id: "4",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
  {
    id: "5",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
  {
    id: "6",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
  {
    id: "7",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
  {
    id: "8",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
  {
    id: "8",
    type: "BUSINESS VERIFICATION",
    date: "Primary * April 2, 06:56",
    amount: 2100.0,
    status: "DEBIT"
  },
];

const Business = () => {
  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.amount}>₦{item.amount.toLocaleString()}</Text>
        <Text
          style={[
            styles.status,
            {
              color: item.status === "DEBIT" ? "red" : "green"
            }
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.page}>
      <View style={styles.green}>
        <Text style={styles.header}>Transaction History</Text>
        <Text style={styles.balanceLabel}>Wallet Balance</Text>
        <Text style={styles.balance}>₦5,400.00</Text>

        <View style={{ borderRadius: 30, backgroundColor: 'white', alignSelf: 'center', height: 50, width: 158, marginBottom: 15 }}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={styles.tabText}>Transaction</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButtonInactive}>
              <Text style={styles.tabTextInactive}>Wallet</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput style={styles.searchInput} placeholder="Search Transactions" />
      </View>

      {/* FlatList is moved INSIDE the Business component */}
      <FlatList
        data={Akams}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
      />
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  green: {
    backgroundColor: "#007bff",
    padding: 8,
    height: 280,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: 'white'
  },
  balanceLabel: {
    textAlign: "center",
    marginTop: 10,
    color: 'white'
  },
  balance: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#007bff"
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 2,
    marginTop: 3
  },
  tabButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    margin: 2,
    borderRadius: 20
  },
  tabButtonInactive: {
    backgroundColor: "#fff",
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    margin: 2,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center'
  },
  tabText: { color: "#fff" },
  tabTextInactive: { color: "#000" },
  searchInput: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    paddingLeft: 10,
    margin: 20,
  },
  transactionItem: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
    paddingHorizontal: 25
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
    marginHorizontal: 39
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
