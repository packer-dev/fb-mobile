import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tailwind from '../../../tailwind';
import Container from '../Container';

const Watchs = ({ navigation, route }) => {
  return (
    <Container scrollView navigation={navigation} route={route}></Container>
  );
};

export default Watchs;
