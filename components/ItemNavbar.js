import { TouchableOpacity, View, Text } from 'react-native';
import tailwind from '../tailwind';

const ItemNavbar = ({ current, navbar, isMessenger, width, navigation }) => {
  const Icon = navbar.iconComponent;
  return (
    <TouchableOpacity
      onPress={() => navigation && navigation.navigate(navbar.route)}
      style={{
        ...tailwind(isMessenger ? `w-1/2` : ``),
        ...(width ? { width } : {}),
      }}>
      <View
        style={tailwind(
          `relative flex-col ${
            isMessenger ? '' : 'gap-2'
          } justify-center items-center self-center`
        )}>
        <Icon
          name={navbar.iconName}
          size={24}
          style={tailwind(
            `${current === navbar.route ? `text-primary` : 'text-gray-700'} ${
              isMessenger ? '' : 'h-7 self-center'
            }`
          )}
        />
        <Text
          style={tailwind(
            `${current === navbar.route ? `text-primary` : 'text-gray-700'} ${
              isMessenger ? '' : 'text-xs'
            }`
          )}>
          {navbar.name}
        </Text>
        {isMessenger && (
          <View
            style={tailwind(
              `w-2.5 h-2.5 rounded-full bg-red-500 absolute -top-1.5 mt-0.5 -right-1.5 z-10`
            )}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ItemNavbar;
