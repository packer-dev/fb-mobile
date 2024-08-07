import {
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Keyboard,
} from 'react-native';
import * as React from 'react';
import tailwind from '../tailwind';
import {
  AntDesign,
  SimpleLineIcons,
  Octicons,
  Feather,
} from '@expo/vector-icons';
import { AppContext } from '../contexts/index';
import { generateUUID } from '../utils';
import { sendMessageAPI } from '../api';

const width = Dimensions.get('window').width - 16;

const Toolbar = ({ friend, group }) => {
  //
  const {
    state: { showKeyboard, messages, socket, user, groupCurrent, groups },
    updateData,
  } = React.useContext(AppContext);
  const [value, setValue] = React.useState('❤');
  const handleSend = async () => {
    const message = {
      id: generateUUID(),
      content: value,
      user,
      loading: true,
      time: '',
    };
    let temp = [...messages, message];
    updateData('messages', [...temp]);
    setValue('');
    Keyboard.dismiss();
    delete message.loading;
    let newGroup = groupCurrent || group ? {
        ...group,
        lastMessage: { ...message },
      } : {
        id: '',
        members: group
          ? group.members
          : [
              {
                id: generateUUID(),
                nickname: '',
                user: friend,
                isOwner: false,
              },
              {
                id: generateUUID(),
                nickname: '',
                user,
                isOwner: false,
              },
            ],
        lastMessage: { ...message },
      };
    await sendMessageAPI({
      message,
      group: newGroup,
    });
    const index = temp.findIndex((item) => item?.id === message?.id);
    if (index === -1) return;
    temp[index].loading = false;
    updateData('messages', [...temp]);
    !groupCurrent && updateData('groupCurrent', group);
    if (newGroup?.id) {
      updateData(
        'groups',
        groups?.map((item) => {
          if (item?.id === group?.id) {
            return { ...group, lastMessage: message };
          }
          return item;
        })
      );
    } else {
      updateData('groups', [...groups, group]);
    }
    socket.emit(`send`, value);
  };
  //
  return (
    <View style={{ ...tailwind(`flex-row gap-4 p-2 items-center`), width }}>
      {showKeyboard && (
        <TouchableOpacity onPress={() => updateData('showKeyboard', false)}>
          <AntDesign name="right" size={24} style={tailwind(`text-primary`)} />
        </TouchableOpacity>
      )}
      {!showKeyboard && (
        <>
          <TouchableOpacity>
            <AntDesign
              name="ellipsis1"
              size={24}
              style={tailwind(`text-primary`)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons
              name="camera"
              size={24}
              style={tailwind(`text-primary`)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Octicons name="image" size={22} style={tailwind(`text-primary`)} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="mic" size={22} style={tailwind(`text-primary`)} />
          </TouchableOpacity>
        </>
      )}
      <View style={tailwind(`flex-1 h-10`)}>
        <TextInput
          placeholder="Aa"
          placeholderTextColor="gray"
          value={value}
          onChangeText={(val) => setValue(val)}
          style={tailwind(`flex-1 p-3 rounded-full bg-gray-200 h-full`)}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity onPress={handleSend}>
        {showKeyboard ? (
          <Feather name="send" size={24} style={tailwind(`text-primary`)} />
        ) : (
          <AntDesign name="like2" size={24} style={tailwind(`text-primary`)} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;
