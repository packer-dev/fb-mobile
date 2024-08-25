import * as React from "react";
import tailwind from "../../tailwind";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { AppContext } from "../../contexts/index";
import NewMessage from "../../popups/NewMessage";
import * as SecureStore from "expo-secure-store";

const Header = ({ navigation }) => {
  //
  const {
    state: { user },
    updateData,
  } = React.useContext(AppContext);
  //
  return (
    <View style={tailwind(`flex-row gap-3 p-3 items-center`)}>
      <TouchableOpacity
        onPress={() => navigation && navigation.navigate("Facebook")}
      >
        <Image
          source={{ uri: user?.avatar || `https://picsum.photos/536/354` }}
          style={tailwind(`w-10 h-10 rounded-full`)}
        />
      </TouchableOpacity>
      <Text style={tailwind(`flex-1 text-3xl font-bold`)}>Chats</Text>
      <View style={tailwind(`flex-row gap-4`)}>
        <TouchableOpacity
          onPress={() =>
            updateData("popup", {
              ui: <NewMessage navigation={navigation} />,
              payload: {},
            })
          }
          style={tailwind(
            `flex justify-center item-center w-10 h-10 rounded-full bg-gray-300`
          )}
        >
          <FontAwesome
            name="pencil-square-o"
            size={24}
            style={tailwind(`text-gray-900 mx-auto`)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            updateData("loading", true);
            await SecureStore.deleteItemAsync("token");
            updateData("user", null);
            updateData("messages", []);
            updateData("groups", []);
            updateData("groupCurrent", null);
            updateData("visit", null);
            updateData("panel", null);
            updateData("list_post", []);
            updateData("friends", []);
            updateData("popup", {
              ui: null,
              payload: null,
            });
            updateData("panel", {
              ui: null,
              payload: null,
            });
            updateData("loading", false);
            navigation.navigate("Login");
          }}
          style={tailwind(
            `flex justify-center item-center w-10 h-10 rounded-full bg-gray-300`
          )}
        >
          <MaterialIcons
            name="logout"
            size={24}
            style={tailwind(`text-gray-900 mx-auto`)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
