import * as React from "react";
import { number, object, string } from "prop-types";
import ChoosePerson from "./ChoosePerson";
import { AppContext } from "../contexts";
import { sendMessageAPI } from "../api";
import { dataFakeGroup, dataFakeMessage, generateUUID } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { memberModel } from "../models";

const AddMember = ({ index, payload, popupId }) => {
  const {
    state: { user, groupCurrent, messages, groups },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  const handleDone = async (selected) => {
    updateData("loading", true);
    let text = "";
    if (selected.length === 1) {
      text = `added ${selected[0]?.name} to group.`;
    }
    if (selected.length === 2) {
      text = `added ${selected[0]?.name} and ${selected[1]?.name} to group.`;
    }
    if (selected.length > 2) {
      text = `added ${selected[0]?.name} and ${
        selected.length - 1
      } other members to group.`;
    }
    const message = dataFakeMessage({ user, text, type: 3 });
    let newGroup = dataFakeGroup({
      groupCurrent,
      group: groupCurrent,
      user,
      friend: null,
      message,
    });
    newGroup.members = [
      ...newGroup.members,
      ...[...selected].map((item) =>
        memberModel({
          id: generateUUID(),
          user: item,
        })
      ),
    ];
    try {
      updateData("messages", [...messages, message]);
      const result = await sendMessageAPI({
        message,
        group: newGroup,
      });
      if (!result?.group || !result?.message) {
        updateData("loading", false);
        return;
      }
      updateData("groupCurrent", result?.group);
      updateData("popup", []);
      navigation.navigate("Main", {
        group: result?.group,
      });
      let newListGroup = [...groups].map((item) => {
        if (item?.id === groupCurrent?.id) {
          return { ...(result?.group || {}) };
        }
        return item;
      });
      updateData("groups", newListGroup);
      updateData("loading", false);
    } catch (e) {}
  };
  return (
    <ChoosePerson
      index={index}
      payload={payload}
      popupId={popupId}
      title="Add people"
      handleDone={handleDone}
    />
  );
};

AddMember.propTypes = {
  index: number,
  payload: object,
  popupId: string,
};

export default AddMember;
