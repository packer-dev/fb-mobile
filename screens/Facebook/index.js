import * as React from "react";
import Header from "./Header";
import Content from "./Content";
import Container from "./Container";
import { AppContext } from "../../contexts/index";
import { postResponseModel } from "../../models";
import { getPostByIdUser } from "../../apis/postAPIs";
import { useNavigation } from "@react-navigation/native";

const Facebook = ({ route }) => {
  //
  const {
    state: { user },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchData = async () => {
      updateData("list_post", []);
      const posts = await getPostByIdUser(user?.id, "false");
      updateData(
        "list_post",
        (posts || []).map((item) => postResponseModel(item))
      );
    };
    fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [user, navigation]);
  //
  return (
    <Container navigation={navigation} route={route}>
      <Header navigation={navigation} />
      <Content navigation={navigation} />
    </Container>
  );
};

export default Facebook;
