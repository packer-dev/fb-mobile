import * as React from "react";
import { View, TextInput } from "react-native";
import tailwind from "../tailwind";
import { AppContext } from "../contexts/index";
import { generateUUID } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { groupModel } from "../models";
import { number, object, string } from "prop-types";
import ChoosePerson from "./ChoosePerson";

const NewGroup = ({ index, payload, popupId }) => {
  const {
    state: { user },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  const [nameGroup, setNameGroup] = React.useState("");
  const handleDone = (selected) => {
    const group = {
      id: "",
      name: nameGroup,
      members: [
        {
          id: generateUUID(),
          nickname: "",
          user,
          is_owner: true,
        },
        ...[...selected].map((item) => ({
          id: generateUUID(),
          nickname: "",
          user: item,
          is_owner: false,
        })),
      ],
      last_message: null,
      seen: Object.fromEntries(
        [...selected].map((item) => [item.id, item.id === user.id])
      ),
    };
    navigation.navigate("Main", {
      group: groupModel(group),
    });
    updateData("popup", []);
  };
  return (
    <ChoosePerson
      index={index}
      payload={payload}
      popupId={popupId}
      title="New group"
      handleDone={handleDone}
    >
      <View style={tailwind(`px-3 mt-3`)}>
        <TextInput
          style={tailwind(`flex-1 p-3 bg-gray-200`)}
          placeholder="Name group (Don't required)"
          placeholderTextColor="gray"
          value={nameGroup}
          onChangeText={setNameGroup}
        />
      </View>
    </ChoosePerson>
  );
};

NewGroup.propTypes = {
  index: number,
  payload: object,
  popupId: string,
};

export default NewGroup;
