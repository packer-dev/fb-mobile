import { View, TouchableOpacity, Text, Image } from 'react-native';
import tailwind from '../../tailwind';
import navbarList from './navbarList';
import ItemNavbar from '../../components/ItemNavbar';

const Navbar = ({ navigation, route }) => {
  //

  //
  return (
    <View
      style={tailwind(
        `flex-row justify-between px-3 pt-3 border-t border-gray-300`
      )}>
      {navbarList.map((navbar) => (
        <ItemNavbar
          key={navbar.route}
          navbar={navbar}
          navigation={navigation}
          current={route?.name}
        />
      ))}
      <TouchableOpacity
        onPress={() => navigation && navigation.navigate('Profile')}
        style={{
          ...tailwind(``),
        }}>
        <Image
          source={{ uri: `https://picsum.photos/536/354` }}
          style={tailwind(
            `w-8 h-8 border-2 border-black mb-1 rounded-full mx-auto`
          )}
        />
        <View
          style={tailwind(
            `relative flex-col gap-2 justify-center items-center self-center`
          )}>
          <Text style={tailwind(`${'text-gray-700'} text-xs`)}>Menu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
