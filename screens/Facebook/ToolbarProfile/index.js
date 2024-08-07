import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from '../../../tailwind';
import Container from '../Container';
import { AntDesign } from '@expo/vector-icons';
import { toolbars } from './toolbars';

const ToolbarProfile = ({ navigation, route }) => {
  const IconRender = ({ toolbar }) => {
    const Icon = toolbar.component;
    return <Icon name={toolbar.icon} size={24} color="black" />;
  };
  return (
    <Container navigation={navigation} route={route}>
      <View style={tailwind(`flex-1 flex-col`)}>
        <View>
          <View
            style={tailwind(`flex-row justify-between items-center py-2 px-3`)}>
            <AntDesign
              name="left"
              size={24}
              color="black"
              onPress={() => navigation && navigation.navigate('DetailProfile')}
            />
            <View style={tailwind(`flex-row gap-2 items-center`)}>
              <Text style={tailwind(`font-semibold`)}>Packer Tra</Text>
            </View>
            <View style={tailwind(``)}></View>
          </View>
          {toolbars.map((toolbar) => (
            <TouchableOpacity
              style={tailwind(
                `p-3 w-full flex-row items-center gap-3 border-b border-gray-300`
              )}>
              <IconRender toolbar={toolbar} />
              <Text style={tailwind(`font-bold`)}>{toolbar.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={tailwind(`flex-1 bg-gray-300`)}></View>
      </View>
    </Container>
  );
};

export default ToolbarProfile;
