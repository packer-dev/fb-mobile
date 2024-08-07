import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from '../../../tailwind';
import ItemMediaList from './ItemMediaList';

const MediaList = () => {
  return (
    <View style={tailwind(`flex-col gap-3 p-3`)}>
      <View style={tailwind(`flex-row justify-between items-center`)}>
        <View>
          <Text style={tailwind(`font-bold mb-1`)}>Friends</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>1.234 friends.</Text>
        </View>
        <Text style={tailwind(`text-primary`)}>View all</Text>
      </View>
      <View style={tailwind(`flex-row flex-wrap gap-2`)}>
        {Array(9)
          .fill(1)
          .slice(0, 9)
          .map((item, index) => (
            <ItemMediaList key={index} />
          ))}
      </View>
      <TouchableOpacity style={tailwind(`bg-gray-300 p-3 w-full`)}>
        <Text style={tailwind(`font-bold text-center`)}>View all friends</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MediaList;
