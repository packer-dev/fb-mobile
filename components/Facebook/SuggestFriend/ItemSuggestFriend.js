import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import tailwind from '../../../tailwind';
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width - 120;

const ItemSuggestFriend = () => {
  return (
    <View
      style={{
        ...tailwind(`rounded-lg border border-gray-200 flex-col gap-2`),
        width,
      }}>
      <Image
        source={{ uri: `https://picsum.photos/536/354` }}
        style={tailwind(`w-full h-72 rounded-lg`)}
      />
      <Text style={tailwind(`font-bold px-3`)}>Packer Tra</Text>
      <Text style={tailwind(`text-gray-600 text-sm px-3`)}>1 mutual friend</Text>
      <View style={tailwind(`flex-row gap-2 px-3 mb-3`)}>
        <TouchableOpacity
          style={tailwind(
            `flex-row justify-center items-center gap-2 font-bold p-3 flex-1 bg-blue-500 rounded-lg`
          )}>
          <AntDesign name="adduser" size={24} color="white" />
          <Text style={tailwind(`font-bold text-white`)}>Add friend</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind(
            `flex-row justify-center items-center gap-2 font-bold px-4 py-3 bg-gray-300 rounded-lg`
          )}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemSuggestFriend;
