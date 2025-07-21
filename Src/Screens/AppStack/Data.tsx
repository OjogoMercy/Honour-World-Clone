import { StyleSheet, Text, TouchableOpacity, View ,Image,FlatList} from 'react-native'
import React, { useState} from 'react'
import Header from '@/Src/Components/Header'
import { Colors, Sizes, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Src/Constants/Theme'
import CustomButton from '@/Src/Components/CustomButton'
import FormInput from '@/Src/Components/FormInputs'
import Beneficiary from '@/Src/Components/Beneficiary'
import { useNavigation } from 'expo-router'
import general from '@/Src/Constants/General'
import { MaterialIcons } from '@expo/vector-icons'
import Images from '@/Src/Constants/Images'
import { DATA_BUNDLES } from '@/Src/Constants/Data'

const Data = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ phoneNumber,setPhoneNumber] = useState('')
  const toggle = () => {
    setIsOpen(!isOpen)
  }
   const options = [
     { label: "Glo SME", image: Images.glo },
     { label: "Airtel SME", image:Images.airtel },
     { label: "9Mobile SME", image: Images.nineMobile},
  ];
  
const DataBundleCard = ({ size, duration, price }) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.5}>
    <Text style={styles.size}>{size}</Text>
    <Text style={styles.duration}>{duration}</Text>
    <Text style={styles.price}>{price}</Text>
  </TouchableOpacity>
);
  const navigation = useNavigation()
  return (
    <View style={general.container}>
      <Header title={"Data"} customStyle={undefined} />
      <Text style={general.regularBold}>Select Your Network</Text>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.button}
          onPress={toggle}
          activeOpacity={0.7}
        >
          <Image style={general.profile} source={Images.MTN} />
          <Text style={styles.label}>MTN SME</Text>
          <MaterialIcons
            name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.dropdown}>
            {options.map((options, index) => (
              <TouchableOpacity key={index} style={styles.option}>
                <Image style={general.profile} source={options.image} />
                <Text style={styles.label}>{options.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={general.row}>
        <Text style={general.regularBold}>Phone Number</Text>
        <Text style={[general.tinyText, { marginTop: 10 }]}>Recharge Self</Text>
      </View>
      <FormInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        onPress={undefined}
        iconSource={Images.contact}
        placeHolder={"Enter Phone Number"}
      />
      <FlatList
        data={DATA_BUNDLES}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <DataBundleCard
            size={item.size}
            duration={item.duration}
            price={item.price}
          />
        )}
        contentContainerStyle={styles.container}
      />
      <Beneficiary />
      <CustomButton
        title={"Make Payment"}
        onPress={undefined}
        style={undefined}
        textStyle={undefined}
      />
    </View>
  );
}

export default Data

const styles = StyleSheet.create({
  menu: {
    width: SCREEN_WIDTH * 0.9,
    marginTop: SCREEN_HEIGHT * 0.1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.extraLight,
    padding: Sizes.padding,
    borderRadius: Sizes.radius,
  },
  label: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  dropdown: {
    backgroundColor: Colors.extraLight,
    padding: Sizes.padding,
    borderRadius: Sizes.radius,
    overflow: "hidden",
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    padding: SCREEN_WIDTH * 0.04,
  },
  card: {
    width: SCREEN_WIDTH* 0.25,
    height: SCREEN_HEIGHT * 0.12,
    backgroundColor:Colors.extraLight,
    margin: SCREEN_WIDTH * 0.02,
    padding: Sizes.smallPadding,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    fontSize: SCREEN_WIDTH * 0.045,
    fontWeight: "bold",
    marginBottom: SCREEN_HEIGHT * 0.01,
  },
  duration: {
    fontSize: SCREEN_WIDTH * 0.035,
    borderColor:Colors.lightBlue,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
    paddingVertical: SCREEN_HEIGHT * 0.005,
    borderRadius: Sizes.padding,
    marginBottom: SCREEN_HEIGHT * 0.01,
    borderWidth:1
  },
  price: {
    fontSize: SCREEN_WIDTH * 0.04,
    fontWeight: "600",
  },
});