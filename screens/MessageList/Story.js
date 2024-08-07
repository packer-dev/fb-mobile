import * as React from 'react';
import tailwind from '../../tailwind';
import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AppContext } from '../../contexts/index';
import ItemStory from './ItemStory';

const width = Dimensions.get('window').width - 24;

const Story = ({ navigation }) => {
  const {
    updateData,
    state: { friends, user },
  } = React.useContext(AppContext);
  React.useEffect(() => {
    updateData('loading', true);
    const fetchData = async () => {
      const result = await fetch(
        `https://api-packer-ui.onrender.com/api/messenger/v1/friends?userId=${user.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => res.json());
      updateData('friends', result);
      updateData('loading', false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <ScrollView
        horizontal
        style={{ width }}
        showsHorizontalScrollIndicator={false}>
        <View style={tailwind(`p-3 flex-row gap-6`)}>
          <TouchableWithoutFeedback>
            <View style={tailwind(`flex-col gap-2 justify-center`)}>
              <View
                style={tailwind(
                  `w-14 h-14 rounded-full bg-gray-200 flex justify-center items-center`
                )}>
                <Entypo name="plus" size={28} color="gray" />
              </View>
              <Text
                style={tailwind(`text-xs font-semibold text-gray-600 mx-auto`)}>
                Your story
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {friends?.map((friend) => (
            <ItemStory
              key={friend.id}
              friend={friend}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Story;
