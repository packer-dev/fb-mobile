import { View, Image } from "react-native";
import tailwind from "../tailwind";

const Avatar = ({ size, uri, online, children, loading }) => {
  return (
    <View style={tailwind(`relative`)}>
      {loading ? (
        <View
          style={tailwind(
            `w-${size} h-${size} rounded-full mx-auto bg-gray-300`
          )}
        />
      ) : (
        <Image
          source={{ uri: uri || `https://picsum.photos/536/354` }}
          style={tailwind(`w-${size} h-${size} rounded-full mx-auto`)}
        />
      )}
      {online && (
        <View
          style={tailwind(
            `w-4 h-4 rounded-full bg-green-500 absolute bottom-1 right-0 border-2 border-white`
          )}
        />
      )}
      {children}
    </View>
  );
};

export default Avatar;
