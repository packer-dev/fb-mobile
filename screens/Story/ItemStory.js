import * as React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import tailwind from '../../tailwind';
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width - 36;

const ItemStory = ({ isNew, auto }) => {
  return (
    <View
      style={{
        ...tailwind(`relative shadow h-${auto ? '44' : '60'}`),
        width: width / (auto ? 3 : 2) - (auto ? 10 : 0),
      }}>
      <Image
        style={tailwind(`w-full h-full rounded-lg`)}
        source={{ uri: `https://picsum.photos/536/354` }}
      />
      {isNew ? (
        <TouchableOpacity
          style={tailwind(`w-10 h-10 rounded-full bg-white shadow border border-gray-200 absolute top-3 left-3 justify-center 
        items-center`)}>
          <AntDesign name="plus" size={20} color="gray" />
        </TouchableOpacity>
      ) : (
        <Image
          source={{ uri: `https://picsum.photos/536/354` }}
          style={tailwind(`w-10 h-10 rounded-full bg-white shadow border-4 border-primary p-2 absolute top-3 left-3 justify-center 
        items-center`)}
        />
      )}
      <Text
        style={tailwind('text-white absolute bottom-3 left-3 font-semibold')}>
        Add story
      </Text>
    </View>
  );
};

export default ItemStory;
