import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import React from 'react'

export default function App() {
  return (
  <SafeAreaView styles={styles.root}>
    <Navigation/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
