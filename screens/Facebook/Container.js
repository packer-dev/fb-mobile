import Wrapper from '../Wrapper';
import { View, ScrollView } from 'react-native';
import Navbar from './Navbar';
import tailwind from '../../tailwind';

const Container = ({ navigation, children, route, scrollView }) => {
  return (
    <Wrapper overflowHidden>
      <View style={tailwind(`flex-1 flex-col`)}>
        <View style={tailwind(`flex-1`)}>
          {scrollView ? <ScrollView>{children}</ScrollView> : children}
        </View>
        <Navbar navigation={navigation} route={route} />
      </View>
    </Wrapper>
  );
};

export default Container;
