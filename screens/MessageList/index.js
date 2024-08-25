import * as React from "react";
import tailwind from "../../tailwind";
import { View } from "react-native";
import Navbar from "../../components/Navbar";
import Header from "./Header";
import Search from "./Search";
import Story from "./Story";
import ListGroup from "./ListGroup";
import Wrapper from "../Wrapper";

const MessageList = ({ navigation, route }) => {
  return (
    <Wrapper overflowHidden>
      <View style={tailwind(`flex-1`)}>
        <View style={tailwind(`flex-1`)}>
          <Header navigation={navigation} />
          <Search navigation={navigation} />
          <Story navigation={navigation} />
          <ListGroup navigation={navigation} />
        </View>
        <Navbar navigation={navigation} current={route?.name} />
      </View>
    </Wrapper>
  );
};

export default MessageList;
