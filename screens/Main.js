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
import { object } from "prop-types";

const Main = ({ route: { params } }) => {
  const {
    state: { user, groups, groupCurrent },
    updateData,
  } = React.useContext(AppContext);
  const refScroll = React.useRef(null);
  useListeningMessage(groupCurrent?.id);
  const { height, keyboardHeight, width } = useKeyboard();
  React.useEffect(() => {
    const fetchData = async () => {
      let result;
      if (params?.friend) {
        result = await getMessageMain(params?.friend?.id, user?.id);
        updateData("messages", result.messages);
        updateData("groupCurrent", result.group);
      } else {
        result = await getGroupById(groupCurrent?.id);
        updateData("messages", result);
      }
      if (groupCurrent?.id && user?.id) {
        await updateStatusMessage(groupCurrent.id, user?.id);
        updateData(
          "groups",
          [...groups].map((item) => {
            if (item?.id === groupCurrent?.id) {
              item.seen[user?.id] = true;
            }
            return item;
          })
        );
      }
    };
    if (!groupCurrent?.id) return;
    fetchData();
    return () => {
      updateData("messages", []);
      updateData("groupCurrent", null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupCurrent, user]);
  return (
    <SafeAreaView style={{ ...tailwind(`p-3 flex-col`), height }}>
      <Header friend={params?.friend} />
      <ScrollView
        ref={refScroll}
        style={{ ...tailwind(`flex-1`), width: width - 12 }}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => refScroll.current?.scrollToEnd()}
      >
        <Content />
      </ScrollView>
      <Toolbar friend={params?.friend} keyboardHeight={keyboardHeight} />
    </SafeAreaView>
  );
};

Main.propTypes = {
  route: object,
};

export default Main;
