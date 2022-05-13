import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import container from './navegacao/LugaresNavigator'

export default function App() {
  return container
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
