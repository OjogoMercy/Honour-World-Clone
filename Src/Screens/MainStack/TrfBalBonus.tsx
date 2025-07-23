import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ElectricityScreen = () => {
  const [provider, setProvider] = useState('ibadan');
  const [planType, setPlanType] = useState('prepaid');
  const [meterNumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [saveBeneficiary, setSaveBeneficiary] = useState(true);

  const handleConfirm = () => {
    // Logic to confirm or submit form
    console.log({ provider, planType, meterNumber, amount, phone, saveBeneficiary });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Electricity</Text>

      {/* Service Provider */}
      <Text style={styles.label}>Service Provider</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={provider}
          onValueChange={(itemValue) => setProvider(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Ibadan Electricity" value="ibadan" />
          {/* Add more providers here if needed */}
        </Picker>
      </View>

      {/* Plan Type Toggle */}
      <View style={styles.toggleRow}>
        <TouchableOpacity
          style={[styles.toggleButton, planType === 'prepaid' && styles.activeButton]}
          onPress={() => setPlanType('prepaid')}
        >
          <Text style={styles.toggleText}>Prepaid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, planType === 'postpaid' && styles.activeButton]}
          onPress={() => setPlanType('postpaid')}
        >
          <Text style={styles.toggleText}>Postpaid</Text>
        </TouchableOpacity>
      </View>

      {/* Meter Number */}
      <TextInput
        style={styles.input}
        placeholder="Enter Metre Number"
        value={meterNumber}
        onChangeText={setMeterNumber}
        keyboardType="numeric"
      />

      {/* Amount */}
      <TextInput
        style={styles.input}
        placeholder="Enter Transfer Amount in (#)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Text style={styles.balance}>Balance: ₦2,500.00</Text>

      {/* Phone Number */}
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Save Beneficiary */}
      <View style={styles.switchRow}>
        <Text>Save as beneficiary</Text>
        <Switch
          value={saveBeneficiary}
          onValueChange={setSaveBeneficiary}
        />
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ElectricityScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20
  },
  label: {
    fontWeight: '600',
    marginBottom: 5
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 15
  },
  picker: {
    height: 50,
    width: '100%'
  },
  toggleRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    marginRight: 5,
    borderRadius: 6
  },
  activeButton: {
    backgroundColor: '#007AFF'
  },
  toggleText: {
    color: '#fff'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 10
  },
  balance: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center'
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
