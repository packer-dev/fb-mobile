import * as React from 'react';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import tailwind from '../../../tailwind';
import { FontAwesome, Feather } from '@expo/vector-icons';
import Avatar from '../../../components/Avatar';
import * as ImagePicker from 'expo-image-picker';

const UploadProfile = ({ navigation }) => {
  const [imageCover, setImageCover] = React.useState(null);
  const [imageAvatar, setImageAvatar] = React.useState(null);
  const [loadingCover, setLoadingCover] = React.useState(false);
  const [loadingAvatar, setLoadingAvatar] = React.useState(false);
  const pickImage = async (setState, setLoading) => {
    // Ask for permission to access the library
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }

    // Open the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setLoading(true);
      const timeOut = setTimeout(() => {
        setState(result.assets[0].uri);
        setLoading(false);
        clearTimeout(timeOut);
      }, 2000);
    }
  };
  return (
    <View
      style={tailwind(
        `relative h-48 bg-gray-300 border-2 border-gray-300 flex-row justify-center items-start pt-6`
      )}>
      {imageCover && (
        <Image
          source={{ uri: imageCover }}
          style={tailwind(`absolute top-0 left-0 right-0 bottom-0`)}
        />
      )}
      {loadingCover && (
        <View style={tailwind(`absolute top-0 left-0 right-0 bottom-0`)} />
      )}
      <FontAwesome
        onPress={() => pickImage(setImageCover, setLoadingCover)}
        name="camera"
        size={20}
        style={tailwind(`absolute bottom-3 right-3 z-20`)}
      />
      {!imageCover && !loadingCover && (
        <View style={tailwind(`flex-row gap-2 items-center`)}>
          <Feather style={tailwind(``)} name="image" size={20} color="black" />
          <Text style={tailwind(`font-bold`)}>Add cover image</Text>
        </View>
      )}
      <View
        style={tailwind(
          `absolute z-50 rounded-full border-4 border-white -bottom-20 mb-10 left-3`
        )}>
        <Avatar size={40} uri={imageAvatar}>
          {loadingAvatar && (
            <View
              style={{
                ...tailwind(
                  `absolute top-0 left-0 right-0 bottom-0 rounded-full z-50`
                ),
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}
            />
          )}
          {!loadingAvatar && (
            <TouchableOpacity
              onPress={() => pickImage(setImageAvatar, setLoadingAvatar)}
              style={tailwind(
                `w-10 h-10 rounded-full bg-gray-200 items-center justify-center 
                    absolute bottom-0 right-0 z-20`
              )}>
              <FontAwesome name="camera" size={20} style={tailwind(``)} />
            </TouchableOpacity>
          )}
        </Avatar>
      </View>
    </View>
  );
};

export default UploadProfile;
