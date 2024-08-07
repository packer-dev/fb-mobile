import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import tailwind from '../tailwind';
import Popup from './Popup';
import Avatar from '../components/Avatar';
import Search from '../screens/MessageList/Search';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import NewMessage from './NewMessage';
import { AppContext } from '../contexts/index';
import { generateUUID } from '../utils';

const NewGroup = ({ navigation }) => {
  const {
    state: { friends, user },
    updateData,
  } = React.useContext(AppContext);
  const [selected, setSelected] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [nameGroup, setNameGroup] = React.useState('');
  const group = {
    id: '',
    name: nameGroup,
    members: [
      {
        id: generateUUID(),
        nickname: '',
        user,
        isOwner: true,
      },
      ...[...selected].map((item) => ({
        id: generateUUID(),
        nickname: '',
        user: item,
        isOwner: false,
      })),
    ],
    lastMessage: null,
  };
  return (
    <Popup
      title="New group"
      ui={<NewMessage />}
      disabled={{
        done: !selected.length,
        cancel: false,
      }}
      handleDone={() => {
        navigation &&
          navigation.navigate('Main', {
            group,
          });
        updateData('popup', {
          ui: null,
          payload: {},
        });
      }}>
      <View style={tailwind(`px-3 mt-3`)}>
        <TextInput
          style={tailwind(`flex-1 p-3 bg-gray-200`)}
          placeholder="Name group (Don't required)"
          placeholderTextColor="gray"
          value={nameGroup}
          onChangeText={setNameGroup}
        />
      </View>
      <Search search={search} setSearch={setSearch} />
      <View style={tailwind(`p-3 flex-col gap-3`)}>
        <Text style={tailwind(`text-gray-600 font-semibold my-2`)}>
          Suggestion
        </Text>
        {friends
          ?.filter((friend) =>
            search
              ? friend?.name?.toLowerCase().indexOf(search.toLowerCase()) !== -1
              : true
          )
          .map((friend) => (
            <View
              key={friend.id}
              style={tailwind(`flex-row gap-4 items-center`)}>
              <View style={tailwind(`flex-1 flex-row gap-4 items-center`)}>
                <Avatar size={14} uri={friend?.avatar} />
                <Text style={tailwind(`font-semibold`)}>{friend.name}</Text>
              </View>
              <BouncyCheckbox
                isChecked={selected.find((item) => item.id === friend.id)}
                onPress={(isChecked) => {
                  if (isChecked) {
                    setSelected([...selected, friend]);
                  } else {
                    setSelected(
                      [...selected].filter((item) => item.id !== friend.id)
                    );
                  }
                }}
                style={tailwind(`w-7 h-7 rounded-sm`)}
              />
            </View>
          ))}
      </View>
    </Popup>
  );
};

export default NewGroup;
