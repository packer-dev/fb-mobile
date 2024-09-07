import * as React from "react";
import { View, TextInput } from "react-native";
import tailwind from "../tailwind";
import { AppContext } from "../contexts/index";
import { generateUUID } from "../utils";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { groupModel } from "../models";
import ChoosePerson from "./ChoosePerson";
import { PopupProps } from "./PopupProps";
import { User } from "../interfaces/User";
import { Group } from "../interfaces/Group";

type ScreenList = NavigationProp<{
  Main: undefined;
}>;

const NewGroup = ({ index, payload, popupId }: PopupProps) => {
  const {
    state: { user },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  const [nameGroup, setNameGroup] = React.useState("");
  const handleDone = (selected: User[]) => {
    if (!user) return;

    const group: Group = {
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
      seen: Object.fromEntries(
        [...selected].map((item) => [item.id, item.id === user.id])
      ),
      multiple: true,
    };
    updateData("groupCurrent", groupModel(group));
    navigation.navigate("Main");
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

export default NewGroup;
