import * as React from "react";
import { AppContext } from "../contexts/index";
import { View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { userModel } from "../models";
import { FontAwesome5 } from "@expo/vector-icons";
import tailwind from "../tailwind";
import { getUserById } from "../apis/userAPIs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import useWebRTC from "../hooks/useWebRTC";

type ScreenList = NavigationProp<{
  Facebook: undefined;
  Login: undefined;
}>;

const Pending = () => {
  const { updateData } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  useWebRTC();
  React.useEffect(() => {
    const fetchData = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        const userResponse = await getUserById(token);
        updateData("user", userModel(userResponse));
      }
      navigation.navigate(token ? "Facebook" : "Login");
    };
    fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={tailwind(`py-12 justify-center flex-row items-center flex-1`)}>
      <FontAwesome5
        name="facebook"
        size={80}
        style={tailwind(`text-primary`)}
      />
    </View>
  );
};

export default Pending;
