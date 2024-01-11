import React, { useEffect, useState } from 'react';
import { View, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, Block, Text, theme } from "galio-framework";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from "../components";
import { Images, argonTheme } from "../constants"; 
import {FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB, getFirestore, collection, addDoc, getDocs} from '../firebase';


const MyDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [koordinat, setKoordinat] = useState('');
  const [lintang, setLintang] = useState('');
  const [bujur, setBujur] = useState('');
  const [magnitude, setMagnitude] = useState('');
  const [kedalaman, setKedalaman] = useState('');
  const [wilayah, setWilayah] = useState('');
  const [potensi, setPotensi] = useState('');
  // const db = FIRESTORE_DB;


  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios'); // For iOS, hide the picker on selection
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowTime(Platform.OS === 'ios'); // For iOS, hide the picker on selection
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDate(true);
  };

  const showTimepicker = () => {
    setShowTime(true);
  };

 

  const saveDataToFirebase = async () => {
    try {
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      const isoTimeString = date.toLocaleTimeString('en-US', { hour12: false }); // ISO 8601 formatted time string
      const data = {
        tanggal: formattedDate,
        jam: isoTimeString,
        koordinat: koordinat,
        lintang: lintang,
        bujur: bujur,
        magnitude: magnitude,
        kedalaman: kedalaman,
        wilayah: wilayah,
        potensi: potensi

        // Add other fields as needed
      };

      // Add the data to Firebase Firestore
      const docRef  = await addDoc(collection(FIRESTORE_DB, "gempa"),data);
      console.log('Document added with ID:', docRef.id);
      alert("Data Berhasil Disimpan")
      // Log the saved data to the console
      console.log('Data saved to Firebase successfully:', data);

      // You can also navigate to another screen or perform any other actions here
    } catch (error) {
      console.error('Error saving data to Firebase: ', error);
    }
  };

 


  return (
    <SafeAreaView>
      <Block style={styles.container}>
        {/* Date Input */}
        <Text>Tanggal</Text>
        <TouchableOpacity onPress={showDatepicker}>
          <Input
            borderless
            placeholder="Select date"
            value={date.toLocaleDateString()}
            editable={false}
          />
        </TouchableOpacity>
        {showDate && (
          <DateTimePicker
            testID="datePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        {/* Time Input */}
        <Text>Jam</Text>
        <TouchableOpacity onPress={showTimepicker}>
          <Input
            borderless
            placeholder="Select time"
            value={date.toLocaleTimeString()}
            editable={false}
          />
        </TouchableOpacity>
        {showTime && (
          <DateTimePicker
            testID="timePicker"
            value={date}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
          />
        )}
        <Text>Koordinat </Text>
        <Input
          borderless
          placeholder="-4.46,133.91"
          value={koordinat}
          onChangeText={(text) => setKoordinat(text)}
        />
        <Text>Lintang </Text>
        <Input
          borderless
          placeholder="4.46 LS"
          value={lintang}
          onChangeText={(text) => setLintang(text)}
        />
        <Text>Bujur </Text>
        <Input
          borderless
          placeholder="133.91 BT"
          value={bujur}
          onChangeText={(text) => setBujur(text)}
        />
        <Text>Magnitude </Text>
        <Input
          borderless
          placeholder="5.3"
          value={magnitude}
          onChangeText={(text) => setMagnitude(text)}
        />
        <Text>Kedalaman </Text>
        <Input
          borderless
          placeholder="10 km"
          value={kedalaman}
          onChangeText={(text) => setKedalaman(text)}
        />
        <Text>Wilayah </Text>
        <Input
          borderless
          placeholder="142 km BaratDaya NIASBARAT-SUMUT"
          value={wilayah}
          onChangeText={(text) => setWilayah(text)}
        />
        <Text>Potensi</Text>
        <Input
          borderless
          placeholder="Tidak berpotensi tsunami"
          value={potensi}
          onChangeText={(text) => setPotensi(text)}
        />
        <Button
          color="success"
          style={styles.createButton}
          onPress={saveDataToFirebase}
        >
          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
            Save
          </Text>
        </Button>

        
      </Block>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE,
    marginTop: 30
  },
  createButton: {
    width: 80,
    // marginTop: 25,
  },
  
});

export default MyDatePicker;
