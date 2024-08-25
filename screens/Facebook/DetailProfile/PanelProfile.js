import * as React from "react";
import { View, Text } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import tailwind from "../../../tailwind";
import Panel from "../../../panels";

const PanelProfile = () => {
  return (
    <Panel backgroundColor="#F2F2F2">
      <View
        style={tailwind(
          `bg-white px-3 py-5 mt-3 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <AntDesign name="camera" size={24} color="black" />
        <Text style={tailwind(`font-bold`)}>Take a camera</Text>
      </View>
      <View
        style={tailwind(
          `bg-white px-3 py-5 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <MaterialIcons name="photo-library" size={24} color="black" />
        <View style={tailwind(`flex-1 flex-col gap-1.5`)}>
          <Text style={tailwind(`font-bold`)}>Take a library</Text>
        </View>
      </View>
      <View
        style={tailwind(
          `bg-white px-3 py-5 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <MaterialIcons name="photo-library" size={24} color="black" />
        <View style={tailwind(`flex-1 flex-col gap-1.5`)}>
          <Text style={tailwind(`font-bold`)}>Take images uploaded</Text>
        </View>
      </View>
    </Panel>
  );
};

export default PanelProfile;
