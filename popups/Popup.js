import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AppContext } from '../contexts/index';
import tailwind from '../tailwind';
import * as Animatable from 'react-native-animatable';

const height = Dimensions.get('window').height - 70;

const Popup = ({
  children,
  title,
  payload,
  ui,
  handleDone,
  disabled = {
    done: false,
    cancel: false,
  },
}) => {
  const { updateData } = React.useContext(AppContext);
  return (
    <Animatable.View
      animation="fadeInUp"
      duration={400}
      style={{
        ...tailwind(
          `bg-white flex-1 w-full absolute bottom-0 border-t border-gray-200`
        ),
        borderRadius: 12,
        height,
        zIndex: 100,
      }}>
      <View style={tailwind(`flex-row justify-between p-3 mt-3`)}>
        <TouchableOpacity
          onPress={() =>
            updateData('popup', {
              payload,
              ui,
            })
          }>
          <Text
            style={tailwind(
              `${
                disabled?.cancel ? 'text-gray-500' : 'text-primary'
              } font-bold text-lg`
            )}>
            Cancel
          </Text>
        </TouchableOpacity>
        <Text style={tailwind(`font-bold text-lg`)}>{title}</Text>
        <TouchableOpacity onPress={() => handleDone && handleDone()}>
          <Text
            style={tailwind(
              `${
                disabled?.done ? 'text-gray-500' : 'text-primary'
              } font-bold text-lg`
            )}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={tailwind(`flex-1`)}>{children}</ScrollView>
    </Animatable.View>
  );
};

export default Popup;
