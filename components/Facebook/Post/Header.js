import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from '../../../tailwind';
import Avatar from '../../Avatar';
import { Entypo, Feather, FontAwesome6, AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import { deletePost } from '../../../apis/postAPIs';
import { AppContext } from '../../../contexts/index';
import { bool, func, object } from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const Header = ({ post, isDetail, setLoading }) => {
  //
  const navigation = useNavigation();
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
  const descriptionSmall = () => {
    switch (post?.type) {
      case 3:
        return ' updated his profile picture.'
      case 2:
        return ' updated his cover photo.'
      default:
        return '';
    }
  }
  //
  return (
    <View style={tailwind(`flex-row gap-3 px-3 pt-3 items-center`)}>
      {isDetail && (
        <TouchableOpacity
          onPress={() => navigation?.goBack?.(null)}
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
              navigation?.navigate?.('DetailProfile', {
                visit: post?.user,
              })
            }>
            <Text>
              <Text style={tailwind(`font-semibold`)}>
                {post?.user?.name || 'Alexander Toyota'}
              </Text>
              {descriptionSmall()}
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

Header.propTypes = {
  post: object,
  isDetail: bool,
  setLoading: func
}

export default Header;
