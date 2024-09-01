import * as React from "react";
import { View } from "react-native";
import tailwind from "../../../tailwind";
import ItemComment from "./ItemComment";
import { array } from "prop-types";

const Comments = ({ list = [] }) => {
  return (
    <View style={tailwind(`flex-col gap-2 px-3 pb-6`)}>
      {list?.map((comment) => (
        <ItemComment key={comment?.item?.id} comment={comment?.item} />
      ))}
    </View>
  );
};

Comments.propTypes = {
  list: array,
};

export default Comments;
