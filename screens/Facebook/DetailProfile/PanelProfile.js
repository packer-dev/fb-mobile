import * as React from "react";
import { View, Text } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import tailwind from "../../../tailwind";
import Panel from "../../../panels";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../contexts";

const PanelProfile = ({ pickImage }) => {
  const navigation = useNavigation();
  const { updateData } = React.useContext(AppContext);
  return (
    <Panel backgroundColor="#F2F2F2">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Camera", {
            pickImage,
          });
          updateData("panel", {
            ui: null,
            payload: {},
          });
        }}
        style={tailwind(
          `bg-white px-3 py-5 mt-3 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <AntDesign name="camera" size={24} color="black" />
        <Text style={tailwind(`font-bold`)}>Take a camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pickImage}
        style={tailwind(
          `bg-white px-3 py-5 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <MaterialIcons name="photo-library" size={24} color="black" />
        <View style={tailwind(`flex-1 flex-col gap-1.5`)}>
          <Text style={tailwind(`font-bold`)}>Take a library</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind(
          `bg-white px-3 py-5 rounded-lg mb-3 flex-row gap-3 items-center`
        )}
      >
        <MaterialIcons name="photo-library" size={24} color="black" />
        <View style={tailwind(`flex-1 flex-col gap-1.5`)}>
          <Text style={tailwind(`font-bold`)}>Take images uploaded</Text>
        </View>
      </TouchableOpacity>
    </Panel>
  );
};

export default PanelProfile;
