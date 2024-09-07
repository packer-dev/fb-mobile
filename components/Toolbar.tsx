import {
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Keyboard,
} from "react-native";
import * as React from "react";
import tailwind from "../tailwind";
import {
  AntDesign,
  SimpleLineIcons,
  Octicons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { AppContext } from "../contexts/index";
import { dataFakeGroup, dataFakeMessage } from "../utils";
import { sendMessageAPI } from "../api";
import BoardSticker from "./Commons/BoardSticker";
import { User } from "../interfaces/User";
import { Group } from "../interfaces/Group";
const width = Dimensions.get("window").width - 16;

type ToolbarProps = {
  friend: User;
  keyboardHeight: number;
};

const Toolbar = ({ friend, keyboardHeight }: ToolbarProps) => {
  //
  const {
    state: { showKeyboard, messages, socket, user, groupCurrent, groups },
    updateData,
  } = React.useContext(AppContext);
  const inputRef = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState("❤");
  const [showSticker, setShowSticker] = React.useState(false);
  const handleSend = async (data?: any) => {
    if (!user || !groupCurrent) return;

    const message = dataFakeMessage({
      user,
      type: data ? 2 : 1,
      text: data || value,
    });
    let temp = [...messages, message];
    updateData("messages", [...temp]);
    setValue("");
    setShowSticker(false);
    Keyboard.dismiss();
    delete message.loading;
    let newGroup = dataFakeGroup({
      groupCurrent,
      user,
      friend,
      message,
    });
    try {
      if (!newGroup) return;

      const result = await sendMessageAPI({
        message,
        group: newGroup,
      });
      if (!result?.group || !result?.message) {
        return;
      }
      const index = temp.findIndex((item) => item?.id === message?.id);
      if (index === -1) return;
      temp[index].loading = false;
      updateData("messages", [...temp]);
      !groupCurrent && updateData("groupCurrent", result?.group);
      if (newGroup?.id) {
        updateData(
          "groups",
          groups?.map((item) => {
            if (item?.id === result?.group?.id) {
              return { ...result?.group, last_message: result?.message };
            }
            return item;
          })
        );
      } else {
        updateData("groups", [...groups, result?.group]);
      }
      socket.emit(`send-message`, {
        groupId: result?.group?.id,
        message: result?.message,
      });
    } catch (error) {}
  };
  //
  return (
    <View style={tailwind(`absolute bottom-3 left-0`)}>
      <View style={{ ...tailwind(`flex-row gap-4 p-2 items-center`), width }}>
        {showKeyboard && (
          <TouchableOpacity onPress={() => updateData("showKeyboard", false)}>
            <AntDesign
              name="right"
              size={24}
              style={tailwind(`text-primary`)}
            />
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
              <Octicons
                name="image"
                size={22}
                style={tailwind(`text-primary`)}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="mic" size={22} style={tailwind(`text-primary`)} />
            </TouchableOpacity>
          </>
        )}
        <View
          style={tailwind(`flex-1 h-10 relative p-3 rounded-full bg-gray-300`)}
        >
          <TextInput
            ref={inputRef}
            placeholder="Aa"
            placeholderTextColor="gray"
            value={value}
            onChangeText={(val) => setValue(val)}
            style={tailwind(`flex-1 rounded-full`)}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => {
              if (inputRef.current) {
                if (!Keyboard.isVisible()) {
                  inputRef.current.focus();
                  Keyboard.dismiss();
                }
                setShowSticker(!showSticker);
              }
            }}
            style={tailwind(`absolute bottom-2.5 right-3`)}
          >
            <FontAwesome name="smile-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleSend()}>
          {showKeyboard ? (
            <Feather name="send" size={24} style={tailwind(`text-primary`)} />
          ) : (
            <AntDesign
              name="like2"
              size={24}
              style={tailwind(`text-primary`)}
            />
          )}
        </TouchableOpacity>
      </View>
      {showSticker && !showKeyboard && (
        <BoardSticker
          handle={handleSend}
          keyboardHeight={keyboardHeight}
          width={width}
        />
      )}
    </View>
  );
};

export default Toolbar;
