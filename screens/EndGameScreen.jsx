import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
import { useFocusEffect } from '@react-navigation/native';

const EndGameScreen = ({ navigation }) => {
  const soundInstance = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      soundInstance.current = new Sound(require('../assets/sounds/endgame.mp3'), (error) => {
        if (error) {
          console.log('Problem z załadowaniem dźwięku', error);
          return;
        }
        soundInstance.current.play();
      });

      return () => {
        if (soundInstance.current) {
          soundInstance.current.stop(() => {
            soundInstance.current.release();
          });
        }
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Koniec gry</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Win')}>
          <Text style={styles.buttonText}>WYGRANA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lose')}>
          <Text style={styles.buttonText}>PRZEGRANA</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 25,
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
});

export default EndGameScreen;
