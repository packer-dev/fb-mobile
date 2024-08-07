import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import tailwind from '../../tailwind';
import ItemStory from '../Story/ItemStory';
import { Feather } from '@expo/vector-icons';
import Post from '../../components/Facebook/Post/index';
import SuggestFriend from '../../components/Facebook/SuggestFriend/index';

const Content = () => {
  return (
    <View style={tailwind(`flex-1`)}>
      <ScrollView style={tailwind(`flex-1`)}>
        <View style={tailwind(`flex-row gap-3 items-center py-5 px-3`)}>
          <Image
            style={tailwind(`w-12 h-12 rounded-full`)}
            source={{ uri: `https://picsum.photos/536/354` }}
          />
          <Text style={tailwind(`flex-1`)}>What do you think?</Text>
          <Feather
            onPress={() => {}}
            name="image"
            size={28}
            style={tailwind(`text-green-500`)}
          />
        </View>
        <View style={tailwind(`py-1 bg-gray-300 flex-1`)}>
          <ScrollView
            style={tailwind(`flex-1`)}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View style={tailwind(`flex-row gap-2 bg-white px-3 py-3`)}>
              <ItemStory isNew auto />
              <ItemStory auto />
              <ItemStory auto />
              <ItemStory auto />
              <ItemStory auto />
            </View>
          </ScrollView>
        </View>
        <View style={tailwind(`flex-col`)}>
          <Post />
          <SuggestFriend />
          <Post />
          <Post />
        </View>
      </ScrollView>
    </View>
  );
};

export default Content;
