import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [inputSuhu, setInputSuhu] = useState('');
  const [outputSuhu, setOutputSuhu] = useState('');
  const [fromSuhu, setFromSuhu] = useState('Celsius');
  const [toSuhu, setToSuhu] = useState('Fahrenheit');

  const convertSuhu = () => {
    if (inputSuhu) {
      let result;
      if (fromSuhu === 'Celsius' && toSuhu === 'Fahrenheit') {
        result = (parseFloat(inputSuhu) * 9/5) + 32;
      } else if (fromSuhu === 'Fahrenheit' && toSuhu === 'Celsius') {
        result = (parseFloat(inputSuhu) - 32) * 5/9;
      } else {
        result = inputSuhu;
      }
      setOutputSuhu(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Input temperature"
        value={inputSuhu}
        onChangeText={(text) => setInputSuhu(text)}
        keyboardType="numeric"
      />
      <View style={styles.pickerContainer}>
        <Text>From: </Text>
        <Picker
          selectedValue={fromSuhu}
          style={styles.picker}
          onValueChange={(itemValue) => setFromSuhu(itemValue)}>
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit" value="Fahrenheit" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text>To: </Text>
        <Picker
          selectedValue={toSuhu}
          style={styles.picker}
          onValueChange={(itemValue) => setToSuhu(itemValue)}>
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit" value="Fahrenheit" />
        </Picker>
      </View>
      <TouchableOpacity onPress={convertSuhu} style={styles.button}>
        <Text style={styles.buttonText}>Convert Suhu</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Hasil: {outputSuhu}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 150,
  },
});
