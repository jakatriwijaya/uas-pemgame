// CustomCard.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Block, Text, theme } from "galio-framework";
import { Button } from "../components";
import { Images, argonTheme } from "../constants";


const CustomCard = ({ data }) => {
  const { Tanggal, Jam, Coordinates, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Potensi } = data;

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{`Tanggal: ${Tanggal}, Jam: ${Jam}`}</Text>
        <Text style={styles.content}>{`Koordinat: ${Coordinates}`}</Text>
        <Text style={styles.content}>{`Lintang: ${Lintang}`}</Text>
        <Text style={styles.content}>{`Bujur: ${Bujur}`}</Text>
        <Text style={styles.content}>{`Magnitude: ${Magnitude}`}</Text>
        <Text style={styles.content}>{`Kedalaman: ${Kedalaman}`}</Text>
        <Text style={styles.content}>{`Wilayah: ${Wilayah}`}</Text>
        <Text style={styles.content}>{`Potensi: ${Potensi}`}</Text>
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
});

export default CustomCard;
