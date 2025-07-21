import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
    <Text style={styles.subtitle}>Welcome to the Home section!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: { 
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;
