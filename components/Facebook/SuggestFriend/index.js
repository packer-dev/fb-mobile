import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "../../../tailwind";
import ItemSuggestFriend from "./ItemSuggestFriend";
import { Entypo, Feather } from "@expo/vector-icons";
import { AppContext } from "../../../contexts/index";
import { getSuggestFriendByUserId } from "../../../apis/userAPIs";

const SuggestFriend = () => {
  const {
    state: { user, trigger },
  } = React.useContext(AppContext);
  const [friends, setFriends] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      setFriends([]);
      const result = await getSuggestFriendByUserId(user?.id);
      setFriends(result);
    };
    user && fetchData();
  }, [user, trigger.suggestFriend]);
  return friends?.length > 0 ? (
    <View style={tailwind(friends?.length ? `py-1 bg-gray-300 -mt-1` : "")}>
      <View style={tailwind(`bg-white p-3 flex-col gap-3`)}>
        <View style={tailwind(`flex-row items-center`)}>
          <Text style={tailwind(`font-bold flex-1`)}>
            Friends which are know
          </Text>
          <View style={tailwind(`flex-row gap-3 items-center`)}>
            <Entypo name="dots-three-horizontal" size={20} color="gray" />
            <Feather name="x" size={20} color="gray" />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tailwind(`flex-row gap-3`)}>
            {friends?.map((item) => (
              <ItemSuggestFriend
                key={item?.user?.id}
                friend={item}
                friends={friends}
                setFriends={setFriends}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  ) : (
    <></>
  );
};

export default SuggestFriend;
