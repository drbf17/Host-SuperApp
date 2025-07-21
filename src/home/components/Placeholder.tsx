import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface PlaceholderProps {
  label: string;
  icon?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ label, icon }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.subtitle}>Carregando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default Placeholder;
