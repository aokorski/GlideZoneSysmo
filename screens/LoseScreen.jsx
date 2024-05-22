import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LoseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Przegrana</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Countdown')}>
        <Text style={styles.buttonText}>ZAGRAJ PONOWNIE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default LoseScreen;
