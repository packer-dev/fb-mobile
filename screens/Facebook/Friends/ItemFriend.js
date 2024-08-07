import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tailwind from '../../../tailwind';
import Avatar from '../../../components/Avatar';

const ItemFriend = () => {
  return (
    <View style={tailwind(`flex-row items-center gap-3`)}>
      <Avatar size={20} />
      <View style={tailwind(`flex-1 flex-col gap-1.5 mt-1`)}>
        <View style={tailwind(`flex-row gap-3 justify-between items-center`)}>
          <Text style={tailwind(`font-bold`)}>Packer Tra</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>Just now</Text>
        </View>
        <View style={tailwind(`flex-row flex-1 gap-3`)}>
          <TouchableOpacity
            style={tailwind(
              `bg-primary flex-row flex-1 h-10 items-center justify-center rounded-lg`
            )}>
            <Text style={tailwind(`text-white font-bold`)}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              `bg-gray-300 flex-row px-6 h-10 items-center justify-center rounded-lg`
            )}>
            <Text style={tailwind(`font-bold`)}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemFriend;
