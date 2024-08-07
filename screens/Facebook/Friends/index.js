import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from '../../../tailwind';
import { AntDesign } from '@expo/vector-icons';
import ItemFriend from './ItemFriend';
import Container from '../Container';

const Friends = ({ navigation, route }) => {
  return (
    <Container scrollView navigation={navigation} route={route}>
      <View
        style={tailwind(
          `justify-between pb-3 flex-row border-b border-gray-300 px-3`
        )}>
        <View>
          <Text style={tailwind(`font-bold mb-2 text-lg`)}>Friends</Text>
          <View style={tailwind(`flex-row gap-3`)}>
            <TouchableOpacity
              style={tailwind(`px-3 py-2 rounded-full bg-gray-300`)}>
              <Text style={tailwind(`font-bold`)}>Suggestion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tailwind(`px-3 py-2 rounded-full bg-gray-300`)}>
              <Text style={tailwind(`font-bold`)}>Friend</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={tailwind(
            `w-10 h-10 rounded-full flex-row justify-center items-center bg-gray-300`
          )}>
          <AntDesign name="search1" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={tailwind(`flex-row justify-between items-center p-3`)}>
        <Text style={tailwind(`font-bold`)}>Request friends</Text>
        <Text style={tailwind(`text-primary`)}>View all</Text>
      </View>
      <View style={tailwind(`mt-2 gap-6 flex-col px-3`)}>
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
      </View>
    </Container>
  );
};

export default Friends;
