/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Home from './Screens/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
