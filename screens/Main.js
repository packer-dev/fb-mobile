import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import tailwind from '../tailwind';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import Content from '../components/Content';
import useKeyboard from '../hooks/useKeyboard';
import 'react-native-url-polyfill/auto';
import useListeningMessage from '../hooks/useListeningMessage';
import { AppContext } from '../contexts/index';

const Main = ({ navigation, route: { params } }) => {
  const { height, width } = useKeyboard();
  const {
    state: { user },
    updateData,
  } = React.useContext(AppContext);
  const group = params?.group;
  useListeningMessage();
  React.useEffect(() => {
    const fetchData = async () => {
      let result;
      if (params?.friend) {
        result = await fetch(
          `https://api-packer-ui.onrender.com/api/messenger/v1/message/get-child?userId=${params?.friend?.id}&currentId=${user.id}`
        ).then((res) => res.json());
        updateData('messages', result.messages);
        updateData('groupCurrent', result.group);
      } else {
        result = await fetch(
          `https://api-packer-ui.onrender.com/api/messenger/v1/group/id?groupId=${group?.id}`
        ).then((res) => res.json());
        updateData('messages', result);
      }
    };
    fetchData();
    return () => {
      updateData('messages', []);
      updateData('groupCurrent', null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={{ ...tailwind(`p-3 flex-col`), height }}>
      <Header navigation={navigation} group={group} friend={params?.friend} />
      <ScrollView style={{ ...tailwind(`flex-1`), width: width - 12 }}>
        <Content />
      </ScrollView>
      <Toolbar friend={params?.friend} group={group} />
    </SafeAreaView>
  );
};

export default Main;
