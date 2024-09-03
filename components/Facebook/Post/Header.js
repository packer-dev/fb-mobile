import * as React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import tailwind from "../../../tailwind";
import Avatar from "../../Avatar";
import {
  Feather,
  FontAwesome6,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import moment from "moment";
import { deletePost } from "../../../apis/postAPIs";
import { AppContext } from "../../../contexts/index";
import { array, bool, func, object } from "prop-types";
import { useNavigation } from "@react-navigation/native";

const Header = ({ post, isDetail, setLoading, loading, medias = [] }) => {
  //
  const navigation = useNavigation();
  const {
    state: { list_post, user },
    updateData,
  } = React.useContext(AppContext);
  const handleDeletePost = async () => {
    Alert.alert("Do you want to delete this post.", "", [
      {
        text: "Cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setLoading(true);
          deletePost(post?.id)
            .then(() => {
              updateData(
                "list_post",
                [...list_post].filter((item) => item?.post?.id !== post?.id)
              );
            })
            .catch((e) => {});
        },
      },
    ]);
  };
  const descriptionSmall = () => {
    switch (post?.type) {
      case 3:
        return " updated his profile picture.";
      case 2:
        return " updated his cover photo.";
      default:
        return "";
    }
  };
  //
  return (
    <View
      style={tailwind(
        `flex-row gap-3 p-3 items-center ${
          isDetail ? "border-b border-gray-100" : ""
        }`
      )}
    >
      {isDetail && (
        <TouchableOpacity
          onPress={() => navigation?.goBack?.(null)}
          style={tailwind(`pr-2`)}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      )}
      <View style={tailwind(`flex-1 flex-row gap-3 items-center`)}>
        <Avatar size={11} uri={post?.user?.avatar} loading={loading} />
        <View style={tailwind(`flex-1 flex-col gap-1`)}>
          <TouchableOpacity
            style={tailwind(`flex-row`)}
            onPress={() =>
              navigation?.navigate?.("DetailProfile", {
                visit: post?.user,
              })
            }
          >
            {loading ? (
              <View style={tailwind(`w-40 h-2 rounded-lg bg-gray-200`)}></View>
            ) : (
              <Text>
                <Text style={tailwind(`font-semibold`)}>
                  {post?.user?.name || "Alexander Toyota"}
                </Text>
                {descriptionSmall()}
              </Text>
            )}
          </TouchableOpacity>
          <View style={tailwind(`flex-row items-center gap-3`)}>
            {loading ? (
              <View style={tailwind(`w-20 h-2 rounded-lg bg-gray-200`)}></View>
            ) : (
              <Text style={tailwind(`text-gray-600 text-sm`)}>
                {moment(post?.time_created).fromNow()}.
              </Text>
            )}
            <FontAwesome6 name="earth-africa" size={12} color="gray" />
          </View>
        </View>
      </View>
      <View style={tailwind(`flex-row gap-3 items-center`)}>
        {post?.user?.id === user?.id && (
          <MaterialCommunityIcons
            onPress={() =>
              navigation.navigate("CreatePost", {
                post,
                medias,
              })
            }
            name="account-edit-outline"
            size={20}
            color="gray"
          />
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
  setLoading: func,
  loading: bool,
  medias: array,
};

export default Header;
