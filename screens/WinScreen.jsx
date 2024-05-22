import { View, Text, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';
import LottieView from 'lottie-react-native';

const WinScreen = ({ navigation }) => {
  const copyToClipboard = () => {
    Clipboard.setString('Twój kod nagrody: XYZ123');
    alert('Kod nagrody skopiowany!');
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/win_fireworks.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.title}>Wygrana</Text>
      <TouchableOpacity style={styles.rewardButton} onPress={copyToClipboard}>
        <Text style={styles.buttonText}>NAGRODA (kopuj zawartość)</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Start')}>
          <Text style={styles.buttonText}>OPUŚĆ GRĘ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Countdown')}>
          <Text style={styles.buttonText}>NASTĘPNY POZIOM</Text>
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
  animation: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  rewardButton: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    minWidth: 150,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WinScreen;
