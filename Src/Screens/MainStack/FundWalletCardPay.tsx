// import { View, Text } from 'react-native';
// import React from 'react';
// import { useRoute } from '@react-navigation/native';
// import General from '@/Src/Constants/General';
// import Header from '@/Src/Components/Header';
// import { Sizes, Colors, Fontfamilies } from '@/Src/Constants/Theme';
// import FormInput from '@/Src/Components/FormInputs';
// import { useState } from 'react';
// import CustomButton from '@/Src/Components/CustomButton';
// import CustomModal from '@/Src/Components/CustomModal';


// export default function FundWalletCardPay() {
//   const route = useRoute();
//   const {method} = route.params;
//   const [amount, setAmount] = useState('');
//   return (
//     <View style={General.container}>
//         <View style={{marginTop: 20}}>
//             <Header/>
//             <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20}}>
//                 <Text style={{textAlign: "left", color: Colors.primary, fontFamily: Fontfamilies.bold, fontSize: Sizes.h3}}>Amount</Text>
//                 <Text style={{color: "#909195", fontFamily:Fontfamilies.regular, fontSize: Sizes.body4
//                 }}>Balance:N2500.00</Text>
//             </View>
        
        
//         </View>
//         <FormInput 
//          placeHolder={"Enter Amount to Fund"}
//         value={amount}
//         onChangeText={setAmount}/>
//         <CustomButton title="Fund Account"/>
//         <CustomModal/>
//     </View>
//   )
// }
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import General from '@/Src/Constants/General';
import Header from '@/Src/Components/Header';
import { Sizes, Colors, Fontfamilies } from '@/Src/Constants/Theme';
import FormInput from '@/Src/Components/FormInputs';
import CustomButton from '@/Src/Components/CustomButton';
import CustomModal from '@/Src/Components/CustomModal';

export default function FundWalletCardPay() {
  const route = useRoute();
  const { method } = route.params;
  const [amount, setAmount] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // 1. Modal visibility state

  const handleFundAccount = () => {
    // You can add validation or API calls here
    setModalVisible(true); // 2. Show modal on button press
  };

  const handleCloseModal = () => {
    setModalVisible(false); // 3. Hide modal
  };

  return (
    <View style={General.container}>
      <View style={{ marginTop: 20 }}>
        <Header label={"Back"}/>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <Text style={{ textAlign: "left", color: Colors.primary, fontFamily: Fontfamilies.bold, fontSize: Sizes.h3 }}>Amount</Text>
          <Text style={{ color: "#909195", fontFamily: Fontfamilies.regular, fontSize: Sizes.body4 }}>Balance:N2500.00</Text>
        </View>
      </View>
      <FormInput
        placeHolder={"Enter Amount to Fund"}
        value={amount}
        onChangeText={setAmount}
      />
      <CustomButton title="Fund Account" onPress={handleFundAccount} />
        {/* <CustomModal
            state={modalVisible}
            setStateTrue={() => setModalVisible(true)}
            setStateFalse={handleCloseModal}
            BoldText="Payment Successful"
            NormalText={`You have successfully funded your account with N${amount}.`}
            LeftButton="View Transactions"
            onPressLeft={() => {
            // Handle view transactions action
            console.log('View Transactions pressed');
            handleCloseModal();
            }}
            CloseModalText="Close"/> */}
    </View>
  );
}