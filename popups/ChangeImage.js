import * as React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import Popup from "./Popup";
import GroupAvatar from "../components/GroupAvatar";
import tailwind from "../tailwind";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { emojiList } from "../utils";
import * as ImagePicker from "expo-image-picker";
import { AppContext } from "../contexts";
import Avatar from "../components/Avatar";
import { updateInforGroupByGroup } from "../apis/groupAPIs";
import { number, object, string } from "prop-types";

const width = Dimensions.get("window").width - 64;

const ChangeImage = ({ index, payload, popupId }) => {
  const { updateData } = React.useContext(AppContext);
  const [image, setImage] = React.useState(payload?.group?.image);
  const [name, setName] = React.useState(payload?.group?.name);
  const [emoji, setEmoji] = React.useState(payload?.group?.emoji);
  const handleDone = async () => {
    updateData("loading", true);
    const formData = new FormData();
    updateData("panel", {
      ui: null,
      payload: {},
    });
    if (typeof image === "object") {
      formData.append("file", {
        uri: image.uri,
        name: image.uri.substring(
          image.uri.lastIndexOf("/") + 1,
          image.uri.length
        ),
        type: image.mimeType || "image/jpeg",
      });
    }
    formData.append("folder", "Groups");
    formData.append("emoji", emoji);
    formData.append("name", name);
    formData.append("group_id", payload?.group?.id);
    const response = await updateInforGroupByGroup(formData);
    updateData("loading", false);
    updateData("popup", []);
    if (payload?.group && payload?.setGroup) {
      payload?.setGroup(response);
    }
  };
  const pickImage = async () => {
    // Ask for permission to access the library
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }

    // Open the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      updateData("loading", true);
      const imageURI = result.assets[0];
      if (!imageURI) {
        updateData("loading", false);
        return;
      }
      setImage(imageURI);

      updateData("loading", false);
    }
  };
  return (
    <Popup
      title="Change image"
      index={index}
      popupId={popupId}
      handleDone={handleDone}
    >
      <View style={tailwind(`my-5`)}>
        {image ? (
          <Avatar
            uri={typeof image === "object" ? image?.uri : image}
            size={24}
          />
        ) : (
          <GroupAvatar group={payload?.group} size={24} child={10} />
        )}
      </View>
      <View style={tailwind(`px-8`)}>
        <TextInput
          style={tailwind(`bg-gray-200 h-12 px-3 rounded-lg`)}
          onChangeText={setName}
          value={name}
          placeholder="Name"
          placeholderTextColor="gray"
        />
      </View>

      <View style={tailwind(`flex-row justify-center py-5 gap-12`)}>
        <TouchableOpacity
          onPress={pickImage}
          style={tailwind(`flex-col gap-2 justify-center`)}
        >
          <View
            style={tailwind(
              `w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center`
            )}
          >
            <Ionicons name="image-outline" size={24} color="black" />
          </View>
          <Text style={tailwind(`text-sm font-semibold`)}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind(`flex-col gap-2 justify-center`)}>
          <View
            style={tailwind(
              `w-12 h-12 mx-auto rounded-full bg-gray-200 flex items-center justify-center`
            )}
          >
            <FontAwesome6 name="smile-beam" size={24} color="black" />
          </View>
          <Text style={tailwind(`text-sm font-semibold`)}>Change emoji</Text>
        </TouchableOpacity>
      </View>

      <View style={tailwind(`flex flex-row flex-wrap gap-6 px-8 pt-10`)}>
        {emojiList.map((item) => (
          <TouchableOpacity
            onPress={() => setEmoji(item)}
            key={item}
            style={{
              ...tailwind(
                `flex justify-center items-center rounded-full border ${
                  item === emoji ? "border-primary" : "border-gray-300"
                }`
              ),
              width: width / 4 - 18,
              height: width / 4 - 18,
            }}
          >
            <Text style={tailwind(`text-2xl`)}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Popup>
  );
};

ChangeImage.propTypes = {
  index: number,
  payload: object,
  popupId: string,
};

export default ChangeImage;
