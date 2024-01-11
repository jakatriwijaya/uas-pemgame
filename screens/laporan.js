import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import { Button } from "../components";
const { width, height } = Dimensions.get("screen");
import { Images, argonTheme } from "../constants";
import { Input, Block, Text, theme } from "galio-framework";
import CustomCard from '../components/CustomCard2';
import {FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB, getFirestore, collection, addDoc, getDocs} from '../firebase';





const Laporan = ({ navigation }) => {
  const [gempa, setGempa] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  

  const handleAddDataPress = () => {
    navigation.navigate('Tambah Laporan'); // Replace 'CreateData' with your actual screen name
  };

const getGempaList = async() => {
  try {
    const querySnapshot = await getDocs(collection(FIRESTORE_DB, "gempa"));
    const fetchedData = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      fetchedData.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    setGempa(fetchedData);
    setIsLoading(false);
  } catch (error) {
    console.error('Error fetching data from Firestore: ', error);
    setIsLoading(false);
  }
};

useEffect(() => {
  getGempaList();
}, [gempa]);

  
  

  return (
  <View>
      <Button
        color="primary"
        style={styles.createButton}
        onPress={handleAddDataPress}
      >
        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
          Tambah Data
        </Text>
      </Button>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={gempa}
          renderItem={({ item }) => <CustomCard data={item}  getGempaList={getGempaList}/>}
          keyExtractor={(item)=>item.id}
        />
      )}
  </View>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA",
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
});



export default Laporan;
