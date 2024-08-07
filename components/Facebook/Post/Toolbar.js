import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from '../../../tailwind';
import { AntDesign, Fontisto, EvilIcons } from '@expo/vector-icons';

const Toolbar = () => {
  return (
    <View style={tailwind(`flex-row gap-3 py-2 items-center justify-between`)}>
      <TouchableOpacity style={tailwind(`mx-auto flex-row gap-2 items-center`)}>
        <AntDesign name="like2" size={20} style={tailwind(`text-gray-700`)} />
        <Text style={tailwind(`font-bold text-gray-700`)}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tailwind(`mx-auto flex-row gap-2 items-center`)}>
        <EvilIcons name="comment" size={28} style={tailwind(`text-gray-700`)} />
        <Text style={tailwind(`font-bold text-gray-700`)}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tailwind(`mx-auto flex-row gap-2 items-center`)}>
        <EvilIcons
          name="share-apple"
          size={28}
          style={tailwind(`text-gray-700`)}
        />
        <Text style={tailwind(`font-bold text-gray-700`)}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tailwind(`mx-auto flex-row gap-2 items-center`)}>
        <EvilIcons
          name="share-google"
          size={28}
          style={tailwind(`text-gray-700`)}
        />
        <Text style={tailwind(`font-bold text-gray-700`)}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;
