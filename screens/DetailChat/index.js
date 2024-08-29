import Wrapper from "../Wrapper";
import tailwind from "../../tailwind";
import { View, Text } from "react-native";
import Header from "./Header";
import Control from "./Control";
import ItemGroupOption from "./ItemGroupOption";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const DetailChat = ({ route: { params } }) => {
  const [group, setGroup] = React.useState(params?.group);
  return (
    <Wrapper>
      <Header friend={params?.friend} group={group} />
      <Control group={group} setGroup={setGroup} />
      <View style={tailwind(`p-3`)}>
        <ItemGroupOption name="Color">
          <View
            style={tailwind(
              `w-6 h-6 rounded-full bg-primary flex justify-center items-center`
            )}
          >
            <View style={tailwind(`w-2 h-2 rounded-full bg-white`)} />
          </View>
        </ItemGroupOption>
        <ItemGroupOption name="Emoji">
          <Text style={tailwind(`text-xl`)}>{group?.data?.emoji}</Text>
        </ItemGroupOption>
        <ItemGroupOption name="Nickname">
          <Ionicons name="text" size={18} color="black" />
        </ItemGroupOption>
        <Text style={tailwind(`text-gray-500 font-semibold text-md py-3`)}>
          MORE ACTIONS
        </Text>
      </View>
    </Wrapper>
  );
};

export default DetailChat;
