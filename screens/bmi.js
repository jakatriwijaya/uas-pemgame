import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      let bmiCategory = '';

      if (bmi < 18.5) {
        bmiCategory = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = 'Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = 'Overweight';
      } else {
        bmiCategory = 'Obesity';
      }

      setResult(`BMI: ${bmi}`);
      setCategory(`Category: ${bmiCategory}`);
    } else {
      setResult('Please enter valid input');
      setCategory('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight in kg"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter height in cm"
        value={height}
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={calculateBMI} style={styles.button}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.category}>{category}</Text>
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
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
