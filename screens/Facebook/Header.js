import * as React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import tailwind from "../../tailwind";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { AppContext } from "../../contexts/index";
import { getAmountMessage } from "../../apis/messageAPIs";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  //
  const {
    state: { user, groups },
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getAmountMessage(user.id);
      setNumber(result);
    };
    user && fetchData();
  }, [user, groups]);
  //
  return (
    <View
      style={tailwind(
        `flex-row justify-between items-center px-3 pb-3 ${
          Platform.OS === "android" ? "pt-3" : ""
        } border-b border-gray-200`
      )}
    >
      <Text style={tailwind(`font-bold text-3xl text-primary`)}>facebook</Text>
      <View style={tailwind(`flex-row gap-3`)}>
        <TouchableOpacity
          style={tailwind(
            `w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center`
          )}
        >
          <AntDesign name="plus" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchUser")}
          style={tailwind(
            `w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center`
          )}
        >
          <AntDesign name="search1" size={22} color="black" />
        </TouchableOpacity>
        <View style={tailwind(`relative w-11 h-11`)}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MessageList")}
            style={tailwind(
              `w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center`
            )}
          >
            <Fontisto name="messenger" size={22} color="black" />
          </TouchableOpacity>
          {number ? (
            <View
              style={[
                tailwind(
                  `rounded-lg bg-gray-100 absolute top-0 right-0 bg-red-500`
                ),
                {
                  paddingHorizontal: 3,
                  paddingVertical: 3,
                },
              ]}
            >
              <Text
                style={[
                  tailwind(`text-sm text-white font-bold`),
                  { fontSize: 10 },
                ]}
              >
                +{number}
              </Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
