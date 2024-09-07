import * as React from "react";
import { View } from "react-native";
import tailwind from "../../../tailwind";
import { EvilIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import IconButton from "../../IconButton";
import { sendFeelPost } from "../../../apis/postAPIs";
import { AppContext } from "../../../contexts/index";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Post } from "../../../interfaces/Post";
import { Media } from "../../../interfaces/Media";

type ToolbarProps = {
  post: Post,
  medias: Media[],
  feel: string[],
  handleFeel?: Function,
  loading?: boolean
}

type ScreenList = NavigationProp<{
  DetailPost: {
    medias: Media[],
    post: Post
  }
}>

const Toolbar = ({ post, medias, feel, handleFeel, loading }: ToolbarProps) => {
  //
  const {
    state: { user, list_post },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  const handleLike = async () => {
    if (!user) return;

    const result = await sendFeelPost(post?.id, user?.id);
    updateData(
      "list_post",
      [...list_post].map((item) => {
        if (item?.post?.id === post?.id) {
          if (result) {
            item.feel = [...item.feel, user.id];
          } else {
            item.feel = [...item.feel].filter((item) => item !== user.id);
          }
          return item;
        }

        return item;
      })
    );
    handleFeel?.(result);
  };
  //
  return loading ? (
    <></>
  ) : (
    <View
      style={tailwind(
        `flex-row gap-3 px-3 pb-3 items-center justify-between border-b border-gray-300`
      )}
    >
      <IconButton
        IconContainer={FontAwesome}
        iconName={{
          before: "heart-o",
          after: "heart",
        }}
        onPress={handleLike}
        iconSize={18}
        text="Love"
        changeColor
        active={(feel || []).find((item) => user?.id === item)}
      />
      <IconButton
        onPress={() =>
          navigation.navigate("DetailPost", {
            post,
            medias,
          })
        }
        IconContainer={EvilIcons}
        iconSize={28}
        iconName="comment"
        text="Comment"
      />
      <IconButton
        IconContainer={Ionicons}
        iconSize={22}
        iconName="copy-outline"
        text="Copy"
      />
      <IconButton
        IconContainer={EvilIcons}
        iconSize={28}
        iconName="share-google"
        text="Share"
      />
    </View>
  );
};

export default Toolbar;
