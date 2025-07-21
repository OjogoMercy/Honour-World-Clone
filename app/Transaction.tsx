import { StyleSheet, Text, View,TouchableOpacity,TextInput, } from 'react-native'
import React, {useState} from 'react'
import Icons from '@/Src/Constants/Icons'


const Transaction = () => {
  return (
    <View style={styles.page}>
      <View style={styles.green}>

         
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
          
      </View>

      <Text style={{fontSize:22,fontWeight:'bold',alignSelf:'center',paddingTop:180}}>No Transaction</Text>
      <Text style={{fontSize:15,alignSelf:'center',paddingTop:5}}>Your recent transactions will appear here when they are available</Text>

       <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Start a Transaction</Text>
            </TouchableOpacity>

    






        

    </View>
  )
}

  export default Transaction;



const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,

    },
    green:{
        backgroundColor:"#007bff",
        padding:8,
        height:280,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        
    },

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
   startButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 30,
    marginTop: 130,
    alignItems: "center",
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
 /* green:{
  backgroundColor:"#007bff",
    borderRadius:5,
  },*/
})