import * as React from 'react';
import tailwind from '../tailwind';
import {
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import { AppContext } from '../contexts/index';

const width = Dimensions.get('window').width - 20;

const Wrapper = ({ children, overflowHidden }) => {
  const {
    state: { popup },
  } = React.useContext(AppContext);
  return (
    <View style={tailwind(`flex-1 ${popup.ui ? ' bg-black' : 'bg-white'}`)}>
      {popup.ui && (
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
      )}
      <SafeAreaView
        style={{
          ...tailwind(`flex-1`),
          ...(popup.ui ? { width, margin: 'auto' } : {}),
        }}>
        {overflowHidden ? (
          <View
            style={{
              ...tailwind(`flex-1 bg-${popup.ui ? 'gray-300' : 'white'}`),
              ...(popup.ui ? { borderRadius: 16 } : {}),
            }}>
            {children}
          </View>
        ) : (
          <ScrollView
            style={{
              ...tailwind(`flex-1 bg-${popup.ui ? 'gray-300' : 'white'}`),
              ...(popup.ui ? { borderRadius: 16 } : {}),
            }}>
            {children}
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Wrapper;
