import * as React from 'react';
import tailwind from '../../tailwind';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import Avatar from '../../components/Avatar';

const ItemStory = ({ friend, navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation &&
        navigation.navigate('Main', {
          friend,
        })
      }>
      <View style={tailwind(`flex-col gap-2 justify-center`)}>
        <Avatar size={14} uri={friend?.avatar} />
        <Text style={tailwind(`text-xs font-semibold text-gray-600 mx-auto`)}>
          {friend.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ItemStory;
