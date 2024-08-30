import Wrapper from "../Wrapper";
import { View, ScrollView } from "react-native";
import Navbar from "./Navbar";
import tailwind from "../../tailwind";
import { bool, node, object } from "prop-types";

const Container = ({ children, route, scrollView }) => {
  return (
    <Wrapper overflowHidden>
      <View style={tailwind(`flex-1 flex-col`)}>
        <View style={tailwind(`flex-1`)}>
          {scrollView ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {children}
            </ScrollView>
          ) : (
            children
          )}
        </View>
        <Navbar route={route} />
      </View>
    </Wrapper>
  );
};

Container.propTypes = {
  children: node,
  route: object,
  scrollView: bool
}

export default Container;
