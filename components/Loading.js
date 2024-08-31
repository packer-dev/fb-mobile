import { View, ActivityIndicator } from "react-native";
import tailwind from "../tailwind";
import { bool, string } from "prop-types";

const Loading = ({ isFirst, fetching, container, size = "large", color }) => {
  //
  //
  return fetching ? (
    <View
      style={
        !container
          ? {}
          : tailwind(`py-12 justify-center flex-row items-center flex-1`)
      }
    >
      <ActivityIndicator size={size} color={color || "red"} />
    </View>
  ) : (
    <View
      style={{
        ...tailwind("absoluteFull shadow items-center justify-center"),
        backgroundColor: isFirst
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(52, 52, 52, 0.5)",
        zIndex: 300,
      }}
    >
      <ActivityIndicator size={size} color={color || "skyblue"} />
    </View>
  );
};

Loading.propTypes = {
  isFirst: bool,
  fetching: bool,
  container: bool,
  size: string,
  color: string,
};

export default Loading;
