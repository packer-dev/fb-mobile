import { View, Text } from 'react-native';
import tailwind from '../../tailwind';
import { Entypo, AntDesign } from '@expo/vector-icons';
import Animation from '../Commons/Animation';

const CurrentUser = ({ message }) => {
  return (
    <>
      <Text style={tailwind(`text-gray-500 text-xs text-center`)}>21:32</Text>
      <View
        style={tailwind(
          `ml-auto w-10/12 flex-row gap-2 justify-end items-end`
        )}>
        {message?.content?.type === 1 ? (
          <View
            style={tailwind(
              `ml-auto ${
                message?.content?.type === 1 ? 'bg-primary' : ''
              } p-3 rounded-lg`
            )}>
            <Text style={tailwind(`text-white`)}>{message.content?.text}</Text>
          </View>
        ) : (
          <Animation sticker={JSON.parse(message?.content?.text)} />
        )}
        {message.loading ? (
          <Entypo
            name="circle"
            size={14}
            color="gray"
            style={tailwind(`mb-1`)}
          />
        ) : (
          <AntDesign
            name="checkcircle"
            size={14}
            color="gray"
            style={tailwind(`mb-1`)}
          />
        )}
      </View>
    </>
  );
};

export default CurrentUser;
