import { StyleSheet, Text, View,TextInput, } from 'react-native'
import React from 'react'
import general from '@/Src/Constants/General'
import { Sizes } from '@/Src/Constants/Theme'


const Login = () => {
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [nin, setNin] = useState('');
  const [state, setState] = useState('');
  const [dob, setDob] = useState('');

  const handleUpgrade = () => {
    alert('Submitted! (No actual logic)');
    console.log({ businessName, website, nin, state, dob });
  };

  return(
    <View style={general.container}>
      <Text style={styles.title}>Become a Reseller</Text>

      <Text style={styles.label}>Business Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Business Name"
        value={businessName}
        onChangeText={setBusinessName}
      />

      <Text style={styles.label}>Website URL</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your website URL"
        value={website}
        onChangeText={setWebsite}
      />

      <Text style={styles.label}>NIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter NIN"
        value={nin}
        onChangeText={setNin}
        keyboardType="number-pad"
      />

      <Text style={styles.label}>State of Residence</Text>
      <TextInput
        style={styles.input}
        placeholder="Select State of Residence"
        value={state}
        onChangeText={setState}
      />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        value={dob}
        onChangeText={setDob}
      />
    </View>
  );



};

// const Login = () => {
//   return (
//     <View style={[general.container, {marginTop: 35, }]}>

//     <View style={{color: '#1E90FF',textAlign: 'center', marginBottom: 20,}}>
//      <Text>Become a Reseller</Text>
//      </View>

//      <View>
//         <Text style={{fontSize: 15,marginTop: 30,fontWeight: 400}}>Business Name</Text>
//       <TextInput style={{borderWidth: 1, borderColor: '#ccc', backgroundColor: "#D3D3D3",  padding: 12, borderRadius: 6,}} placeholder="Enter Business Name" />
//      </View>

//           <View>
//         <Text style={{fontSize: 15,marginTop: 30,fontWeight: 400}}>Website URL</Text>
//       <TextInput style={{borderWidth: 1, borderColor: '#ccc', backgroundColor: "#D3D3D3",  padding: 12, borderRadius: 6,}} placeholder="Enter your website URL" />
//      </View>

//           <View>
//         <Text style={{fontSize: 15,marginTop: 30,fontWeight: 400}}>NIN</Text>
//       <TextInput style={{borderWidth: 1, borderColor: '#ccc', backgroundColor: "#D3D3D3",  padding: 12, borderRadius: 6,}} placeholder="Enter NIN" />
//      </View>

//           <View>
//         <Text style={{fontSize: 15,marginTop: 30,fontWeight: 400}}>State of Residence</Text>
//       <TextInput style={{borderWidth: 1, borderColor: '#ccc', backgroundColor: "#D3D3D3",  padding: 12, borderRadius: 6,}} placeholder="select state of residence" />
//      </View>

//      <View style={{marginTop: 25}}>   
//    <Text style={{ marginBottom: 5 }}>Date of Birth</Text>
//    <TextInput style={{backgroundColor: "#D3D3D3",borderColor: '#ccc', padding: 10, borderRadius: 4, width: 400, }} placeholder="DD/MM/YYYY" />
//    </View>

//    <View>   
//     <Text style={{}}>Upgrade</Text>
//     </View>


//     </View>
//   )
// }

export default Login

const styles = StyleSheet.create({})