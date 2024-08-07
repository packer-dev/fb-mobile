import { View, Text, Image } from 'react-native';
import tailwind from '../tailwind';

const Sender = ({ message }) => {
  return (
    <>
      <Text style={tailwind(`text-gray-500 text-xs text-center`)}>21:32</Text>
      <View style={tailwind(`w-11/12 flex-row gap-4 items-end px-3`)}>
        <Image
          source={{ uri: `https://picsum.photos/536/354` }}
          style={tailwind(`w-8 h-8 rounded-full`)}
        />
        <View style={tailwind(`max-w-11/12 flex-col gap-1`)}>
          <View style={tailwind(`flex-row justify-end`)}>
            <View style={tailwind(`ml-auto bg-gray-300 p-3 rounded-lg`)}>
              <Text style={tailwind(`text-gray-900`)}>{message.content}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Sender;
