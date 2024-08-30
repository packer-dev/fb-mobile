import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "../../../tailwind";
import Container from "../Container";
import HeaderFriend from "../HeaderFriend";
import useFriend from "../../../hooks/useFriend";
import ItemFriend from "../Friends/ItemFriend";

const RequestFriend = () => {
  //
  const { listFriend, handleUpdate } = useFriend(1);
  //
  return (
    <Container>
      <HeaderFriend title="Request" />
      <ScrollView>
        <View style={tailwind(`p-3`)}>
          <Text style={tailwind(`font-bold flex-1`)}>
            Friends which are know
          </Text>
          <View style={tailwind(`flex-col gap-3 py-3`)}>
            {listFriend.map((item) => (
              <ItemFriend
                key={item?.user?.id}
                friend={item}
                update={handleUpdate}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default RequestFriend;
