import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import tailwind from '../tailwind';
import { AppContext } from '../contexts/index';
import Avatar from './Avatar';
import GroupAvatar from './GroupAvatar';

const Header = ({ navigation, group, friend }) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const obj =
    group?.members?.length === 2
      ? group?.members?.find((item) => item?.user?.id !== user?.id)?.user
      : friend ||
        group || {
          name: 'Group',
        };
  //
  return (
    <View
      style={tailwind(
        `flex-row py-2 items-center border-b border-gray-200`
      )}>
      <View style={tailwind(`flex-row gap-4 items-center flex-1`)}>
        <TouchableOpacity
          onPress={() => navigation && navigation.navigate('MessageList')}>
          <AntDesign name="left" size={24} style={tailwind(`text-primary`)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailChat', { group, friend: obj })
          }
          style={tailwind(`flex-row gap-2 items-center`)}>
          {obj?.members?.length > 2 ? (
            <GroupAvatar group={obj} size={10} />
          ) : (
            <Avatar size={10} uri={obj?.avatar} />
          )}
          <View style={tailwind(`pl-1.5 flex-1`)}>
            <Text style={tailwind(`font-semibold flex-1 pr-12`)} numberOfLines={1}>
              {obj?.members?.length > 2
                ? obj?.name || obj.members.map((item) => item?.user?.name).join(", ")
                : obj?.name}
            </Text>
            <View style={tailwind(`flex-row gap-2 items-center mt-0.5`)}>
              <View
                style={tailwind(`w-2 h-2 rounded-full bg-green-500`)}></View>
              <Text>Online</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tailwind(`flex-row gap-4 items-center pr-3`)}>
        <MaterialIcons name="call" size={24} style={tailwind(`text-primary`)} />
        <Feather name="video" size={24} style={tailwind(`text-primary`)} />
      </View>
    </View>
  );
};

export default Header;
