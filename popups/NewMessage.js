import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import tailwind from '../tailwind';
import { MaterialIcons } from '@expo/vector-icons';
import Popup from './Popup';
import Avatar from '../components/Avatar';
import { AppContext } from '../contexts/index';
import NewGroup from './NewGroup';

const NewMessage = ({ navigation }) => {
  const {
    state: { friends },
    updateData,
  } = React.useContext(AppContext);
  return (
    <Popup title="New message">
      <View style={tailwind(`p-3 bg-gray-200 gap-2 flex-row`)}>
        <Text style={tailwind(`text-gray-700`)}>To:</Text>
        <TextInput style={tailwind(`flex-1`)} />
      </View>
      <TouchableOpacity
        onPress={() =>
          updateData('popup', {
            ui: <NewGroup navigation={navigation} />,
            payload: {},
          })
        }
        style={tailwind(`p-3 mt-3 flex-row gap-3 items-center`)}>
        <MaterialIcons name="groups" size={28} color="black" />
        <Text style={tailwind(`font-semibold text-base`)}>
          Create a New Group
        </Text>
      </TouchableOpacity>
      <View style={tailwind(`p-3 flex-col gap-3`)}>
        <Text style={tailwind(`text-gray-600 font-semibold my-2`)}>
          Suggestion
        </Text>
        {friends?.map((friend) => (
          <TouchableOpacity
            onPress={() => {
              navigation &&
                navigation.navigate('Main', {
                  friend,
                });
              updateData('popup', {
                ui: null,
                payload: {},
              });
            }}
            key={friend.id}
            style={tailwind(`flex-row gap-4 items-center`)}>
            <Avatar size={14} uri={friend?.avatar} />
            <Text style={tailwind(`font-semibold`)}>{friend?.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Popup>
  );
};

export default NewMessage;
