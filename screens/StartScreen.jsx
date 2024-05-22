import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StartScreen = ({ navigation }) => {
  const soundInstance = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      soundInstance.current = new Sound(require('../assets/sounds/start.mp3'), (error) => {
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
      <Text style={styles.title}>GLIDE ZONE</Text>
      <Text style={styles.subtitle}>by Sysmo.pl</Text>
      <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Countdown')}>
        <Icon name="play-arrow" size={48} color="#FFFFFF" />
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
  },
  playButton: {
    width: 70,
    height: 70,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
});

export default StartScreen;
