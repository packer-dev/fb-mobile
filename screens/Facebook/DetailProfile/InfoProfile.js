import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from '../../../tailwind';
import { Entypo, AntDesign, Fontisto } from '@expo/vector-icons';

const DetailProfile = ({ navigation }) => {
  const show = false;
  return (
    <View style={tailwind(`px-3 mt-5`)}>
      <Text style={tailwind(`font-bold text-2xl mt-12 mb-1.5`)}>
        Packer Tra
      </Text>
      <View style={tailwind(`flex-row gap-1 mt-1`)}>
        <Text style={tailwind(`font-bold`)}>1.8k</Text>
        <Text style={tailwind(`text-gray-500 text-sm`)}>friends</Text>
        <Text style={tailwind(`-mt-1 font-bold`)}>.</Text>
        <Text style={tailwind(`font-bold`)}>1</Text>
        <Text style={tailwind(`text-gray-500 text-sm`)}>manual friends</Text>
      </View>
      <Text style={tailwind(`py-1`)}>💪</Text>

      {show ? (
        <>
          <TouchableOpacity
            style={tailwind(
              `w-full h-11 rounded-lg mt-2 mb-1 flex-row justify-center items-center bg-primary`
            )}>
            <Entypo name="plus" size={24} style={tailwind(`text-white`)} />
            <Text style={tailwind(`text-white font-bold`)}>Add story</Text>
          </TouchableOpacity>
          <View style={tailwind(`flex-row gap-1`)}>
            <TouchableOpacity
              style={tailwind(
                `flex-1 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
              )}>
              <Entypo name="plus" size={24} style={tailwind(`text-gray-800`)} />
              <Text style={tailwind(`text-gray-800 font-bold`)}>
                Edit personal profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation && navigation.navigate('ToolbarProfile')
              }
              style={tailwind(
                `p-2 w-11 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
              )}>
              <Entypo name="dots-three-horizontal" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={tailwind(`flex-row gap-2 py-2`)}>
          <TouchableOpacity
            style={tailwind(
              `flex-1 h-11 rounded-lg mb-2 flex-row gap-3 justify-center items-center bg-primary`
            )}>
            <AntDesign
              name="adduser"
              size={24}
              style={tailwind(`text-white`)}
            />
            <Text style={tailwind(`text-white font-bold`)}>Add friend</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              `flex-1 h-11 rounded-lg mb-2 flex-row gap-3 justify-center items-center bg-gray-400`
            )}>
            <Fontisto
              name="messenger"
              size={24}
              style={tailwind(`text-gray-800`)}
            />
            <Text style={tailwind(`text-gray-800 font-bold`)}>
              Send message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate('ToolbarProfile')}
            style={tailwind(
              `p-2 w-11 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
            )}>
            <Entypo name="dots-three-horizontal" size={18} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DetailProfile;
