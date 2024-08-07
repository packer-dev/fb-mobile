import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from '../../../tailwind';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const Header = ({ navigation }) => {
  return (
    <View style={tailwind(`flex-row justify-between items-center py-2 px-3`)}>
      <AntDesign
        name="left"
        size={24}
        color="black"
        onPress={() => navigation && navigation.navigate('Profile')}
      />
      <View style={tailwind(`flex-row gap-2 items-center`)}>
        <Text style={tailwind(`font-semibold`)}>Packer Tra</Text>
        <Text
          style={tailwind(`text-xs rounded-full text-white bg-red-500 p-1`)}>
          +99
        </Text>
        <AntDesign name="caretdown" size={10} color="black" />
      </View>
      <View style={tailwind(`flex-row gap-5`)}>
        <TouchableOpacity>
          <FontAwesome name="pencil" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
