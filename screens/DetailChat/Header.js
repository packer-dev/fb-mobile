import tailwind from '../../tailwind';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Avatar from '../../components/Avatar';
import GroupAvatar from '../../components/GroupAvatar';
import { useNavigation } from '@react-navigation/native';

const Header = ({ friend, group }) => {
  const navigation = useNavigation();
  return (
    <View style={tailwind(`relative mt-3`)}>
      <TouchableOpacity
        style={tailwind(`absolute top-0 left-3`)}
        onPress={() => navigation.navigate('Main', { group })}>
        <AntDesign name="left" size={24} />
      </TouchableOpacity>
      <View style={tailwind(`flex-col gap-1 justify-center mx-auto mt-5`)}>
        {group?.members ? (
          <GroupAvatar group={group} size={24} child={10} />
        ) : (
          <Avatar size={24} uri={friend?.avatar} />
        )}
        <Text
          style={tailwind(`font-bold text-lg text-center mt-1 px-3`)}
          numberOfLines={1}>
          {group?.members?.length > 2
            ? group?.name ||
              group?.members?.map((item) => item?.user?.name).join(', ')
            : friend?.name}
        </Text>
        <Text
          style={tailwind(`font-semibold text-gray-400 text-center text-xs`)}>
          Messenger
        </Text>
      </View>
    </View>
  );
};

export default Header;
