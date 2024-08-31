import * as React from "react";
import tailwind from "../../tailwind";
import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome, Foundation, Feather } from "@expo/vector-icons";
import { AppContext } from "../../contexts/index";
import ChangeImage from "../../popups/ChangeImage";
import { generateUUID } from "../../utils";
import { any, func, string } from "prop-types";
import AddMember from "../../popups/AddMember";

const ItemControl = ({ iconName, iconUI, label, handleClick }) => {
  const Component = iconUI;
  return (
    <TouchableOpacity onPress={() => handleClick?.()}>
      <View
        style={tailwind(
          `w-10 h-10 rounded-full bg-gray-200 rounded-full flex justify-center items-center`
        )}
      >
        <Component name={iconName} size={22} color="black" />
      </View>
      <Text style={tailwind(`text-xs text-gray-700 text-center mt-2`)}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

ItemControl.propTypes = {
  iconName: string,
  iconUI: any,
  label: string,
  handleClick: func,
};

const Control = () => {
  const {
    state: { popup, groupCurrent },
    updateData,
  } = React.useContext(AppContext);
  return (
    <>
      {groupCurrent?.members?.length > 2 && (
        <TouchableOpacity
          onPress={() =>
            updateData("popup", [
              ...popup,
              {
                id: generateUUID(),
                ui: ChangeImage,
                payload: {},
              },
            ])
          }
        >
          <Text style={tailwind(`text-center font-bold text-primary`)}>
            Change name or image
          </Text>
        </TouchableOpacity>
      )}
      <View
        style={tailwind(
          `p-3 mb-3 mt-8 flex-row justify-center items-center gap-8`
        )}
      >
        <ItemControl iconName="phone" iconUI={FontAwesome} label="Audio" />
        <ItemControl iconName="video" iconUI={Foundation} label="Video" />
        {groupCurrent?.members?.length > 2 ? (
          <ItemControl
            handleClick={() => {
              updateData("popup", [
                ...popup,
                {
                  id: generateUUID(),
                  ui: AddMember,
                  payload: {
                    current: (groupCurrent?.members || [])?.map(
                      (item) => item?.user
                    ),
                  },
                },
              ]);
            }}
            iconUI={Feather}
            iconName="user-plus"
            label="Add"
          />
        ) : (
          <ItemControl iconName="user" iconUI={FontAwesome} label="Profile" />
        )}

        <ItemControl iconName="bell" iconUI={FontAwesome} label="Mute" />
      </View>
    </>
  );
};

export default Control;
