import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tailwind from "../../../tailwind";
import Avatar from "../../../components/Avatar";
import Loading from "../../../components/Loading";
import { sendRelationship } from "../../../apis/userAPIs";
import { AppContext } from "../../../contexts/index";
import IconButton from "../../../components/IconButton";
import { AntDesign } from "@expo/vector-icons";

const ItemFriend = ({ friend, update, isSuggest }) => {
  const {
    state: { user, trigger },
    updateData,
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(false);
  const handle = async (status) => {
    setLoading(true);
    await sendRelationship({
      user1: user?.id,
      user2: friend?.user?.id,
      status,
    });
    update && update(friend?.user?.id);
    updateData("trigger", { ...trigger, suggestFriend: Math.random() });
    setLoading(false);
  };
  return (
    <View style={tailwind(`flex-row items-center gap-3 relative`)}>
      {loading && <Loading isFirst size="small" />}
      <Avatar size={20} uri={friend?.user?.avatar} />
      <View style={tailwind(`flex-1 flex-col gap-1.5 mt-1`)}>
        <View style={tailwind(`flex-row gap-3 justify-between items-center`)}>
          <Text style={tailwind(`font-bold`)}>{friend?.user?.name}</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>Just now</Text>
        </View>
        <View style={tailwind(`flex-row flex-1 gap-3 mt-1`)}>
          <IconButton
            onPress={() => handle(isSuggest ? "send" : "accept")}
            iconName="adduser"
            IconContainer={AntDesign}
            text={isSuggest ? "Add friend" : "Confirm"}
            size={24}
            styles={`p-3 h-10 flex-1 ${
              isSuggest ? "bg-primary" : "bg-primary"
            } justify-center`}
            haveBackground
            hiddenIcon={!isSuggest}
          />
          <TouchableOpacity
            onPress={() => handle("")}
            style={tailwind(
              `bg-gray-300 flex-row px-6 h-10 items-center justify-center rounded-lg`
            )}
          >
            <Text style={tailwind(`font-bold`)}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemFriend;
