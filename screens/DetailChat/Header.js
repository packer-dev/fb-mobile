import tailwind from "../../tailwind";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "../../components/Avatar";
import GroupAvatar from "../../components/GroupAvatar";
import { useNavigation } from "@react-navigation/native";
import { object } from "prop-types";
import React from "react";
import { AppContext } from "../../contexts";

const Header = ({ friend }) => {
  const {
    state: { groupCurrent },
  } = React.useContext(AppContext);
  const bigGroup = groupCurrent?.image ? (
    <Avatar size={24} uri={groupCurrent?.image} />
  ) : (
    <GroupAvatar group={groupCurrent} size={24} child={10} />
  );
  const navigation = useNavigation();
  return (
    <View style={tailwind(`relative mt-3`)}>
      <TouchableOpacity
        style={tailwind(`absolute top-0 left-3`)}
        onPress={() => navigation.goBack(null)}
      >
        <AntDesign name="left" size={24} />
      </TouchableOpacity>
      <View style={tailwind(`flex-col gap-1 justify-center mx-auto mt-5`)}>
        {groupCurrent?.members?.length > 2 ? (
          bigGroup
        ) : (
          <Avatar size={24} uri={friend?.avatar} />
        )}
        <Text
          style={tailwind(`font-bold text-lg text-center mt-1 px-3`)}
          numberOfLines={1}
        >
          {groupCurrent?.members?.length > 2
            ? groupCurrent?.name ||
              groupCurrent?.members?.map((item) => item?.user?.name).join(", ")
            : friend?.name}
        </Text>
        <Text
          style={tailwind(
            `font-semibold text-gray-400 text-center text-xs mb-3`
          )}
        >
          Messenger
        </Text>
      </View>
    </View>
  );
};

Header.propTypes = {
  friend: object,
};

export default Header;
