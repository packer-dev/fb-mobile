import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import tailwind from "../../tailwind";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "../../components/Avatar";
import GroupAvatar from "../../components/GroupAvatar";
import { AppContext } from "../../contexts/index";
import { textStyleLoading } from "../../utils";

const ItemGroup = ({ handleClick, group, loading }) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const person =
    group?.members?.length === 2
      ? group.members?.find((item) => item?.user?.id !== user?.id)
      : group?.members?.length > 2
      ? group
      : { name: "Group name" };
  //
  return (
    <TouchableOpacity
      onPress={() => !loading && handleClick && handleClick()}
      style={tailwind(`flex-row gap-2 items-center`)}
    >
      {loading ? (
        <Avatar size={16} loading={loading} />
      ) : person?.members?.length > 2 ? (
        person?.image ? (
          <Avatar size={16} uri={person?.image} />
        ) : (
          <GroupAvatar group={group} size={16} child={7} />
        )
      ) : (
        <Avatar size={16} uri={person?.user?.avatar} />
      )}
      <View style={tailwind(`flex-1 pr-4`)}>
        <Text
          style={tailwind(
            `font-semibold text-lg pr-6 ${
              loading ? "w-1/2 bg-gray-300 h-3 rounded-full" : ""
            }`
          )}
          numberOfLines={1}
        >
          {loading
            ? ""
            : person?.members?.length > 2
            ? person?.name ||
              person.members.map((item) => item?.user?.name).join(", ")
            : person?.user?.name}
        </Text>
        {loading ? (
          <Text
            style={tailwind("w-3/4 bg-gray-300 h-3 rounded-full mt-3")}
          ></Text>
        ) : (
          <Text
            style={tailwind(
              `${
                group?.last_message?.is_read === false &&
                group?.last_message?.user?.id !== user?.id
                  ? "font-bold"
                  : "text-gray-700"
              } mt-1 text-sm`
            )}
          >
            {group?.last_message?.user?.id === user?.id
              ? "You"
              : group?.last_message?.content?.type !== 1
              ? group?.last_message?.user?.name?.split(" ")[0]
              : ""}
            {group?.last_message?.content?.type === 2
              ? " sent a sticker."
              : `${group?.last_message?.user?.id === user?.id ? ": " : ""}${
                  group?.last_message?.content?.text
                }`}
            {!loading && "- 9:40 AM"}
          </Text>
        )}
      </View>
      {!loading && <AntDesign name="checkcircle" size={16} color="gray" />}
    </TouchableOpacity>
  );
};

export default ItemGroup;
