import * as React from "react";
import { View } from "react-native";
import tailwind from "../../../tailwind";
import ItemComment from "./ItemComment";
import { CommentDTO } from "../../../interfaces/Comment";

const Comments = ({ list = [] }: { list: CommentDTO[] }) => {
  return (
    <View style={tailwind(`flex-col gap-2 px-3 pb-6`)}>
      {list?.map((comment) => (
        <ItemComment key={comment?.item?.id} comment={comment?.item} />
      ))}
    </View>
  );
};


export default Comments;
