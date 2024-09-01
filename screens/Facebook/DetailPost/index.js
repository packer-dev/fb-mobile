import * as React from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import tailwind from "../../../tailwind";
import useKeyboard from "../../../hooks/useKeyboard";
import Post from "../../../components/Facebook/Post/index";
import { getPostById } from "../../../apis/postAPIs";
import { AppContext } from "../../../contexts/index";
import { postResponseModel } from "../../../models";
import { useNavigation } from "@react-navigation/native";
import { object } from "prop-types";

const DetailPost = ({ route }) => {
  const {
    state: { user, showKeyboard },
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  const { height, keyboardHeight } = useKeyboard();
  const [response, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const post = await getPostById(route?.params?.post?.id);
      if (!post) {
        navigation.goBack(null);
      }
      setPost(postResponseModel(post));
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route?.params?.postId]);
  return (
    <View style={tailwind(`bg-white flex-1`)}>
      <SafeAreaView
        style={[
          {
            ...tailwind(
              `flex-col ${
                showKeyboard && Platform.OS === "ios" ? "" : "flex-1"
              }`
            ),
          },
          showKeyboard && Platform.OS === "ios" ? { height } : {},
          {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            paddingBottom: Platform.OS === "android" ? 16 : 0,
          },
        ]}
      >
        {
          <Post
            isDetail
            post={response?.post}
            medias={response?.medias}
            feel={response?.feel}
            navigation={navigation}
            keyboardHeight={keyboardHeight}
            handleFeel={(result) =>
              response &&
              setPost({
                ...response,
                feel: !result
                  ? [...response.feel].filter((item) => item !== user?.id)
                  : [...response.feel, user?.id],
              })
            }
            loading={loading}
          />
        }
      </SafeAreaView>
    </View>
  );
};

DetailPost.propTypes = {
  route: object,
};

export default DetailPost;
