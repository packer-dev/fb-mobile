import * as React from 'react';
import tailwind from '../../tailwind';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome, Foundation, Feather } from '@expo/vector-icons';
import { AppContext } from '../../contexts/index';
import ChangeImage from '../../popups/ChangeImage';

const ItemControl = ({ iconName, iconUI, label, handleClick }) => {
  const Component = iconUI;
  return (
    <TouchableOpacity onPress={() => handleClick && handleClick()}>
      <View
        style={tailwind(
          `w-10 h-10 rounded-full bg-gray-200 rounded-full flex justify-center items-center`
        )}>
        <Component name={iconName} size={22} color="black" />
      </View>
      <Text style={tailwind(`text-xs text-gray-700 text-center mt-2`)}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Control = ({ group }) => {
  const { updateData } = React.useContext(AppContext);
  return (
    <>
      {group?.members?.length > 2 && (
        <TouchableOpacity
          onPress={() =>
            updateData('popup', {
              ui: <ChangeImage group={group} />,
              payload: {},
            })
          }>
          <Text style={tailwind(`text-center font-bold my-6 text-primary`)}>
            Change name or image
          </Text>
        </TouchableOpacity>
      )}
      <View
        style={tailwind(`p-3 my-3 flex-row justify-center items-center gap-8`)}>
        <ItemControl iconName="phone" iconUI={FontAwesome} label="Audio" />
        <ItemControl iconName="video" iconUI={Foundation} label="Video" />
        {group?.members?.length > 2 ? (
          <ItemControl iconUI={Feather} iconName="user-plus" label="Add" />
        ) : (
          <ItemControl iconName="user" iconUI={FontAwesome} label="Profile" />
        )}

        <ItemControl iconName="bell" iconUI={FontAwesome} label="Mute" />
      </View>
    </>
  );
};

export default Control;
