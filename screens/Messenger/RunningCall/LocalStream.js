import { View } from "react-native";
import tailwind from "../../../tailwind";

const LocalStream = () => {
  return (
    <View
      style={tailwind(
        `absolute top-4 right-4 w-30 h-48 rounded-lg border border-white`
      )}
    ></View>
  );
};

export default LocalStream;
