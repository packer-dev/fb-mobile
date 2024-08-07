import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from '../../tailwind';
import { AntDesign } from '@expo/vector-icons';
import Avatar from '../../components/Avatar';
import GroupAvatar from '../../components/GroupAvatar';
import { AppContext } from '../../contexts/index';

const ItemGroup = ({ handleClick, group }) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const person =
    group?.members?.length === 2
      ? group.members?.find((item) => item?.user?.id !== user?.id)
      : group?.members?.length > 2
      ? group
      : { name: 'Group name' };
  //
  return (
    <TouchableOpacity
      onPress={() => handleClick && handleClick()}
      style={tailwind(`flex-row gap-2 items-center`)}>
      {person.members ? (
        <GroupAvatar group={group} size={16} child={7} />
      ) : (
        <Avatar size={16} uri={person?.user?.avatar} />
      )}
      <View style={tailwind(`flex-1`)}>
        <Text style={tailwind(`font-semibold text-lg pr-6`)} numberOfLines={1} >
          {person?.members?.length > 2
            ? person?.name ||
              person.members.map((item) => item?.user?.name).join(', ')
            : person?.user?.name}
        </Text>
        <Text style={tailwind(`text-gray-700 mt-1 text-sm`)}>
          {group?.lastMessage?.user?.id === user?.id ? 'You:' : ''}
          {group?.lastMessage?.content} - 9:40 AM
        </Text>
      </View>
      <AntDesign name="checkcircle" size={16} color="gray" />
    </TouchableOpacity>
  );
};

export default ItemGroup;
