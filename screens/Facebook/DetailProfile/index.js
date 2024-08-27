import * as React from "react";
import { View } from "react-native";
import tailwind from "../../../tailwind";
import Header from "./Header";
import Content from "./Content";
import Container from "../Container";
import { AppContext } from "../../../contexts/index";
import { postResponseModel } from "../../../models";
import { getPostByIdUser } from "../../../apis/postAPIs";
import Loading from "./Loading";

const DetailProfile = ({ route }) => {
  const {
    state: { visit },
    updateData,
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      updateData("list_post", []);
      const posts = await getPostByIdUser(visit?.id);
      updateData(
        "list_post",
        (posts || []).map((item) => postResponseModel(item))
      );
      setLoading(false);
    };
    visit && fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [visit]);
  React.useEffect(() => {
    if (route?.params?.visit) {
      updateData("visit", route?.params?.visit);
    }
  }, [route?.params?.visit]);
  return (
    <Container route={route}>
      <Header loading={loading} />
      <View style={tailwind(`flex-1`)}>
        {loading ? <Loading /> : <Content />}
      </View>
    </Container>
  );
};

export default DetailProfile;
