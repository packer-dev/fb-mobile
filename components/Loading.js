import { View, ActivityIndicator } from 'react-native';
import tailwind from '../tailwind';

const Loading = ({ isFirst, fetching, container }) => {
  //
  //
  return fetching ? (
    <View style={!container ? {} : tailwind(`py-12 justify-center flex-row items-center flex-1`)}>
      <ActivityIndicator
        size="large"
        color="red"
      />
    </View>
  ) : (
    <View
      style={{
        ...tailwind('absoluteFull shadow items-center justify-center'),
        backgroundColor: isFirst
          ? 'rbga(255, 255, 255, 0.5)'
          : 'rgba(52, 52, 52, 0.5)',
        zIndex: 200,
      }}>
      <ActivityIndicator size="large" color="skyblue" />
    </View>
  );
};

export default Loading;
