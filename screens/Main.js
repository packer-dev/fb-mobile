import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import tailwind from "../tailwind";
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Content from "../components/Messenger/Content";
import useKeyboard from "../hooks/useKeyboard";
import useListeningMessage from "../hooks/useListeningMessage";
import { AppContext } from "../contexts/index";
import { getGroupById } from "../apis/groupAPIs";
import { getMessageMain, updateStatusMessage } from "../apis/messageAPIs";

const Main = ({ navigation, route: { params } }) => {
  const {
    state: { user, groups, groupCurrent },
    updateData,
  } = React.useContext(AppContext);
  const refScroll = React.useRef(null);
  const group = params?.group;

  useListeningMessage(group?.id || groupCurrent?.id);
  const { height, keyboardHeight, width } = useKeyboard();
  React.useEffect(() => {
    const fetchData = async () => {
      let result;
      if (params?.friend) {
        result = await getMessageMain(params?.friend?.id, user?.id);
        updateData("messages", result.messages);
        updateData("groupCurrent", result.group);
      } else {
        result = await getGroupById(group?.id);
        updateData("messages", result);
      }
      if (group?.id && user?.id) {
        result = await updateStatusMessage(group.id, user?.id);
        updateData(
          "groups",
          [...groups].map((item) => {
            if (item?.id === group?.id) {
              item.last_message.is_read = true;
            }
            return item;
          })
        );
      }
    };
    if (!group?.id) return;
    fetchData();
    return () => {
      updateData("messages", []);
      updateData("groupCurrent", null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group, user]);
  return (
    <SafeAreaView style={{ ...tailwind(`p-3 flex-col`), height }}>
      <Header navigation={navigation} group={group} friend={params?.friend} />
      <ScrollView
        ref={refScroll}
        style={{ ...tailwind(`flex-1`), width: width - 12 }}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => refScroll.current?.scrollToEnd()}
      >
        <Content />
      </ScrollView>
      <Toolbar
        friend={params?.friend}
        group={group}
        keyboardHeight={keyboardHeight}
      />
    </SafeAreaView>
  );
};

export default Main;
