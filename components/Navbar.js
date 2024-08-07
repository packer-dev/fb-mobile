import * as React from 'react';
import tailwind from '../tailwind';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = ({ navigation, current }) => {
  return (
    <View style={tailwind(`py-3 border-t border-gray-300 flex-row`)}>
      <TouchableOpacity
        onPress={() => navigation && navigation.navigate('MessageList')}
        style={tailwind(`w-1/2`)}>
        <View
          style={tailwind(
            `relative flex-col gap-2 justify-center items-center self-center`
          )}>
          <Ionicons
            name="chatbubble"
            size={24}
            style={tailwind(
              current === 'MessageList'
                ? `text-primary`
                : 'text-gray-500'
            )}
          />
          <Text
            style={tailwind(
              current === 'MessageList'
                ? `text-primary`
                : 'text-gray-500'
            )}>
            Chats
          </Text>
          <View
            style={tailwind(
              `w-2.5 h-2.5 rounded-full bg-red-500 absolute -top-1.5 mt-0.5 -right-1.5 z-10`
            )}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation && navigation.navigate('Story')}
        style={tailwind(`w-1/2`)}>
        <View
          style={tailwind(
            `relative flex-col justify-center items-center self-center`
          )}>
          <Ionicons
            name="book-sharp"
            size={24}
            style={tailwind(
              current === 'Story'
                ? `text-primary`
                : 'text-gray-500'
            )}
          />
          <Text
            style={tailwind(
              current === 'Story'
                ? `text-primary`
                : 'text-gray-500'
            )}>
            Story
          </Text>
          <View
            style={tailwind(
              `w-2.5 h-2.5 rounded-full bg-red-500 absolute -top-1.5 mt-0.5 -right-1.5 z-10`
            )}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
