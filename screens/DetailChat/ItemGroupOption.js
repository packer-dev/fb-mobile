import tailwind from '../../tailwind';
import { View, Text, TouchableOpacity } from 'react-native';

const ItemGroupOption = ({ name, children }) => {
  return (
    <TouchableOpacity
      style={tailwind(
        `flex-row py-3 border-b border-gray-200 items-center`
      )}>
      <View>{children}</View>
      <Text style={tailwind(`text-base flex-1 pl-5`)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ItemGroupOption;
