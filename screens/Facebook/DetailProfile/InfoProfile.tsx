import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tailwind from "../../../tailwind";
import {
  Entypo,
  AntDesign,
  Fontisto,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { AppContext } from "../../../contexts/index";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { checkRelationship, sendRelationship } from "../../../apis/userAPIs";
import IconButton from "../../../components/IconButton";
import { User } from "../../../interfaces/User";

type ScreenList = NavigationProp<{
  ToolbarProfile: undefined;
  Main?: {
    friend?: User | null;
  };
}>;

const DetailProfile = ({ relationship = { manual: 0, amount: 0 } }) => {
  const [status, setStatus] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation<ScreenList>();
  const {
    state: { visit, user, trigger },
    updateData,
  } = React.useContext(AppContext);
  const isCurrent = visit?.id === user?.id;
  const handleRelationship = async () => {
    if (status === 3) return;
    setLoading(true);
    await sendRelationship({
      user1: user?.id,
      user2: visit?.id,
      status: !status ? "send" : status === 1 ? "" : "accept",
    });
    setStatus(!status ? 1 : status === 1 ? null : 3);
    setLoading(false);
    updateData("trigger", { ...trigger, suggestFriend: Math.random() });
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      setLoading(true);
      setStatus("");
      const result = await checkRelationship(user?.id, visit?.id ?? "");
      setStatus(result);
      setLoading(false);
    };
    visit?.id !== user?.id && fetchData();
  }, [visit, user, trigger.profileRelationship]);
  return (
    <View style={tailwind(`px-3 mt-5`)}>
      <Text style={tailwind(`font-bold text-2xl mt-12 mb-1.5`)}>
        {visit?.name}
      </Text>
      {!isCurrent && (
        <View style={tailwind(`flex-row gap-1 mt-1`)}>
          <Text style={tailwind(`font-bold`)}>{relationship?.amount}</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>friends</Text>
          <Text style={tailwind(`-mt-1 font-bold`)}>.</Text>
          <Text style={tailwind(`font-bold`)}>{relationship?.manual}</Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>manual friends</Text>
        </View>
      )}
      <Text style={tailwind(`py-1`)}>{visit?.bio}</Text>
      {isCurrent ? (
        <>
          <TouchableOpacity
            style={tailwind(
              `w-full h-11 rounded-lg mt-2 mb-1 flex-row justify-center items-center bg-primary`
            )}
          >
            <Entypo name="plus" size={24} style={tailwind(`text-white`)} />
            <Text style={tailwind(`text-white font-bold`)}>Add story</Text>
          </TouchableOpacity>
          <View style={tailwind(`flex-row gap-1`)}>
            <TouchableOpacity
              style={tailwind(
                `flex-1 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
              )}
            >
              <Entypo name="plus" size={24} style={tailwind(`text-gray-800`)} />
              <Text style={tailwind(`text-gray-800 font-bold`)}>
                Edit personal profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ToolbarProfile")}
              style={tailwind(
                `p-2 w-11 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
              )}
            >
              <Entypo name="dots-three-horizontal" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={tailwind(`flex-row gap-2 py-2`)}>
          <IconButton
            onPress={handleRelationship}
            iconName={
              !status
                ? "adduser"
                : status === 2
                ? "user-check"
                : status === 3
                ? "user-friends"
                : "deleteuser"
            }
            IconContainer={
              status === 2 ? Feather : status === 3 ? FontAwesome5 : AntDesign
            }
            text={
              !status
                ? loading
                  ? ""
                  : "Add friend"
                : status === 2
                ? "Accept request"
                : status === 3
                ? "Friend"
                : "Cancel request"
            }
            iconSize={24}
            styles={`p-2 h-11 flex-1 ${
              !status || status === 2
                ? "bg-primary"
                : status === 3
                ? "bg-gray-400"
                : "bg-gray-500"
            } justify-center`}
            haveBackground={status !== 3}
            loading={loading}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Main", {
                friend: visit,
              })
            }
            style={tailwind(
              `flex-1 h-11 rounded-lg mb-2 flex-row gap-1.5 justify-center items-center bg-gray-400`
            )}
          >
            <Fontisto
              name="messenger"
              size={20}
              style={tailwind(`text-gray-800`)}
            />
            <Text style={tailwind(`text-gray-800 font-bold`)}>
              Send message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate("ToolbarProfile")}
            style={tailwind(
              `p-2 w-11 h-11 rounded-lg mb-2 flex-row justify-center items-center bg-gray-400`
            )}
          >
            <Entypo name="dots-three-horizontal" size={18} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DetailProfile;
