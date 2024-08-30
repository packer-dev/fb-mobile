import * as React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import tailwind from "../../../tailwind";
import { AntDesign, Feather } from "@expo/vector-icons";
import IconButton from "../../IconButton";
import { AppContext } from "../../../contexts/index";
import { sendRelationship } from "../../../apis/userAPIs";
import { useNavigation } from "@react-navigation/native";
import { array, func, object } from "prop-types";

const width = Dimensions.get("window").width - 120;

const ItemSuggestFriend = ({ friend, setFriends, friends }) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  const [status, setStatus] = React.useState(friend?.status);
  const handleRelationship = async () => {
    await sendRelationship({
      user1: user?.id,
      user2: friend?.user?.id,
      status: status === 0 ? "send" : status === 1 ? "" : "accept",
    });
    if (status === 2) {
      setFriends([...friends].filter((item) => item?.id !== friend?.user?.id));
    } else {
      setStatus(status === 0 ? 1 : status === 1 ? 0 : 3);
    }
  };
  React.useEffect(() => {
    setStatus(friend?.status);
  }, [friend]);
  //
  return (
    <View
      style={{
        ...tailwind(`rounded-lg border border-gray-200 flex-col gap-2`),
        width,
      }}
    >
      <Image
        source={{
          uri: friend?.user?.avatar || `https://picsum.photos/536/354`,
        }}
        style={tailwind(`w-full h-72 rounded-lg`)}
      />
      <Text
        onPress={() =>
          navigation.navigate("DetailProfile", {
            visit: friend.user,
          })
        }
        style={tailwind(`font-bold px-3`)}
      >
        {friend?.user?.name}
      </Text>
      <Text style={tailwind(`text-gray-600 text-sm px-3`)}>
        {friend?.manual ? `${friend?.manual} mutual friend` : " "}
      </Text>
      <View style={tailwind(`flex-row gap-2 px-3 mb-3`)}>
        <IconButton
          onPress={handleRelationship}
          iconName={
            !status ? "adduser" : status === 2 ? "user-check" : "deleteuser"
          }
          IconContainer={status === 2 ? Feather : AntDesign}
          text={
            !status
              ? "Add friend"
              : status === 2
                ? "Accept request"
                : "Cancel request"
          }
          size={24}
          styles={`p-3 flex-1 ${!status || status === 2 ? "bg-primary" : "bg-gray-500"
            } justify-center`}
          haveBackground
        />
        <TouchableOpacity
          style={tailwind(
            `flex-row justify-center items-center gap-2 font-bold px-4 py-3 bg-gray-300 rounded-lg`
          )}
        >
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ItemSuggestFriend.propTypes = {
  friend: object,
  friends: array,
  setFriends: func
}

export default ItemSuggestFriend;
