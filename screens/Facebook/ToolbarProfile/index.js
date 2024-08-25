import * as React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import tailwind from "../../../tailwind";
import Container from "../Container";
import { AntDesign } from "@expo/vector-icons";
import { toolbars } from "./toolbars";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../contexts";
import { sendRelationship } from "../../../apis/userAPIs";

const ToolbarProfile = ({ route }) => {
  const {
    state: { user, visit, trigger },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  const IconRender = ({ toolbar }) => {
    const Icon = toolbar.component;
    return <Icon name={toolbar.icon} size={24} color="black" />;
  };
  const handleConfirm = (key) => {
    let title = "";
    switch (key) {
      case "Cancel relationship":
        title = `Cancel relationship with ${visit?.name.split(" ")[0]}`;
        break;
      default:
        break;
    }
    Alert.alert(
      `Cancel relationship with ${visit?.name.split(" ")[0]}`,
      "", // <- this part is optional, you can pass an empty string
      [
        { text: "Cancel", onPress: () => "" },
        { text: "OK", onPress: () => handleSwitch(key) },
      ],
      { cancelable: true }
    );
  };
  const handleSwitch = async (key) => {
    updateData("loading", true);
    switch (key) {
      case "Cancel relationship":
        await sendRelationship({
          user1: user?.id,
          user2: visit?.id,
          status: "",
        });
        updateData("trigger", {
          ...trigger,
          profileRelationship: Math.random(),
          cancelRelationship: {
            id: user?.id,
          },
          suggestFriend: Math.random(),
        });
        break;

      default:
        break;
    }
    navigation.goBack(null);
    updateData("loading", false);
  };
  return (
    <Container route={route}>
      <View style={tailwind(`flex-1 flex-col`)}>
        <View>
          <View
            style={tailwind(`flex-row justify-between items-center py-2 px-3`)}
          >
            <AntDesign
              name="left"
              size={24}
              color="black"
              onPress={() => navigation.navigate("DetailProfile")}
            />
            <View style={tailwind(`flex-row gap-2 items-center`)}>
              <Text style={tailwind(`font-semibold`)}>{visit?.name}</Text>
            </View>
            <View></View>
          </View>
          {toolbars
            .filter((item) => (user?.id === visit?.id ? item.isOwer : true))
            .map((toolbar) => (
              <TouchableOpacity
                onPress={() => handleConfirm(toolbar.text)}
                key={toolbar.text}
                style={tailwind(
                  `p-3 w-full flex-row items-center gap-3 border-b border-gray-300`
                )}
              >
                <IconRender toolbar={toolbar} />
                <Text style={tailwind(`font-bold`)}>{toolbar.text}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <View style={tailwind(`flex-1 bg-gray-300`)}></View>
      </View>
    </Container>
  );
};

export default ToolbarProfile;
