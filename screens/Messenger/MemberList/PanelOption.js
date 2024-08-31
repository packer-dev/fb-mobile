import { useNavigation } from "@react-navigation/native";
import React from "react";
import { AppContext } from "../../../contexts";
import { object } from "prop-types";
import Panel from "../../../panels";
import { TouchableOpacity, Text, Alert } from "react-native";
import tailwind from "../../../tailwind";
import { sendMessageAPI } from "../../../api";
import { dataFakeMessage } from "../../../utils";

const PanelOption = ({ member }) => {
  const navigation = useNavigation();
  const {
    state: { user, messages, groupCurrent },
    updateData,
  } = React.useContext(AppContext);
  const handleSendMessage = () => {
    updateData("loading", true);
    updateData("panel", { ui: null, payload: {} });
    sendMessageAPI({
      message: dataFakeMessage({
        user,
        type: 3,
        text: `remove ${member?.user.name} out the group.`,
      }),
      group: {
        ...groupCurrent,
        members: groupCurrent.members.filter((item) => item.id !== member.id),
      },
    })
      .then((result) => {
        updateData("groupCurrent", result?.group);
        updateData("messages", [...messages, result?.message]);
        updateData("loading", false);
      })
      .catch(() => {
        updateData("loading", false);
      });
  };
  const optionGenerate = () => {
    let options = [];
    if (member?.is_owner && user?.id === member?.user?.id) {
      options = [
        {
          text: "View profile on Facebook",
          handle: () => {
            navigation.navigate("DetailProfile", {
              visit: member?.user,
            });
            updateData("panel", { ui: null, payload: {} });
          },
        },
        {
          text: "Leave group",
          redStyle: true,
          handle: () =>
            Alert.alert("Do you want to leave this group?", "", [
              {
                text: "Cancel",
              },
              {
                text: "OK",
              },
            ]),
        },
        {
          text: "Cancel",
          handle: () => updateData("panel", { ui: null, payload: {} }),
        },
      ];
    } else {
      options = [
        {
          text: "Call video",
        },
        {
          text: "Call audio",
        },
        {
          text: "View profile on Facebook",
          handle: () => {
            navigation.navigate("DetailProfile", {
              visit: member?.user,
            });
            updateData("panel", { ui: null, payload: {} });
          },
        },
        {
          text: "Set this user to administrator",
          handle: () =>
            Alert.alert(
              `Do you want to remove ${member?.user?.name} this group?`,
              "",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "OK",
                },
              ]
            ),
        },
        {
          text: "Send message",
          handle: () => {
            navigation.navigate("Main", {
              friend: member?.user,
            });
            updateData("panel", { ui: null, payload: {} });
          },
        },
        {
          text: "Block",
          redStyle: true,
          handle: () =>
            Alert.alert(
              `Do you want to remove ${member?.user?.name} this group?`,
              "",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "OK",
                },
              ]
            ),
        },
        {
          text: "Remove group",
          redStyle: true,
          handle: () =>
            Alert.alert(
              `Do you want to remove ${member?.user?.name} this group?`,
              "",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "OK",
                  onPress: handleSendMessage,
                },
              ]
            ),
        },
        {
          text: "Cancel",
          handle: () => updateData("panel", { ui: null, payload: {} }),
        },
      ];
    }

    return options;
  };
  return (
    <Panel backgroundColor="#F2F2F2">
      {optionGenerate().map((item, index) => (
        <TouchableOpacity
          key={item.text}
          onPress={() => item?.handle?.()}
          style={tailwind(
            `bg-white px-3 py-5 ${
              index === 0 ? "mt-8" : ""
            } rounded-lg mb-3 flex-row gap-3 items-center`
          )}
        >
          <Text
            style={tailwind(
              `font-bold ${item?.redStyle ? "text-red-500" : ""}`
            )}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </Panel>
  );
};

PanelOption.propTypes = {
  member: object,
};

export default PanelOption;
