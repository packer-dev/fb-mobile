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
import PropTypes from "prop-types";

const DetailProfile = ({ route }) => {
  const {
    state: { visit, user },
    updateData,
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  const fetchData = async () => {
    if (!visit?.id) return;
    setLoading(true);
    const posts = await getPostByIdUser(visit?.id, true);
    updateData(
      "list_post",
      (posts?.list || []).map((item) => postResponseModel(item))
    );
    setLoading(false);
  };
  React.useEffect(() => {
    if (!user || !visit) return;
    user?.id !== visit?.id && fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [user, visit]);
  React.useEffect(() => {
    user && fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [user]);
  React.useEffect(() => {
    updateData("visit", route?.params?.visit);
    updateData("list_post", []);
  }, [route]);
  return (
    <Container route={route}>
      <Header loading={loading} />
      <View style={tailwind(`flex-1`)}>
        {loading ? <Loading /> : <Content />}
      </View>
    </Container>
  );
};

DetailProfile.propTypes = {
  route: PropTypes.any
}

export default DetailProfile;
