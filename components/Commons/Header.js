import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tailwind from "../../tailwind";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { bool, string } from "prop-types";

const Header = ({
  title,
  hiddenSearch,
  customSearch = { icon: AntDesign, name: "search1" },
  handle = () => "",
}) => {
  const navigation = useNavigation();
  const Icon = customSearch.icon;
  return (
    <View
      style={tailwind(
        `flex-row px-3 gap-3 items-center justify-between bg-white py-3`
      )}
    >
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={tailwind(`font-bold text-lg text-gray-700`)}>{title}</Text>
      {hiddenSearch ? (
        <View></View>
      ) : (
        <TouchableOpacity
          onPress={() => (handle ? handle() : navigation.goBack(null))}
        >
          <Icon name={customSearch.name} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

Header.propTypes = {
  title: string,
  hiddenSearch: bool,
};

export default Header;
