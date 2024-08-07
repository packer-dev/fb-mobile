import * as React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import tailwind from '../../../tailwind';

const width = Dimensions.get('window').width - 24;

const ItemMediaList = () => {
  return (
    <View style={{ ...tailwind(`my-1`), width: (width - 16) / 3 }}>
      <Image
        source={{ uri: `https://picsum.photos/536/354` }}
        style={{
          ...tailwind(`rounded-lg`),
          ...{ width: (width - 16) / 3, height: (width - 16) / 3 },
        }}
      />
      <View style={tailwind(`p-1.5 pt-2 pb-1.5 flex-col gap-2`)}>
        <Text style={tailwind(`font-bold`)}>Packer Tra</Text>
        <Text style={tailwind(`text-gray-500 text-sm`)}>1 manual friend</Text>
      </View>
    </View>
  );
};

export default ItemMediaList;
