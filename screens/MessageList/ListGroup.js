import * as React from "react";
import { View, ScrollView } from "react-native";
import tailwind from "../../tailwind";
import ItemGroup from "./ItemGroup";
import { AppContext } from "../../contexts/index";
import { getMessageListByIdUser } from "../../apis/messageAPIs";

const ListGroup = ({ navigation }) => {
  //
  const {
    updateData,
    state: { groups, user },
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
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
            .map(() => <ItemGroup key={Math.random()} loading={loading} />)}
        {!loading &&
          groups?.length > 0 &&
          groups?.map((group) => (
            <ItemGroup
              group={group}
              key={group?.id}
              handleClick={() => {
                navigation && navigation.navigate("Main", { group });
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
