import * as React from "react";
import { ScrollView, Text, View, Dimensions } from "react-native";
import tailwind from "../../tailwind";
import ItemStory from "./ItemStory";
import Wrapper from "../Wrapper";
import Navbar from "../../components/Navbar";

const width = Dimensions.get("window").width;

const Story = ({ navigation, route }) => {
  return (
    <Wrapper overflowHidden>
      <View style={tailwind(`flex-1 flex-col`)}>
        <Text style={tailwind(`text-center py-3 text-xl font-semibold`)}>
          Story
        </Text>
        <View style={tailwind(`flex-1`)}>
          <ScrollView style={{ width }}>
            <View style={tailwind(`flex-1 px-3 flex-row flex-wrap gap-3`)}>
              <ItemStory isNew />
              <ItemStory />
              <ItemStory />
              <ItemStory />
              <ItemStory />
              <ItemStory />
              <ItemStory />
              <ItemStory />
            </View>
          </ScrollView>
        </View>
      </View>
      <Navbar navigation={navigation} current={route?.name} />
    </Wrapper>
  );
};

export default Story;
