import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from '../../../tailwind';
import Avatar from '../../Avatar';
import { Entypo, Feather, FontAwesome6, AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import { deletePost } from '../../../apis/postAPIs';
import { AppContext } from '../../../contexts/index';

const Header = ({ post, isDetail, setLoading, navigation }) => {
  //
  const {
    state: { list_post, user },
    updateData,
  } = React.useContext(AppContext);
  const handleDeletePost = async () => {
    setLoading(true);
    await deletePost(post?.id);
    updateData(
      'list_post',
      [...list_post].filter((item) => item?.post?.id !== post?.id)
    );
  };
  //
  return (
    <View style={tailwind(`flex-row gap-3 px-3 pt-3 items-center`)}>
      {isDetail && (
        <TouchableOpacity
          onPress={() => navigation && navigation.goBack(null)}
          style={tailwind(`pr-2`)}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      )}
      <View style={tailwind(`flex-1 flex-row gap-3 items-center`)}>
        <Avatar size={11} uri={post?.user?.avatar} />
        <View style={tailwind(`flex-1 flex-col gap-1`)}>
          <TouchableOpacity
            style={tailwind(`flex-row`)}
            onPress={() =>
              navigation &&
              navigation.navigate('DetailProfile', {
                visit: post?.user,
              })
            }>
            <Text>
              <Text style={tailwind(`font-semibold`)}>
                {post?.user?.name || 'Alexander Toyota'}
              </Text>
              {post?.type === 3
                ? ' updated his profile picture.'
                : post?.type === 2
                ? ' updated his cover photo.'
                : ''}
            </Text>
          </TouchableOpacity>
          <View style={tailwind(`flex-row items-center gap-3`)}>
            <Text style={tailwind(`text-gray-600 text-sm`)}>
              {moment(post?.time_created).fromNow()}.
            </Text>
            <FontAwesome6 name="earth-africa" size={12} color="gray" />
          </View>
        </View>
      </View>
      <View style={tailwind(`flex-row gap-3 items-center`)}>
        {post?.user?.id === user?.id && (
          <Entypo name="dots-three-horizontal" size={20} color="gray" />
        )}
        {!isDetail && post?.user?.id === user?.id && (
          <TouchableOpacity onPress={handleDeletePost}>
            <Feather name="x" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
