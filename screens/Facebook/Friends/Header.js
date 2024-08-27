import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tailwind from "../../../tailwind";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={tailwind(
        `justify-between pb-3 flex-row border-b border-gray-300 px-3`
      )}
    >
      <View>
        <Text style={tailwind(`font-bold mb-4 text-lg`)}>Friends</Text>
        <View style={tailwind(`flex-row gap-3`)}>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate("SuggestFriend")}
            style={tailwind(`px-3 py-3 rounded-full bg-gray-300`)}
          >
            <Text style={tailwind(`font-bold`)}>Suggestion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate("ListFriend")}
            style={tailwind(`px-3 py-3 rounded-full bg-gray-300`)}
          >
            <Text style={tailwind(`font-bold`)}>Friend</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate("RequestFriend")}
            style={tailwind(`px-3 py-3 rounded-full bg-gray-300`)}
          >
            <Text style={tailwind(`font-bold`)}>Request</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation && navigation.navigate("SearchUser")}
        style={tailwind(
          `w-10 h-10 rounded-full flex-row justify-center items-center bg-gray-300`
        )}
      >
        <AntDesign name="search1" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
