import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tailwind from '../../../tailwind';
import Container from '../Container';

const Marketplaces = ({ navigation, route }) => {
  return (
    <Container scrollView navigation={navigation} route={route}></Container>
  );
};

export default Marketplaces;
