import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import general from '@/Src/Constants/General'
import Header from '@/Src/Components/Header'
import FormInput from '@/Src/Components/FormInput'
import CustomButton from '@/Src/Components/CustomButton'

const EducationDetails = ({ route }) => {
  const[input,setInput]  = React.useState('')
  const [item, setItem] = React.useState(route.params?.item)
  
  // Assuming you want to display the details of the selected education body
  React.useEffect(() => {
    if (route.params?.item) {
      setItem(route.params.item)
    }
  }, [route.params?.item])
  return (
    <View style={general.container}>
      <Header title={'Education'} label={undefined} customStyle={undefined} />
      <Text style={general.regularBold}>{item.name}</Text>
      <FormInput value={input} onChangeText={setInput} onPress={undefined} iconSource={undefined} placeHolder={'Enter Pin/Number'} icon={undefined} icon2={undefined} />
      <CustomButton title={'Continue'} onPress={undefined} style={undefined} textStyle={undefined}/>
    </View>
  )
}

export default EducationDetails

const styles = StyleSheet.create({})