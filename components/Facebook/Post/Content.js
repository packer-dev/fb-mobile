import * as React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import tailwind from '../../../tailwind';

const Content = () => {
  return (
    <View style={tailwind(`flex-col gap-3 pb-3 border-b border-gray-300`)}>
      <Text>
        It's like remembering your last birthday party or a fun day at the park
        and feeling warm and happy inside because it was so much fun. It's like
        a nice memory hug from the past!
      </Text>
      <Image
        source={{ uri: `https://picsum.photos/536/354` }}
        style={tailwind(`w-full h-60 mx-auto rounded-sm`)}
      />
    </View>
  );
};

export default Content;
