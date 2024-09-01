import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tailwind from "../tailwind";
import * as Animatable from "react-native-animatable";
import { AppContext } from "../contexts/index";
import useKeyboard from "../hooks/useKeyboard";
import { bool, func, node, number, object, string } from "prop-types";

const Popup = ({
  children,
  title,
  handleDone,
  disabled = {
    done: false,
    cancel: false,
  },
  index,
  hidden,
  popupId,
}) => {
  const { height } = useKeyboard();
  const {
    state: { popup },
    updateData,
  } = React.useContext(AppContext);
  return hidden ? (
    <></>
  ) : (
    <>
      <View
        style={[
          tailwind(`bottom-0 right-0 absolute top-0 left-0`),
          {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 89,
          },
        ]}
      ></View>
      <Animatable.View
        animation="fadeInUp"
        duration={200}
        style={{
          ...tailwind(
            `bg-white flex-col w-full absolute border-t border-gray-200`
          ),
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          height: height - 70,
          bottom: 0,
          zIndex: 90 + (index || 0),
        }}
      >
        <View style={tailwind(`flex-row justify-between p-3 mt-3`)}>
          <TouchableOpacity
            onPress={() =>
              updateData(
                "popup",
                [...popup].filter((item) => item.id !== popupId)
              )
            }
          >
            <Text
              style={tailwind(
                `${
                  disabled?.cancel ? "text-gray-500" : "text-primary"
                } font-bold text-lg`
              )}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <Text style={tailwind(`font-bold text-lg`)}>{title}</Text>
          <TouchableOpacity onPress={() => handleDone?.()}>
            <Text
              style={tailwind(
                `${
                  disabled?.done ? "text-gray-500" : "text-primary"
                } font-bold text-lg`
              )}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind(`flex-1`)}>
          <ScrollView style={tailwind(`flex-1`)}>{children}</ScrollView>
        </View>
      </Animatable.View>
    </>
  );
};

Popup.propTypes = {
  children: node,
  title: string,
  handleDone: func,
  disabled: object,
  index: number,
  hidden: bool,
  popupId: string,
};

export default Popup;
