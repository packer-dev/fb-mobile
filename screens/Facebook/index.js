import * as React from "react";
import Header from "./Header";
import Content from "./Content";
import Container from "./Container";
import { AppContext } from "../../contexts/index";
import { postResponseModel } from "../../models";
import { getPostByIdUser } from "../../apis/postAPIs";
import { any } from "prop-types";

const Facebook = ({ route }) => {
  //
  const {
    state: { user },
    updateData,
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      updateData("list_post", []);
      const posts = await getPostByIdUser(user?.id, "false");
      updateData(
        "list_post",
        (posts?.list || []).map((item) => postResponseModel(item))
      );
      setLoading(false);
    };
    user && fetchData();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [user, route]);
  //
  return (
    <Container route={route}>
      <Header />
      <Content loading={loading} />
    </Container>
  );
};

Facebook.propTypes = any.isRequired;

export default Facebook;
