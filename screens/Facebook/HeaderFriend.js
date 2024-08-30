import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from '../../tailwind';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { string } from 'prop-types';

const HeaderFriend = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={tailwind(
        `flex-row px-3 gap-3 items-center justify-between bg-white py-3`
      )}>
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={tailwind(`font-bold`)}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

HeaderFriend.propTypes = {
  title: string
}

export default HeaderFriend;
