import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from '../../tailwind';
import { AntDesign, Fontisto } from '@expo/vector-icons';

const Header = ({ navigation }) => {
  return (
    <View style={tailwind(`flex-row justify-between items-center px-3 pb-3 border-b border-gray-200`)}>
      <Text style={tailwind(`font-bold text-3xl text-primary`)}>facebook</Text>
      <View style={tailwind(`flex-row gap-3`)}>
        <TouchableOpacity
          style={tailwind(
            `w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center`
          )}>
          <AntDesign name="plus" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind(
            `w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center`
          )}>
          <AntDesign name="search1" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation && navigation.navigate('MessageList')}
          style={tailwind(
            `w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center`
          )}>
          <Fontisto name="messenger" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
