import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar } from 'react-native';
import MountainList from './MountainList';
import api from '../api/snowAPI'

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [mt, setMt] = useState({})

  useEffect(() => {
    fetchOverview()
  }, [])

  const fetchOverview = () => {
    api.getSnowOverview().then(response => response.json())
    .then(json => setData(json.data))
    .catch(error => console.error(error))
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <MountainList mt={data}></MountainList>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  }
});

export default HomeScreen;
