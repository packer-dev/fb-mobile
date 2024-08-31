import * as React from "react";
import tailwind from "../../tailwind";
import { View } from "react-native";
import Navbar from "../../components/Navbar";
import Header from "./Header";
import Search from "./Search";
import Story from "./Story";
import ListGroup from "./ListGroup";
import Wrapper from "../Wrapper";
import { object } from "prop-types";

const MessageList = ({ route }) => {
  return (
    <Wrapper overflowHidden>
      <View style={tailwind(`flex-1`)}>
        <View style={tailwind(`flex-1`)}>
          <Header />
          <Search />
          <Story />
          <ListGroup />
        </View>
        <Navbar current={route?.name} />
      </View>
    </Wrapper>
  );
};

MessageList.propTypes = {
  route: object,
};

export default MessageList;
