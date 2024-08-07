import * as React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Popup from './Popup';
import GroupAvatar from '../components/GroupAvatar';
import tailwind from '../tailwind';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { emojiList } from '../utils';

const width = Dimensions.get('window').width - 64;

const ChangeImage = ({ group }) => {
  return (
    <Popup title="Change image">
      <View style={tailwind(`my-5`)}>
        <GroupAvatar group={group} size={24} child={10} />
      </View>
      <View style={tailwind(`px-8`)}>
        <TextInput style={tailwind(`bg-gray-200 h-12 px-3 rounded-lg`)} />
      </View>

      <View style={tailwind(`flex-row justify-center py-5 gap-12`)}>
        <TouchableOpacity style={tailwind(`flex-col gap-2 justify-center`)}>
          <View
            style={tailwind(
              `w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center`
            )}>
            <Ionicons name="image-outline" size={24} color="black" />
          </View>
          <Text style={tailwind(`text-sm font-semibold`)}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind(`flex-col gap-2 justify-center`)}>
          <View
            style={tailwind(
              `w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center`
            )}>
            <FontAwesome6 name="smile-beam" size={24} color="black" />
          </View>
          <Text style={tailwind(`text-sm font-semibold`)}>Change emoji</Text>
        </TouchableOpacity>
      </View>

      <View style={tailwind(`flex flex-row flex-wrap gap-6 px-8 pt-10`)}>
        {emojiList.map((item) => (
          <TouchableOpacity
            key={item}
            style={{
              ...tailwind(
                `flex justify-center items-center rounded-full border border-gray-300`
              ),
              width: width / 4 - 18,
              height: width / 4 - 18,
            }}>
            <Text style={tailwind(`text-2xl`)}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Popup>
  );
};

export default ChangeImage;
