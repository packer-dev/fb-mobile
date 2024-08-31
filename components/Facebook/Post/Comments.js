import * as React from "react";
import { View } from "react-native";
import tailwind from "../../../tailwind";
import ItemComment from "./ItemComment";
import { object } from "prop-types";

const Comments = ({ list = [] }) => {
  return (
    <View style={tailwind(`flex-col gap-2 px-3`)}>
      {list?.map((comment) => (
        <ItemComment key={comment?.item?.id} comment={comment?.item} />
      ))}
    </View>
  );
};

Comments.propTypes = {
  list: object,
};

export default Comments;
