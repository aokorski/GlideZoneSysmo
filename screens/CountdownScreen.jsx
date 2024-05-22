import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
import { useFocusEffect } from '@react-navigation/native';

const CountdownScreen = ({ navigation }) => {
  const [seconds, setSeconds] = useState(5);
  const soundInstance = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      setSeconds(5);

      soundInstance.current = new Sound(require('../assets/sounds/countdown.mp3'), (error) => {
        if (error) {
          console.log('Problem z załadowaniem dźwięku', error);
          return;
        }
        soundInstance.current.setNumberOfLoops(-1);
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

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigation.navigate('EndGame');
    }
  }, [seconds, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>{seconds}</Text>
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
  circle: {
    width: 100,
    height: 100,
    backgroundColor: '#FFA500',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default CountdownScreen;
