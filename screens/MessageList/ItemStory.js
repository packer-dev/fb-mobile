import * as React from "react";
import tailwind from "../../tailwind";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import Avatar from "../../components/Avatar";
import { useNavigation } from "@react-navigation/native";
import { bool, object } from "prop-types";

const ItemStory = ({ friend, loading }) => {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Main", {
        friend,
      })
      }
    >
      <View style={tailwind(`flex-col gap-2 justify-center`)}>
        <Avatar size={14} uri={friend?.avatar} loading={loading} />
        <Text
          style={tailwind(
            `text-xs font-semibold text-gray-600 mx-auto ${loading ? "w-3/4 mx-auto bg-gray-300 h-2 rounded-full" : ""
            }`
          )}
        >
          {!loading ? friend.name : " "}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

ItemStory.propTypes = {
  friend: object,
  loading: bool
}

export default ItemStory;
