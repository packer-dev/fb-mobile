import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from '../../../tailwind';
import Avatar from '../../Avatar';
import { Entypo, Feather, FontAwesome6 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={tailwind(`flex-row gap-3`)}>
      <View style={tailwind(`flex-1 flex-row gap-3 items-center`)}>
        <Avatar size={11} />
        <View style={tailwind(`flex-1 flex-col gap-1`)}>
          <Text style={tailwind(`font-semibold`)}>Packer Tra</Text>
          <View style={tailwind(`flex-row items-center gap-3`)}>
            <Text style={tailwind(`text-gray-600 text-sm`)}>1 hour.</Text>
            <FontAwesome6 name="earth-africa" size={12} color="gray" />
          </View>
        </View>
      </View>
      <View style={tailwind(`flex-row gap-3 items-center`)}>
        <Entypo name="dots-three-horizontal" size={20} color="gray" />
        <Feather name="x" size={20} color="gray" />
      </View>
    </View>
  );
};

export default Header;
