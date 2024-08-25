import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tailwind from '../../../tailwind';
import Container from '../Container';
import { Feather, AntDesign } from '@expo/vector-icons';
import { AppContext } from '../../../contexts/index';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ navigation }) => {
  const {
    state: { user },
  } = React.useContext(AppContext);

  return (
    <Container navigation={navigation}>
      <View style={tailwind(`flex-row px-3 justify-between`)}>
        <Text style={tailwind(`font-bold text-3xl`)}>Menu</Text>
        <View style={tailwind(`flex-row gap-4 items-center`)}>
          <TouchableOpacity
            style={tailwind(
              `w-10 h-10 rounded-full  justify-center items-center bg-gray-300`
            )}>
            <Feather name="settings" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchUser')}
            style={tailwind(
              `w-10 h-10 rounded-full  justify-center items-center bg-gray-300`
            )}>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation &&
          navigation.navigate('DetailProfile', {
            visit: user,
          })
        }
        style={tailwind(`px-3 mt-5`)}>
        <View
          style={tailwind(
            `border border-gray-200 p-3 rounded-lg flex-row items-center justify-between`
          )}>
          <View style={tailwind(`flex-row gap-3 items-center`)}>
            <Image
              source={{ uri: user?.avatar || `https://picsum.photos/536/354` }}
              style={tailwind(`w-11 h-11 rounded-full mx-auto`)}
            />
            <Text style={tailwind(`font-semibold`)}>{user?.name}</Text>
          </View>
          <View></View>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
