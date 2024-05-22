import Sound from 'react-native-sound';

export const playSound = (soundFile, setSoundInstance) => {
  const sound = new Sound(soundFile, (error) => {
    if (error) {
      console.log('Problem z załadowaniem dźwięku', error);
      return;
    }
    sound.play();
  });
  setSoundInstance(sound);
};

export const stopSound = (soundInstance) => {
  if (soundInstance) {
    soundInstance.stop(() => {
      soundInstance.release();
    });
  }
};
