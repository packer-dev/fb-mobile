import * as React from 'react';
import { View, ScrollView } from 'react-native';
import tailwind from '../../tailwind';
import ItemGroup from './ItemGroup';
import { AppContext } from '../../contexts/index';

const ListGroup = ({ navigation }) => {
  //
  const {
    updateData,
    state: { groups, user },
  } = React.useContext(AppContext);
  React.useEffect(() => {
    updateData('loading', true);
    const fetchData = async () => {
      const result = await fetch(
        `https://api-packer-ui.onrender.com/api/messenger/v1/message/list?userId=${user?.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => res.json());
      updateData('groups', result);
      updateData('loading', false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <ScrollView style={tailwind(`flex-1`)}>
      <View style={tailwind(`flex flex-col gap-4 p-3`)}>
        {groups?.map((group) => (
          <ItemGroup
            group={group}
            key={group?.id}
            handleClick={() => {
              navigation && navigation.navigate('Main', { group });
              updateData('groupCurrent', group);
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ListGroup;
