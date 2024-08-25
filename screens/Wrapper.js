import * as React from "react";
import tailwind from "../tailwind";
import {
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import { AppContext } from "../contexts/index";

const width = Dimensions.get("window").width - 20;

const Wrapper = ({ children, overflowHidden, isStory }) => {
  const {
    state: { popup },
  } = React.useContext(AppContext);
  return (
    <View
      style={tailwind(
        `flex-1 ${popup.ui || isStory ? " bg-black" : "bg-white"}`
      )}
    >
      {(popup.ui || isStory) && Platform.OS === "ios" && (
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
      )}
      <SafeAreaView
        style={{
          ...tailwind(`flex-1`),
          ...(popup.ui ? { width, margin: "auto" } : {}),
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          paddingBottom: Platform.OS === "android" ? 16 : 0,
        }}
      >
        {overflowHidden ? (
          <View
            style={{
              ...tailwind(`flex-1 bg-${popup.ui ? "gray-300" : "white"}`),
              ...(popup.ui ? { borderRadius: 16 } : {}),
            }}
          >
            {children}
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              ...tailwind(`flex-1 bg-${popup.ui ? "gray-300" : "white"}`),
              ...(popup.ui ? { borderRadius: 16 } : {}),
            }}
          >
            {children}
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Wrapper;
