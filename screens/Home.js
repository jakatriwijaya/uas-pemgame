import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import CustomCard from '../components/CustomCard';

const Home = () => {
  const [gempa, setGempa] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json');
      setGempa(response.data.Infogempa.gempa);
      setIsLoading(false);
      console.log('Data API Gempa:', response.data.Infogempa.gempa);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={gempa}
          renderItem={({ item }) => <CustomCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Home;
