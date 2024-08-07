import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from '../../../tailwind';
import Header from './Header';
import Content from './Content';
import Toolbar from './Toolbar';

const Post = () => {
  return (
    <View style={tailwind(`py-1 bg-gray-300 -mt-1`)}>
      <View style={tailwind(`bg-white p-3 flex-col gap-3`)}>
        <Header />
        <Content />
        <Toolbar />
      </View>
    </View>
  );
};

export default Post;
