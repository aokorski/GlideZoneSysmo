import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons'; // Aby używać ikon

const DashboardScreens = ({ navigation }) => {
  const swiperRef = useRef(null);

  return (
    <Swiper style={styles.wrapper} showsButtons={false} ref={swiperRef}>
      <View style={styles.slide}>
        <Text style={styles.text}>Instrukcja 1</Text>
        <TouchableOpacity style={styles.nextButton} onPress={() => swiperRef.current.scrollBy(1)}>
          <Icon name="chevron-forward-circle" size={40} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Instrukcja 2</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => swiperRef.current.scrollBy(-1)}>
          <Icon name="chevron-back-circle" size={40} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => swiperRef.current.scrollBy(1)}>
          <Icon name="chevron-forward-circle" size={40} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Instrukcja 3</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => swiperRef.current.scrollBy(-1)}>
          <Icon name="chevron-back-circle" size={40} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate('Start')}>
          <Text style={styles.buttonText}>ZACZYNAMY</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  nextButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 30,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 30,
  },
  centerButton: {
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

export default DashboardScreens;
