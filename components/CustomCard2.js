// CustomCard.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Block, Text, theme } from "galio-framework";
import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { useNavigation } from '@react-navigation/native';
import {FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB, getFirestore, collection, addDoc, getDocs, doc, deleteDoc} from '../firebase';


const CustomCard = ({ data, getGempaList }) => {
  const { tanggal, jam, koordinat, lintang, bujur, magnitude, kedalaman, wilayah, potensi } = data;
  const navigation = useNavigation();
  const handleEditDataPress = () => {
    // Panggil fungsi navigasi untuk menuju layar "Tambah Laporan"
    navigation.navigate('Edit Laporan');
  };

  const deleteGempaItem = async() => {
    await deleteDoc(doc(FIRESTORE_DB, "gempa", data.id))
    getGempaList();
  }
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{`Tanggal: ${tanggal}, Jam: ${jam}`}</Text>
        <Text style={styles.content}>{`Koordinat: ${koordinat}`}</Text>
        <Text style={styles.content}>{`Lintang: ${lintang}`}</Text>
        <Text style={styles.content}>{`Bujur: ${bujur}`}</Text>
        <Text style={styles.content}>{`Magnitude: ${magnitude}`}</Text>
        <Text style={styles.content}>{`Kedalaman: ${kedalaman}`}</Text>
        <Text style={styles.content}>{`Wilayah: ${wilayah}`}</Text>
        <Text style={styles.content}>{`Potensi: ${potensi}`}</Text>
        <View style={styles.buttonContainer}>
          <Button color="success" style={styles.createButton}  onPress={handleEditDataPress}>
            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
              Edit
            </Text>
          </Button>
          <Button color="warning" style={styles.createButton} onPress={deleteGempaItem}>
            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
              Delete
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 4,
  },
  createButton: {
    width: 60,
    marginHorizontal: 5, 
    // marginTop: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align buttons to the start of the container
  },
});

export default CustomCard;
