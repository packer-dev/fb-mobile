import * as React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Platform,
} from "react-native";
import tailwind from "../../tailwind";
import ItemStory from "../Story/ItemStory";
import { Feather } from "@expo/vector-icons";
import Post from "../../components/Facebook/Post/index";
import SuggestFriend from "../../components/Facebook/SuggestFriend/index";
import { AppContext } from "../../contexts/index";
import * as ImagePicker from "expo-image-picker";

const Content = () => {
  const {
    state: { list_post, user },
  } = React.useContext(AppContext);
  const pickImage = async () => {
    let result
    if (Platform.OS !== "web") {
      result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: true,
      });
    }
    if (!result.canceled && result.assets) {
      navigation?.navigate("CreatePost", {
        assets: result.assets,
      });
    }
  };
  return (
    <View style={tailwind(`flex-1`)}>
      <ScrollView
        style={tailwind(`flex-1`)}
        showsVerticalScrollIndicator={false}
      >
        <View style={tailwind(`flex-row gap-3 items-center py-5 px-3`)}>
          <Image
            style={tailwind(`w-12 h-12 rounded-full`)}
            source={{ uri: user?.avatar || `https://picsum.photos/536/354` }}
          />
          <Text
            style={tailwind(`flex-1`)}
            onPress={() => navigation.navigate("CreatePost")}
          >
            What do you think?
          </Text>
          <Feather
            onPress={pickImage}
            name="image"
            size={28}
            style={tailwind(`text-green-500`)}
          />
        </View>
        <View style={tailwind(`py-1 bg-gray-300 flex-1`)}>
          <ScrollView
            style={tailwind(`flex-1`)}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
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
          <SuggestFriend />
          {list_post?.map((item) => (
            <Post
              key={item?.post?.id}
              post={item?.post}
              medias={item?.medias}
              navigation={navigation}
              feel={item?.feel}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Content;
