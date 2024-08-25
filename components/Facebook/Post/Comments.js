import * as React from 'react';
import { View } from 'react-native';
import tailwind from '../../../tailwind';
import ItemComment from './ItemComment';

const Comments = ({ list = [] }) => {
  return (
    <View style={tailwind(`flex-col gap-2 px-3`)}>
      {list.map((item) => (
        <ItemComment key={item.id} comment={item} />
      ))}
    </View>
  );
};

export default Comments;
