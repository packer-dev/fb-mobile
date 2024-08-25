import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import tailwind from '../../../tailwind';
import Avatar from '../../../components/Avatar';
const width = Dimensions.get('window').width;
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../../contexts/index';
import PanelInfo from './PanelInfo';
import { useNavigation } from '@react-navigation/native';

const Header = ({ loading }) => {
  const {
    state: { panel },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  return (
    <View style={tailwind('px-3 py-1 bg-black')}>
      <View
        style={[
          tailwind(`relative bg-gray-500 rounded-lg`),
          {
            height: 2,
            width: width - 24,
          },
        ]}>
        {!loading && (
          <View
            style={[
              tailwind(`relative bg-white rounded-lg`),
              {
                height: 2,
                width: width / 2,
              },
            ]}></View>
        )}
      </View>
      {!loading && (
        <View style={tailwind(`flex-row gap-2 py-3 items-center`)}>
          <View style={tailwind(`flex-1 flex-row gap-2 items-center`)}>
            <Avatar size={10} />
            <View style={tailwind(`flex-col gap-2`)}>
              <Text style={tailwind(`font-bold text-white`)}>Packer Tra</Text>
              <View style={tailwind(`flex-row items-center gap-2`)}>
                <Feather name="music" size={14} color="white" />
                <Text style={tailwind(`text-white text-xs`)}>
                  We don't talk any...
                </Text>
              </View>
            </View>
          </View>
          <View style={tailwind(`flex-row gap-4`)}>
            <Entypo
              onPress={() =>
                updateData('panel', { ...panel, ui: <PanelInfo /> })
              }
              name="dots-three-horizontal"
              size={24}
              color="white"
            />
            <Ionicons
              onPress={() => navigation.goBack(null)}
              name="close"
              size={24}
              color="white"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
