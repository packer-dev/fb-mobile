import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tailwind from '../../../tailwind';
import ItemSuggestFriend from './ItemSuggestFriend';
import { Entypo, Feather } from '@expo/vector-icons';

const SuggestFriend = () => {
  return (
    <View style={tailwind(`py-1 bg-gray-300 -mt-1`)}>
      <View style={tailwind(`bg-white p-3 flex-col gap-3`)}>
        <View style={tailwind(`flex-row items-center`)}>
          <Text style={tailwind(`font-bold flex-1`)}>
            Friends which are know
          </Text>
          <View style={tailwind(`flex-row gap-3 items-center`)}>
            <Entypo name="dots-three-horizontal" size={20} color="gray" />
            <Feather name="x" size={20} color="gray" />
          </View>
        </View>
        <ScrollView style={tailwind(``)} horizontal showsHorizontalScrollIndicator={false}>
          <View style={tailwind(`flex-row gap-3`)}>
            <ItemSuggestFriend />
            <ItemSuggestFriend />
            <ItemSuggestFriend />
            <ItemSuggestFriend />
            <ItemSuggestFriend />
            <ItemSuggestFriend />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SuggestFriend;
