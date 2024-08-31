import { View, Text } from "react-native";
import tailwind from "../../tailwind";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Animation from "../Commons/Animation";
import { object } from "prop-types";
import moment from "moment";

const CurrentUser = ({ message, lastMessage }) => {
  return (
    <>
      {message?.content?.type !== 3 && lastMessage?.id === message?.id && (
        <Text style={tailwind(`text-gray-700 text-xs text-center`)}>
          {moment(message?.time_created).fromNow()}
        </Text>
      )}
      {message?.content?.type === 3 && (
        <Text style={tailwind(`text-gray-600 font-semibold text-center`)}>
          You {message?.content?.text}
        </Text>
      )}
      {message?.content?.type !== 3 && (
        <View
          style={tailwind(
            `ml-auto w-10/12 flex-row gap-2 justify-end items-end`
          )}
        >
          {message?.content?.type === 1 ? (
            <View
              style={tailwind(
                `ml-auto ${
                  message?.content?.type === 1 ? "bg-primary" : ""
                } p-3 rounded-lg`
              )}
            >
              <Text style={tailwind(`text-white`)}>
                {message.content?.text}
              </Text>
            </View>
          ) : (
            <Animation sticker={JSON.parse(message?.content?.text)} />
          )}
          {message.loading ? (
            <Entypo
              name="circle"
              size={14}
              color="gray"
              style={tailwind(`mb-1`)}
            />
          ) : (
            <AntDesign
              name="checkcircle"
              size={14}
              color="gray"
              style={tailwind(`mb-1`)}
            />
          )}
        </View>
      )}
    </>
  );
};

CurrentUser.propTypes = {
  message: object,
  lastMessage: object,
};

export default CurrentUser;
