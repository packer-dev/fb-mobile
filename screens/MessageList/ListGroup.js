import * as React from "react";
import { View, ScrollView } from "react-native";
import tailwind from "../../tailwind";
import ItemGroup from "./ItemGroup";
import { AppContext } from "../../contexts/index";
import { getMessageListByIdUser } from "../../apis/messageAPIs";
import { useNavigation } from "@react-navigation/native";

const ListGroup = () => {
  //
  const {
    updateData,
    state: { groups, user },
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getMessageListByIdUser(user?.id);
      updateData("groups", result);
      setLoading(false);
    };

    user && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  //
  return (
    <ScrollView style={tailwind(`flex-1`)}>
      <View style={tailwind(`flex flex-col gap-4 p-3`)}>
        {loading &&
          Array(3)
            .fill(1)
            .map((item, index) => (
              <ItemGroup key={item + index} loading={loading} />
            ))}
        {!loading &&
          groups?.length > 0 &&
          groups?.map((group) => (
            <ItemGroup
              group={group}
              key={group?.id}
              handleClick={() => {
                navigation.navigate("Main");
                updateData("groupCurrent", group);
              }}
            />
          ))}
        {loading && <></>}
      </View>
    </ScrollView>
  );
};

export default ListGroup;
