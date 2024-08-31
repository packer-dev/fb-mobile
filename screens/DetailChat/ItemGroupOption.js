import { func, node, string } from "prop-types";
import tailwind from "../../tailwind";
import { View, Text, TouchableOpacity } from "react-native";

const ItemGroupOption = ({ name, children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      style={tailwind(`flex-row py-3 border-b border-gray-200 items-center`)}
    >
      <View>{children}</View>
      <Text style={tailwind(`text-base flex-1 pl-5`)}>{name}</Text>
    </TouchableOpacity>
  );
};

ItemGroupOption.propTypes = {
  name: string,
  children: node,
  onPress: func,
};

export default ItemGroupOption;
