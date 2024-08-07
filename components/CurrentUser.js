import { View, Text } from 'react-native';
import tailwind from '../tailwind';
import { Entypo, AntDesign } from '@expo/vector-icons';

const CurrentUser = ({ message }) => {
  return (
    <>
      <Text style={tailwind(`text-gray-500 text-xs text-center`)}>21:32</Text>
      <View style={tailwind(`ml-auto w-10/12 flex-row gap-2 justify-end items-end`)}>
        <View style={tailwind(`ml-auto bg-blue-700 p-3 rounded-lg`)}>
          <Text style={tailwind(`text-white`)}>
            {message.content}
          </Text>
        </View>
        {message.loading ? (
          <Entypo name="circle" size={14} color="gray" style={tailwind(`mb-1`)} />
        ) : (
          <AntDesign name="checkcircle" size={14} color="gray" style={tailwind(`mb-1`)} />
        )}
      </View>
    </>
  );
};

export default CurrentUser;
