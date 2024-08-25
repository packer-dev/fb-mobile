import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

const useSound = () => {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return { sound, playSound };
};

export default useSound;
