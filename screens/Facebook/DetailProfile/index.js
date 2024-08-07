import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tailwind from '../../../tailwind';
import Wrapper from '../../Wrapper';
import Post from '../../../components/Facebook/Post/index';
import Header from './Header';
import InfoProfile from './InfoProfile';
import UploadProfile from './UploadProfile';
import MediaList from '../../../components/Facebook/MediaList/index';
import Container from '../Container';

const DetailProfile = ({ navigation , route}) => {
  return (
    <Container navigation={navigation} route={route}>
      <Header navigation={navigation} />
      <View style={tailwind(`flex-1`)}>
        <ScrollView style={tailwind(``)}>
          <UploadProfile navigation={navigation} />
          <InfoProfile navigation={navigation} />
          <View style={tailwind(`flex-row gap-6 py-5 px-3`)}>
            <TouchableOpacity
              style={tailwind(`px-3 py-2 bg-blue-300 rounded-full`)}>
              <Text style={tailwind(`text-blue-700 font-bold`)}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind(`px-3 py-2`)}>
              <Text style={tailwind(`font-bold`)}>Pictures</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind(`px-3 py-2`)}>
              <Text style={tailwind(`font-bold`)}>Videos</Text>
            </TouchableOpacity>
          </View>
          <MediaList />
          <Text style={tailwind(`px-3 py-4 font-bold`)}>Details</Text>
          <View style={tailwind(`flex-col`)}>
            <Post />
            <Post />
            <Post />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default DetailProfile;
